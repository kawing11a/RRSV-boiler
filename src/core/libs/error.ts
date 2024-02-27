import { ELocaleKey, tt } from "../../lingos";
import { Utils } from "../utils";

class ErrorHelper {
    static getHeader(error: any): string {
        if (typeof error == "string") {
            //string error (UI state)
            return error;
        } else if (typeof error == "number") {
            //API errorCode
            // const errorStrings = lingos.core.errorCode as any;
            // if (errorStrings.hasOwnProperty(`err${error}`)) {
            // return errorStrings[`err${error}`];
            // } else {
            return `An unexpected error has occurred. Please try again later.`;
            // }
        } else if (error && error.toString) {
            //native error
            return error.toString();
        } else {
            return `An unknown error has occurred`;
        }
    }

    static toString(error: any): string {
        if (typeof error == "string") {
            //string error (UI state)
            return error;
        } else if (typeof error == "number") {
            //API errorCode
            const errorStrings = tt(Utils.get(ELocaleKey, `ERROR_MSG_${error}`, ELocaleKey.ERROR_MSG_GENERAL));
            return errorStrings;
        } else if (error && error.toString) {
            //native error
            return error.toString();
        } else {
            return `An unknown error has occurred`;
        }
    }
}
export default ErrorHelper;
