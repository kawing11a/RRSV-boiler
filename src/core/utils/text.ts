import { ObjectUtils } from "./object";

export interface ITextUtils {
    formatText(template: string, ...values: string[]): string;
    formatTextByKey(template: string, values: Record<string, any>): string;
    isString: (value: any) => boolean;
    stripeHTML: (value: string) => string;
    escapeRegExp: (value: string) => string;
}

export const TextUtils: ITextUtils = {
    formatText(template: string, ...params: Array<string | number>): string {
        let result = template;
        const placeholders = template.match(/\{\d\}/g) as string[];
        if (placeholders) {
            placeholders.map(placeholder => {
                const index = parseInt(placeholder.replace("{", "").replace("}", ""));
                result = result.replace(placeholder, `${params[index]}`);
            });
        }
        return result;
    },
    formatTextByKey(template: string, params: Record<string, any>): string {
        let result = template;
        let placeholders = template.match(/\:\w+/g) as string[];
        if (placeholders) {
            placeholders.map(placeholder => {
                const key = placeholder.replace(":", "");
                result = result.replace(placeholder, ObjectUtils.get(params, key, placeholder));
            });

        } else {
            placeholders = template.match(/{\w+}/g) as string[];

            placeholders.map(placeholder => {
                const key = placeholder.replace("{", "").replace("}", "");
                result = result.replace(placeholder, `${ObjectUtils.get(params, key, `{${key}}`)}`);
            });
        }
        return result;
    },
    isString: (value: any) => {
        return typeof value === "string" || value instanceof String;
    },
    stripeHTML(value) {
        if (!this.isString(value)) {
            return value;
        }
        const htmlUnescapes = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
        };
        const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
        const reHasEscapedHtml = RegExp(reEscapedHtml.source);
        value = reHasEscapedHtml.test(value)
            ? value.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
            : value || '';
        return value.replace(/<(\/)?\w+(\s[\w-]+(=\".*")?)?>/gi, '');
    },
    escapeRegExp(value) {
        const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        const reHasRegExpChar = RegExp(reRegExpChar.source);

        return value && reHasRegExpChar.test(value)
            ? value.replace(reRegExpChar, '\\$&')
            : value || '';
    }
};

String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

String.prototype.replaceJSX = function (find, replace) {
    return this.split(find).flatMap((item) => [item, replace]).slice(0, -1);
};


String.prototype.removeNewline = function () {
    return this.replace(/(\r\n|\n|\r)/gm, "");
};

// return true if string is "1", "true", "TRUE" else if string is "0", "false", "FALSE" return false
String.prototype.toBoolean = function () {
    if (!TextUtils.isString(this)) {
        return false;
    }
    return this.toLowerCase() === "1" || this.toLowerCase() === "true";
};

String.prototype.toNumber = function () {
    return Number(this);
};
