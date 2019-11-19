import { navigationMenuReducers } from "./navigationMenuReducers";
import { combineReducers } from "redux";

export default combineReducers({ navigationMenu: navigationMenuReducers });
