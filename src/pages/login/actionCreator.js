import { user_login, user_logout } from "./actionType";

export const handleUserLogin = (phone, pwd) => ({
    type: user_login,
    phone,
    pwd
});
export const handleUserLogout = () => ({
    type: user_logout,
    phone: "",
    pwd: ""
});
