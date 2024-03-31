import changeStore from "./create";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeStore:changeStore,
})

export default rootReducer;