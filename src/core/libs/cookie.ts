import Cookies from "js-cookie";
import { StorageKey } from "../libs/storage";
import { Utils } from "../utils";
;

export interface IAuthCookie {
    userId: string;
    role: number;
    token: string;
    refreshToken: string;
    isLoggedIn: boolean;
}

export const getAuthFromCookie = (): IAuthCookie => {
    return typeof Cookies.get(StorageKey.AUTH) == 'string' ? JSON.parse(Cookies.get(StorageKey.AUTH)) : { token: "", refreshToken: "", isLoggedIn: false, role: 0 };
};

export const storeAuth = (token: string = "", refreshToken: string = "", isLoggedIn: boolean = false, role?: number) => {
    const auth = { token, refreshToken, role, isLoggedIn };
    Cookies.set(StorageKey.AUTH, JSON.stringify(auth));
};

export const storeAuthData = (key: "token" | "refreshToken" | "isLoggedIn" | "role", value: any) => {
    const auth: any = getAuthFromCookie();
    auth[key] = value;

    Cookies.set(StorageKey.AUTH, JSON.stringify(auth));
};

export const removeAuth = () => {
    Cookies.remove(StorageKey.AUTH);
    // removeStorage(StorageKey.AUTH)
    // localStorage.removeItem(StorageKey.AUTH);
};

export const getAuthData = (key: "token" | "refreshToken" | "isLoggedIn" | "role") => {
    const auth = getAuthFromCookie();
    return Utils.get(auth, key, "");
};

export const setCookie = (key: string, value: any, expiry: number = 365) => {
    Cookies.set(key, value, { expires: expiry });
};

export const getCookie = (key: string) => {
    return Cookies.get(key);
};

export const removeCookie = (key: string) => {
    Cookies.remove(key);
};

export const removeAllCookies = () => {
    const cookies = Cookies.get();
    for (const key in cookies) {
        Cookies.remove(key);
    }

    localStorage.removeItem(StorageKey.AUTH);
};
