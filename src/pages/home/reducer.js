import { fromJS } from "immutable";
import { enable_backtop, disable_backtop } from "./actionType";

const defaultState = fromJS({
    showBackTop: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case enable_backtop:
            return state.set("showBackTop", true);
        case disable_backtop:
            return state.set("showBackTop", false);
        default:
            return state;
    }
};
