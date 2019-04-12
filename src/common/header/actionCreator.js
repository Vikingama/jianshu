import { searchbar_focus, searchbar_blur } from "./actionType";

export const handleInputFocus = () => ({
    type: searchbar_focus
});
export const handleInputBlur = () => ({
    type: searchbar_blur
});
