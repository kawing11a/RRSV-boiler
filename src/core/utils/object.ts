export interface IObjectUtils {
    get: (obj: Record<string, any>, path: string, defaultValue?: any) => any;
    isEmpty: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isArray: (value: any) => boolean;
    isEqual: (value: any, other: any) => boolean;
    pick: (obj: any, keys: string[]) => any[];
    deepClone: (obj: any) => typeof obj;
    isJSON: (str: string) => boolean;
}

export const ObjectUtils: IObjectUtils = {
    get: (obj: any, path: string, defaultValue?: any) => {
        const result = String.prototype.split
            .call(path, /[,[\].]+?/)
            .filter(Boolean)
            .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
        return result === undefined || result === obj || result === null ? defaultValue : result;
    },
    pick: (obj: any, keys: string[]) => {
        return keys.reduce((acc, key) => {
            if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
                acc.push(obj[key]);
            }
            return acc;
        }, []);
    },
    isEmpty: (value: any) => {
        return (
            value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
        );
    },
    isObject: (value: any) => {
        return value && typeof value === "object" && value.constructor === Object;
    },
    isArray: (value: any) => {
        return value && typeof value === "object" && value.constructor === Array;
    },
    isEqual: (value: any, other: any) => {
        const $this = this as IObjectUtils;
        if (value === other) {
            return true;
        }

        if (value instanceof Date && other instanceof Date) {
            return value.getTime() === other.getTime();
        }

        if (!value || !other || (typeof value !== "object" && typeof other !== "object")) {
            return value !== value && other !== other;
        }

        if (value.prototype !== other.prototype) {
            return false;
        }

        const keys = Object.keys(value);
        if (keys.length !== Object.keys(other).length) {
            return false;
        }
        return keys.every((k) => $this.isEqual(value[k], other[k]));
    },
    deepClone: (obj: any): any => {
        if (obj === null || typeof (obj) !== 'object')
            return obj;
        return JSON.parse(JSON.stringify(obj));
    },
    isJSON: (str: string) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },
};

Array.prototype.unique = function () {
    let a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};
