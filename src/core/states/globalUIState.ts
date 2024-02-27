import Cookies from "js-cookie";
import { ILingoContents } from "../../lingos/interfaces";
import { getDefaultLang } from '../../windowVars';
// import { changeLang } from "../actions/globalUIAction";
import { fromStorage, StorageKey } from "../libs/storage";
import { changeLang } from "../slices/globalUISlice";
import { EWaitingFor } from './../enums/system';
import { State } from "./index";

export interface PopUpDialog {
    popup: boolean;
    content: string;
    closeButton: boolean;
    goHomeButton: boolean;
}

export interface GlobalUIState extends State {
    lang: string;
    openSystemDialog: boolean;
    reconnectDialog: boolean;
    errorCode: number;
    popUpDialog: PopUpDialog;
    waitingList: EWaitingFor[];
    languageConfig: ILingoContents;
    supportedLanguages: string[];
}

export const createGlobalUIState = (): GlobalUIState => {
    let langStr = Cookies.get(StorageKey.LANGUAGE);
    if (!langStr || langStr === "") {
        langStr = fromStorage(StorageKey.LANGUAGE, getDefaultLang());
    }

    const lang = langStr;
    changeLang(lang);
    const openSystemDialog = false;
    const reconnectDialog = false;
    const errorCode = 0;
    const popUpDialog: PopUpDialog = {
        popup: false,
        content: '',
        closeButton: false,
        goHomeButton: false,
    };

    let state: GlobalUIState = {
        lang,
        openSystemDialog,
        reconnectDialog,
        errorCode,
        popUpDialog,
        waitingList: [],
        languageConfig: {
            "en": null,
            "tc": null,
            "sc": null,
        },
        supportedLanguages: [],
    };

    return state;
};
