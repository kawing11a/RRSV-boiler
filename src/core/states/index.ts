import { AnyAction } from "@reduxjs/toolkit";
import { IPayload } from "../payloads";
import { createGlobalUIState, GlobalUIState } from "./globalUIState";
import { ERemoteStatus } from "../enums/system";


export interface State {
    [key: string]: any;
}

//for REST API
export interface IRemoteState extends State {
    status: ERemoteStatus;
    errorCode: number;
    msg: string;
    tmpData: any; // tempory data store
}

export const createRemoteState = (): IRemoteState => {
    return {
        status: (ERemoteStatus && ERemoteStatus.IDLE) || 0,
        errorCode: null,
        msg: "",
        tmpData: null,
    };
};

export interface RootState extends State {
    globalUI: GlobalUIState;
}

export const createRootState = (): RootState => {
    return {
        globalUI: createGlobalUIState(),
    };
};

// for any sync action with type
export interface IReduxAction extends AnyAction {
    type: string;
    payload?: IPayload;
    error?: any;
}
