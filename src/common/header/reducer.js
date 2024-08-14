import { fromJS } from "immutable"; // 这个方法可以将 JS 对象转换为 immutable 对象
import {
    searchbar_focus,
    searchbar_blur,
    get_trends,
    mouse_enter,
    mouse_leave,
    change_trends
} from "./actionType";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    trends: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case searchbar_focus:
            return state.set("focused", true);
        case searchbar_blur:
            return state.set("focused", false);
        case get_trends:
            // merge 可以同时改变多个数据内容
            return state.merge({
                trends: action.trends,
                totalPage: action.totalPage
            });
        case mouse_enter:
            return state.set("mouseIn", true);
        case mouse_leave:
            return state.set("mouseIn", false);
        case change_trends:
            return state.set("page", action.page);
        default:
            return state;
    }
};
