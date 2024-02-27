import { IObjectUtils, ObjectUtils } from "./object";
import { ITextUtils, TextUtils } from "./text";
import { JSXElement } from "@babel/types";

declare global {
    interface Array<T> {
        unique(): T;
    }
    interface String {
        splice(idx: number, rem: number, str: string): string;
        replaceJSX(find: RegExp | string, replace: JSXElement[] | string[]): (JSXElement[] | string[] | string)[];
        removeNewline(): string;
        toNumber(): number;
        toBoolean(): boolean;
    }
}

type Utils = ITextUtils & IObjectUtils;

export const Utils: Utils = {
    ...TextUtils,
    ...ObjectUtils,
};
