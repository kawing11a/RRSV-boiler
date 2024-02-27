export interface IPayload {
    [key: string]: any;
}

export interface IRemoteError {
    code: number;
    msg: string;
}

export interface IErrorPayload extends IPayload {
    code?: number;
    err?: string;
    errorCode?: number;
}

export interface IRespPayload extends IPayload {
    code: number;
    msg?: string;
    resp: Record<string, any>;
}
