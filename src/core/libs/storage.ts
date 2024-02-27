import { isApiMocked } from "../../windowVars";

export enum StorageKey {
    LANGUAGE = "lang",
    AUTH = "auth",
}

export enum StorageType {
    LOCAL,
    SESSION
}

export const COOKIES_EXPIRY = 365;

const getStorageKey = (key: string, uid?: number) => {
    if (isApiMocked()) {
        return `${key}`;
    } else {
        return `${key}${uid ? "-" + uid : ""}`;
    }
};

export const fromStorage = (
    basedKey: string,
    defauleValue: any,
    uid?: number,
    type: StorageType = StorageType.LOCAL
) => {
    const key = getStorageKey(basedKey, uid);
    let item;
    if (type === StorageType.LOCAL) {
        item = localStorage.getItem(key);
    } else if (type === StorageType.SESSION) {
        item = sessionStorage.getItem(key);
    }
    if (item === null) {
        return defauleValue;
    }
    return item;
};

export const toStorage = (
    basedKey: string,
    value: any,
    uid?: number,
    type: StorageType = StorageType.LOCAL
) => {
    const key = getStorageKey(basedKey, uid);
    if (type === StorageType.LOCAL) {
        localStorage.setItem(key, value);
    } else if (type === StorageType.SESSION) {
        sessionStorage.setItem(key, value);
    }
};

export const removeStorage = (
    basedKey: string,
    uid?: number,
    type: StorageType = StorageType.LOCAL
) => {
    const key = getStorageKey(basedKey, uid);
    if (type === StorageType.LOCAL) {
        localStorage.removeItem(key);
    } else if (type === StorageType.SESSION) {
        sessionStorage.removeItem(key);
    }
};
