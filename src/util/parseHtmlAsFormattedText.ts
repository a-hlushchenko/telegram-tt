import type { ApiFormattedText, ApiMessageEntity } from "../api/types";
import { ApiMessageEntityTypes } from "../api/types";

import { RE_LINK_TEMPLATE } from "../config";
import { IS_EMOJI_SUPPORTED } from "./windowEnvironment";

export const ENTITY_CLASS_BY_NODE_NAME: Record<string, ApiMessageEntityTypes> =
  {
    B: ApiMessageEntityTypes.Bold,
    STRONG: ApiMessageEntityTypes.Bold,
    I: ApiMessageEntityTypes.Italic,
    EM: ApiMessageEntityTypes.Italic,
    INS: ApiMessageEntityTypes.Underline,
    U: ApiMessageEntityTypes.Underline,
    S: ApiMessageEntityTypes.Strike,
    STRIKE: ApiMessageEntityTypes.Strike,
    DEL: ApiMessageEntityTypes.Strike,
    CODE: ApiMessageEntityTypes.Code,
    PRE: ApiMessageEntityTypes.Pre,
    BLOCKQUOTE: ApiMessageEntityTypes.Blockquote,
  };

const MAX_TAG_DEEPNESS = 3;

export default function parseHtmlAsFormattedText(
  html: string,
  withMarkdownLinks = false,
  skipMarkdown = false
): ApiFormattedText {
  const fragment = document.createElement("div");
  fragment.innerHTML = skipMarkdown
    ? html
    : withMarkdownLinks
    ? parseMarkdown(parseMarkdownLinks(html))
    : parseMarkdown(html);
  fixImageContent(fragment);
  const text = fragment.innerText.trim().replace(/\u200b+/g, "");
  const trimShift = fragment.innerText.indexOf(text[0]);
  let textIndex = -trimShift;
  let recursionDeepness = 0;
  const entities: ApiMessageEntity[] = [];

  function addEntity(node: ChildNode) {
    if (node.nodeType === Node.COMMENT_NODE) return;
    const { index, entity } = getEntityDataFromNode(node, text, textIndex);

    if (entity) {
      textIndex = index;
      entities.push(entity);
    } else if (node.textContent) {
      // Skip newlines on the beginning
      if (index === 0 && node.textContent.trim() === "") {
        return;
      }
      textIndex += node.textContent.length;
    }

    if (node.hasChildNodes() && recursionDeepness <= MAX_TAG_DEEPNESS) {
      recursionDeepness += 1;
      Array.from(node.childNodes).forEach(addEntity);
    }
  }

  Array.from(fragment.childNodes).forEach((node) => {
    recursionDeepness = 1;
    addEntity(node);
  });

  return {
    text,
    entities: entities.length ? entities : undefined,
  };
}

export function fixImageContent(fragment: HTMLDivElement) {
  fragment.querySelectorAll("img").forEach((node) => {
    if (node.dataset.documentId) {
      // Custom Emoji
      node.textContent = (node as HTMLImageElement).alt || "";
    } else {
      // Regular emoji with image fallback
      node.replaceWith(node.alt || "");
    }
  });
}

