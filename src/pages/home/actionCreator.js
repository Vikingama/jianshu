import { enable_backtop, disable_backtop } from "./actionType";

export const enableBackTop = () => ({
    type: enable_backtop
});
export const disableBackTop = () => ({
    type: disable_backtop
});
