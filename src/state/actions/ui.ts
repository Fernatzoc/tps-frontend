import { ActionType } from "../action-types";

interface openSidebar {
  type: ActionType.OPEN_SIDEBAR;
}

interface closeSidebar {
  type: ActionType.CLOSE_SIDEBAR;
}

export type Action = openSidebar | closeSidebar;
