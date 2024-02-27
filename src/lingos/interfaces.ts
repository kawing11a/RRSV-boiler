export interface ILingoContent {
    general: GeneralLingo;
}

export interface ILingoAsset {
    [key: string]: string;
}

export type ILingoContents = { [key: string]: ILingoContent; };

export interface GeneralLingo {
    appName: string;
    errorMsg: {
        err404: string;
        err401: string;
        err403: string;
        err500: string;
        err502: string;
        err503: string;
    },
    message: {
        success: string;
        fail: string;
        warning: string;
    },
    button: {
        yes: string;
        no: string;
        submit: string;
        create: string;
        edit: string;
        refresh: string;
        sync: string;
        save: string;
    };
}
