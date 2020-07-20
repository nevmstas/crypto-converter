import { combineReducers } from "redux";
import { coinsReducer } from "./coinsReducer";
import { converterReducer } from "./converterReducer";

export const rootReducer = combineReducers({
  coins: coinsReducer,
  converter: converterReducer,
});
