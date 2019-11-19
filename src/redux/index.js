import { createStore } from "redux";
import rootReducer from "./reducers/index";

export var store = createStore(rootReducer);