function parseMarkdown(html: string): string {
  let parsedHtml = html.slice(0);

  parsedHtml = parsedHtml.split("&nbsp;").join(" ");

  while (true) {
    let start = parsedHtml.indexOf("<div><br");
    if (start === -1) break;
    let end = parsedHtml.indexOf("</div>", start);
    if (end === -1) break;
    parsedHtml =
      parsedHtml.substring(0, start) + "\n" + parsedHtml.substring(end + 6);
  }

  while (true) {
    let start = parsedHtml.indexOf("<br");
    if (start === -1) break;
    let end = parsedHtml.indexOf(">", start);
    if (end === -1) break;
    parsedHtml =
      parsedHtml.substring(0, start) + "\n" + parsedHtml.substring(end + 1);
  }

  parsedHtml = parsedHtml.split("</div><div>").join("\n");

  parsedHtml = parsedHtml.split("<div>").join("\n");
  parsedHtml = parsedHtml.split("</div>").join("");

  // ```text```
  while (true) {
    let start = parsedHtml.indexOf("```");
    if (start === -1) break;
    let end = parsedHtml.indexOf("```", start + 3);
    if (end === -1) break;
    let firstNewline = parsedHtml.indexOf("\n", start + 3);
    let language = "";
    let codeContent = "";
    if (firstNewline !== -1 && firstNewline < end) {
      language = parsedHtml.substring(start + 3, firstNewline).trim();
      codeContent = parsedHtml.substring(firstNewline + 1, end);
    } else {
      codeContent = parsedHtml.substring(start + 3, end);
    }
    let preTag =
      `<pre${language ? ' data-language="' + language + '"' : ""}>` +
      codeContent +
      "</pre>";
    parsedHtml =
      parsedHtml.substring(0, start) + preTag + parsedHtml.substring(end + 3);
  }

  // `code`
  while (true) {
    let start = parsedHtml.indexOf("`");
    if (start === -1) break;
    let end = parsedHtml.indexOf("`", start + 1);
    if (end === -1) break;
    let code = parsedHtml.substring(start + 1, end);
    let codeTag = `<code>${code}</code>`;
    parsedHtml =
      parsedHtml.substring(0, start) + codeTag + parsedHtml.substring(end + 1);
  }

  if (!IS_EMOJI_SUPPORTED) {
    //  [<img ... alt="text" ...>] -> [text]
    let pos = 0;
    while (true) {
      let start = parsedHtml.indexOf("[<img", pos);
      if (start === -1) break;
      let end = parsedHtml.indexOf(">]", start);
      if (end === -1) break;
      let tag = parsedHtml.substring(start, end + 2);
      let altIndex = tag.indexOf('alt="');
      if (altIndex === -1) {
        pos = start + 1;
        continue;
      }
      altIndex += 5;
      let altEnd = tag.indexOf('"', altIndex);
      if (altEnd === -1) {
        pos = start + 1;
        continue;
      }
      let altText = tag.substring(altIndex, altEnd);
      parsedHtml =
        parsedHtml.substring(0, start) +
        "[" +
        altText +
        "]" +
        parsedHtml.substring(end + 2);
      pos = start + 1;
    }
  }
  //  [text](customEmoji:123) -> link
  let pos = 0;
  while (true) {
    let start = parsedHtml.indexOf("[", pos);
    if (start === -1) break;
    let endBracket = parsedHtml.indexOf("]", start);
    if (endBracket === -1) {
      pos = start + 1;
      continue;
    }
    if (parsedHtml[endBracket + 1] !== "(") {
      pos = endBracket + 1;
      continue;
    }
    let endParen = parsedHtml.indexOf(")", endBracket + 2);
    if (endParen === -1) {
      pos = endBracket + 1;
      continue;
    }
    let textContent = parsedHtml.substring(start + 1, endBracket);
    let marker = parsedHtml.substring(endBracket + 2, endParen);
    if (marker.startsWith("customEmoji:")) {
      let docId = marker.substring("customEmoji:".length);
      let imgTag = `<img alt="${textContent}" data-document-id="${docId}">`;
      parsedHtml =
        parsedHtml.substring(0, start) +
        imgTag +
        parsedHtml.substring(endParen + 1);
      pos = start + imgTag.length;
    } else {
      const href = marker.includes("://")
        ? marker
        : marker.includes("@")
        ? `mailto:${marker}`
        : `https://${marker}`;
      let linkTag = `<a href="${href}">${textContent}</a>`;
      parsedHtml =
        parsedHtml.substring(0, start) +
        linkTag +
        parsedHtml.substring(endParen + 1);
      pos = start + linkTag.length;
    }
  }

  // Bold **text**
  while (true) {
    let start = parsedHtml.indexOf("**");
    if (start === -1) break;
    let end = parsedHtml.indexOf("**", start + 2);
    if (end === -1) break;
    let content = parsedHtml.substring(start + 2, end);
    let boldTag = `<b>${content}</b>`;
    parsedHtml =
      parsedHtml.substring(0, start) + boldTag + parsedHtml.substring(end + 2);
  }
  // Italic __text__
  while (true) {
    let start = parsedHtml.indexOf("__");
    if (start === -1) break;
    let end = parsedHtml.indexOf("__", start + 2);
    if (end === -1) break;
    let content = parsedHtml.substring(start + 2, end);
    let italicTag = `<i>${content}</i>`;
    parsedHtml =
      parsedHtml.substring(0, start) +
      italicTag +
      parsedHtml.substring(end + 2);
  }
  // Strikethrough ~~text~~
  while (true) {
    let start = parsedHtml.indexOf("~~");
    if (start === -1) break;
    let end = parsedHtml.indexOf("~~", start + 2);
    if (end === -1) break;
    let content = parsedHtml.substring(start + 2, end);
    let sTag = `<s>${content}</s>`;
    parsedHtml =
      parsedHtml.substring(0, start) + sTag + parsedHtml.substring(end + 2);
  }
  // Spoiler ||text||
  while (true) {
    let start = parsedHtml.indexOf("||");
    if (start === -1) break;
    let end = parsedHtml.indexOf("||", start + 2);
    if (end === -1) break;
    let content = parsedHtml.substring(start + 2, end);
    let spoilerTag = `<span data-entity-type="${ApiMessageEntityTypes.Spoiler}">${content}</span>`;
    parsedHtml =
      parsedHtml.substring(0, start) +
      spoilerTag +
      parsedHtml.substring(end + 2);
  }

  parsedHtml = parsedHtml.split("&gt;").join(">");

  // Quote >text
  let lines: string[];
  if (parsedHtml.indexOf("\n") !== -1) {
    lines = parsedHtml.split("\n");
  } else {
    lines = parsedHtml.split("<br>");
  }

  let newLines: string[] = [];
  let quoteBuffer: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith(">")) {
      quoteBuffer.push(trimmed.substring(1).trim());
    } else {
      if (quoteBuffer.length > 0) {
        newLines.push(
          "<blockquote>" + quoteBuffer.join("\n") + "</blockquote>"
        );
        quoteBuffer = [];
      }
      newLines.push(lines[i]);
    }
  }
  if (quoteBuffer.length > 0) {
    newLines.push("<blockquote>" + quoteBuffer.join("\n") + "</blockquote>");
  }
  parsedHtml = newLines.join("\n");

  return parsedHtml;
}

