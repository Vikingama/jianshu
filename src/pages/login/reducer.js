import { fromJS } from "immutable";
import { user_login, user_logout } from "./actionType";

const defaultState = fromJS({
    login: false,
    phone: "",
    pwd: ""
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case user_login:
            return state.merge({
                login: true,
                phone: action.phone,
                pwd: action.pwd
            });
        case user_logout:
            return state.merge({
                login: false,
                phone: action.phone,
                pwd: action.pwd
            });
        default:
            return state;
    }
};
