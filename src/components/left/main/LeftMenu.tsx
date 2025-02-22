import type { FC } from "../../../lib/teact/teact";
import React, {
  memo,
  useEffect,
  useMemo,
  useRef,
} from "../../../lib/teact/teact";
import { getActions, withGlobal } from "../../../global";

import type { GlobalState } from "../../../global/types";
import type { ISettings } from "../../../types";
import { LeftColumnContent, SettingsScreens } from "../../../types";

import { APP_NAME, DEBUG, IS_BETA } from "../../../config";
import {
  selectCanSetPasscode,
  selectCurrentMessageList,
  selectIsCurrentUserPremium,
  selectTabState,
  selectTheme,
} from "../../../global/selectors";
import buildClassName from "../../../util/buildClassName";
import captureEscKeyListener from "../../../util/captureEscKeyListener";
import {
  IS_APP,
  IS_ELECTRON,
  IS_MAC_OS,
} from "../../../util/windowEnvironment";

import useAppLayout from "../../../hooks/useAppLayout";
import useElectronDrag from "../../../hooks/useElectronDrag";
import useFlag from "../../../hooks/useFlag";
import { useHotkeys } from "../../../hooks/useHotkeys";
import useLastCallback from "../../../hooks/useLastCallback";
import useOldLang from "../../../hooks/useOldLang";
import { useFullscreenStatus } from "../../../hooks/window/useFullscreen";
import useLeftHeaderButtonRtlForumTransition from "./hooks/useLeftHeaderButtonRtlForumTransition";

import Button from "../../ui/Button";
import DropdownMenu from "../../ui/DropdownMenu";
import LeftSideMenuItems from "./LeftSideMenuItems";

import "./LeftMainHeader.scss";

type OwnProps = {
  shouldHideSearch?: boolean;
  content: LeftColumnContent;
  contactsFilter: string;
  isClosingSearch?: boolean;
  shouldSkipTransition?: boolean;
  onSearchQuery: (query: string) => void;
  onSelectSettings: NoneToVoidFunction;
  onSelectContacts: NoneToVoidFunction;
  onSelectArchived: NoneToVoidFunction;
  onReset: NoneToVoidFunction;
};

type StateProps = {
  searchQuery?: string;
  isLoading: boolean;
  globalSearchChatId?: string;
  searchDate?: number;
  theme: ISettings["theme"];
  isMessageListOpen: boolean;
  isCurrentUserPremium?: boolean;
  isConnectionStatusMinimized: ISettings["isConnectionStatusMinimized"];
  areChatsLoaded?: boolean;
  hasPasscode?: boolean;
  canSetPasscode?: boolean;
} & Pick<GlobalState, "connectionState" | "isSyncing" | "isFetchingDifference">;

