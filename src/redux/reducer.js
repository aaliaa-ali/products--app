import { combineReducers } from "redux";
import cardReducer from "./card/cardReducer";
import authReducer from "./auth/authReducer";


const rootReducer = combineReducers({
  card: cardReducer,
  auth: authReducer,

});
export default rootReducer;
