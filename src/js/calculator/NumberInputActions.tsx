/// Actions.
export enum ActionType {
  Push,
  Pop,
  Clear
}


/// Action.
export interface Action {
  type: ActionType;
  payload?: string;
}


/// Action creators.
export function push(num: string): Action {
  return {
    type: ActionType.Push,
    payload: num
  };
}
export function pop(): Action {
  return {
    type: ActionType.Push
  };
}
export function clear(): Action {
  return {
    type: ActionType.Clear
  };
}