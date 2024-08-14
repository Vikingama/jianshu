import axios from "axios";
import { fromJS } from "immutable";
import {
    searchbar_focus,
    searchbar_blur,
    get_trends,
    mouse_enter,
    mouse_leave,
    change_trends
} from "./actionType";

const send_trends = data => ({
    type: get_trends,
    trends: fromJS(data),
    totalPage: Math.ceil(data.length) / 10
});

export const handleInputFocus = () => ({
    type: searchbar_focus
});
export const handleInputBlur = () => ({
    type: searchbar_blur
});
export const getTrendsList = () => {
    return dispatch => {
        axios
            .get("/api/trends.json")
            .then(res => {
                if (res.data.success === true) {
                    dispatch(send_trends(res.data.data));
                } else {
                    console.error(res);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
};
export const handleMouseEnter = () => ({
    type: mouse_enter
});
export const handleMouseLeave = () => ({
    type: mouse_leave
});
export const changeTrends = page => ({
    type: change_trends,
    page
});