const LeftMainHeader: FC<OwnProps & StateProps> = ({
  shouldHideSearch,
  content,
  shouldSkipTransition,
  globalSearchChatId,
  isMessageListOpen,
  hasPasscode,
  canSetPasscode,
  onSelectSettings,
  onSelectContacts,
  onSelectArchived,
  onReset,
}) => {
  const { lockScreen, requestNextSettingsScreen } = getActions();

  const oldLang = useOldLang();
  const { isMobile } = useAppLayout();

  const [isBotMenuOpen, markBotMenuOpen, unmarkBotMenuOpen] = useFlag();

  const hasMenu = content === LeftColumnContent.ChatList;

  const handleLockScreenHotkey = useLastCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasPasscode) {
      lockScreen();
    } else {
      requestNextSettingsScreen({ screen: SettingsScreens.PasscodeDisabled });
    }
  });

  useHotkeys(
    useMemo(
      () =>
        canSetPasscode
          ? {
              "Ctrl+Shift+L": handleLockScreenHotkey,
              "Alt+Shift+L": handleLockScreenHotkey,
              "Meta+Shift+L": handleLockScreenHotkey,
              ...(IS_APP && { "Mod+L": handleLockScreenHotkey }),
            }
          : undefined,
      [canSetPasscode]
    )
  );

  const MainButton: FC<{ onTrigger: () => void; isOpen?: boolean }> =
    useMemo(() => {
      return ({ onTrigger, isOpen }) => (
        <Button
          round
          ripple={hasMenu && !isMobile}
          size="smaller"
          color="translucent"
          className={isOpen ? "active" : ""}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={hasMenu ? onTrigger : () => onReset()}
          ariaLabel={
            hasMenu ? oldLang("AccDescrOpenMenu2") : "Return to chat list"
          }
        >
          <div
            className={buildClassName(
              "animated-menu-icon",
              !hasMenu && "state-back",
              shouldSkipTransition && "no-animation"
            )}
          />
        </Button>
      );
    }, [hasMenu, isMobile, oldLang, onReset, shouldSkipTransition]);

  const isSearchRelevant =
    Boolean(globalSearchChatId) ||
    content === LeftColumnContent.GlobalSearch ||
    content === LeftColumnContent.Contacts;

  const isSearchFocused = isMobile
    ? !isMessageListOpen && isSearchRelevant
    : isSearchRelevant;

  useEffect(
    () =>
      isSearchFocused ? captureEscKeyListener(() => onReset()) : undefined,
    [isSearchFocused, onReset]
  );

  const versionString = IS_BETA
    ? `${APP_VERSION} Beta (${APP_REVISION})`
    : DEBUG
    ? APP_REVISION
    : APP_VERSION;

  const isFullscreen = useFullscreenStatus();

  // Disable dropdown menu RTL animation for resize
  const {
    shouldDisableDropdownMenuTransitionRef,
    handleDropdownMenuTransitionEnd,
  } = useLeftHeaderButtonRtlForumTransition(shouldHideSearch);

  // eslint-disable-next-line no-null/no-null
  const headerRef = useRef<HTMLDivElement>(null);
  useElectronDrag(headerRef);

  return (
    <div className="">
      <div id="LeftMenu" className="left-header" ref={headerRef}>
        {oldLang.isRtl && <div className="DropdownMenuFiller" />}
        <DropdownMenu
          trigger={MainButton}
          footer={`${APP_NAME} ${versionString}`}
          className={buildClassName(
            "main-menu",
            oldLang.isRtl && "rtl",
            shouldHideSearch && oldLang.isRtl && "right-aligned",
            shouldDisableDropdownMenuTransitionRef.current &&
              oldLang.isRtl &&
              "disable-transition"
          )}
          forceOpen={isBotMenuOpen}
          positionX={shouldHideSearch && oldLang.isRtl ? "right" : "left"}
          transformOriginX={
            IS_ELECTRON && IS_MAC_OS && !isFullscreen ? 90 : undefined
          }
          onTransitionEnd={
            oldLang.isRtl ? handleDropdownMenuTransitionEnd : undefined
          }
        >
          <LeftSideMenuItems
            onSelectArchived={onSelectArchived}
            onSelectContacts={onSelectContacts}
            onSelectSettings={onSelectSettings}
            onBotMenuOpened={markBotMenuOpen}
            onBotMenuClosed={unmarkBotMenuOpen}
          />
        </DropdownMenu>
      </div>
    </div>
  );
};

export default memo(
  withGlobal<OwnProps>((global): StateProps => {
    const tabState = selectTabState(global);
    const {
      query: searchQuery,
      fetchingStatus,
      chatId,
      minDate,
    } = tabState.globalSearch;
    const { connectionState, isSyncing, isFetchingDifference } = global;
    const { isConnectionStatusMinimized } = global.settings.byKey;

    return {
      searchQuery,
      isLoading: fetchingStatus
        ? Boolean(fetchingStatus.chats || fetchingStatus.messages)
        : false,
      globalSearchChatId: chatId,
      searchDate: minDate,
      theme: selectTheme(global),
      connectionState,
      isSyncing,
      isFetchingDifference,
      isMessageListOpen: Boolean(selectCurrentMessageList(global)),
      isConnectionStatusMinimized,
      isCurrentUserPremium: selectIsCurrentUserPremium(global),
      areChatsLoaded: Boolean(global.chats.listIds.active),
      hasPasscode: Boolean(global.passcode.hasPasscode),
      canSetPasscode: selectCanSetPasscode(global),
    };
  })(LeftMainHeader)
);