function parseMarkdownLinks(input: string): string {
  type Node =
    | { type: "text"; content: string }
    | { type: "link"; text: string; href: string };

  const nodes: Node[] = [];
  let i = 0;

  while (i < input.length) {
    if (input[i] === "[") {
      const endBracket = input.indexOf("]", i);
      if (endBracket !== -1 && input[endBracket + 1] === "(") {
        const endParen = input.indexOf(")", endBracket + 2);
        if (endParen !== -1) {
          const linkText = input.slice(i + 1, endBracket);
          const rawLink = input.slice(endBracket + 2, endParen);
          const href = rawLink.includes("://")
            ? rawLink
            : rawLink.includes("@")
            ? `mailto:${rawLink}`
            : `https://${rawLink}`;
          nodes.push({ type: "link", text: linkText, href });
          i = endParen + 1;
          continue;
        }
      }
    }
    let next = input.indexOf("[", i);
    if (next === -1) next = input.length;
    nodes.push({ type: "text", content: input.slice(i, next) });
    i = next;
  }

  let html = "";
  for (const node of nodes) {
    if (node.type === "text") {
      html += node.content;
    } else if (node.type === "link") {
      html += `<a href="${node.href}">${node.text}</a>`;
    }
  }
  return html;
}

function getEntityDataFromNode(
  node: ChildNode,
  rawText: string,
  textIndex: number
): { index: number; entity?: ApiMessageEntity } {
  const type = getEntityTypeFromNode(node);

  if (!type || !node.textContent) {
    return {
      index: textIndex,
      entity: undefined,
    };
  }

  const rawIndex = rawText.indexOf(node.textContent, textIndex);
  // In some cases, last text entity ends with a newline (which gets trimmed from `rawText`).
  // In this case, `rawIndex` would return `-1`, so we use `textIndex` instead.
  const index = rawIndex >= 0 ? rawIndex : textIndex;
  const offset = rawText.substring(0, index).length;
  const { length } = rawText.substring(index, index + node.textContent.length);

  if (type === ApiMessageEntityTypes.TextUrl) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        url: (node as HTMLAnchorElement).href,
      },
    };
  }
  if (type === ApiMessageEntityTypes.MentionName) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        userId: (node as HTMLAnchorElement).dataset.userId!,
      },
    };
  }

  if (type === ApiMessageEntityTypes.Pre) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        language: (node as HTMLPreElement).dataset.language,
      },
    };
  }

  if (type === ApiMessageEntityTypes.CustomEmoji) {
    return {
      index,
      entity: {
        type,
        offset,
        length,
        documentId: (node as HTMLImageElement).dataset.documentId!,
      },
    };
  }

  return {
    index,
    entity: {
      type,
      offset,
      length,
    },
  };
}

function getEntityTypeFromNode(
  node: ChildNode
): ApiMessageEntityTypes | undefined {
  if (node instanceof HTMLElement && node.dataset.entityType) {
    return node.dataset.entityType as ApiMessageEntityTypes;
  }

  if (ENTITY_CLASS_BY_NODE_NAME[node.nodeName]) {
    return ENTITY_CLASS_BY_NODE_NAME[node.nodeName];
  }

  if (node.nodeName === "A") {
    const anchor = node as HTMLAnchorElement;
    if (anchor.dataset.entityType === ApiMessageEntityTypes.MentionName) {
      return ApiMessageEntityTypes.MentionName;
    }
    if (anchor.dataset.entityType === ApiMessageEntityTypes.Url) {
      return ApiMessageEntityTypes.Url;
    }
    if (anchor.href.startsWith("mailto:")) {
      return ApiMessageEntityTypes.Email;
    }
    if (anchor.href.startsWith("tel:")) {
      return ApiMessageEntityTypes.Phone;
    }
    if (anchor.href !== anchor.textContent) {
      return ApiMessageEntityTypes.TextUrl;
    }

    return ApiMessageEntityTypes.Url;
  }

  if (node.nodeName === "SPAN") {
    return (node as HTMLElement).dataset.entityType as any;
  }

  if (node.nodeName === "IMG") {
    if ((node as HTMLImageElement).dataset.documentId) {
      return ApiMessageEntityTypes.CustomEmoji;
    }
  }

  return undefined;
}
