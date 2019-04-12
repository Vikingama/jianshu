import { fromJS } from "immutable"; // 这个方法可以讲 JS 对象转换为 immutable 对象
import { searchbar_focus, searchbar_blur } from "./actionType";

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case searchbar_focus:
            return state.set("focused", true);
        case searchbar_blur:
            return state.set("focused", false);
        default:
            return state;
    }
};
