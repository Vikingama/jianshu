import { searchbar_focus, searchbar_blur, get_trends } from "./actionType";
import axios from "axios";
import { fromJS } from "immutable";

export const handleInputFocus = () => ({
    type: searchbar_focus
});
export const handleInputBlur = () => ({
    type: searchbar_blur
});

const send_trends = data => ({
    type: get_trends,
    payload: fromJS(data)
});

export const getTrendsList = () => {
    return dispatch => {
        axios
            .get("./api/trends.json")
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
