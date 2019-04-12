// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable"; // 默认以 immutable 对象存储 state
import HeaderReducer from "../common/header/reducer";

export default combineReducers({
    header: HeaderReducer
});
