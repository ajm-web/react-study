import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import * as concat from "lodash/concat";
import * as dropRight from "lodash/dropRight";
import * as NumberInputActions from "./NumberInputActions";

/// State.
export class State {
  constructor(public numberInputList: string[] = []) {}

  push(num: string): State {
    return new State(concat(this.numberInputList, num));
  }
  pop(): State {
    return new State(dropRight(this.numberInputList));
  }
  clear(): State {
    return new State();
  }
};
const initialState: State = new State();


/// Reducer.
export const numberInputReducer = (state: State = initialState, action: NumberInputActions.Action) => {
  switch (action.type) {
    case NumberInputActions.ActionType.Push:
      return state.push(action.payload);

    case NumberInputActions.ActionType.Pop:
      return state.pop();

    case NumberInputActions.ActionType.Clear:
      return state.clear();

    default:
      return state;
  }
};


/// Store.
export const instance = createStore(numberInputReducer, applyMiddleware(thunk));
