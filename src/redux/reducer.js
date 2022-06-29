import { combineReducers } from "redux";
import cardReducer from "./card/cardReducer";

const rootReducer = combineReducers({
  card: cardReducer,
});
export default rootReducer;
