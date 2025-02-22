Task 1: Reworking the Text Editor

Markdown Syntax Support: I moved away from RegExp-based parsing, which was prone to inconsistencies. Instead, I adopted an Abstract Syntax Tree (AST) approach to reliably support all Telegram formatting entities, ensuring more accurate text transformations.
Quote Editing: I introduced support for inline and block quotes, allowing seamless modifications while preserving formatting integrity.

Task 2: Redesigning Chat Folders

Aligned the Chat Folders UI with the provided mockups, introduced a new appearance
