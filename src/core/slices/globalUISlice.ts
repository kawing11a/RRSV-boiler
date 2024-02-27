import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import lingos from "../../lingos";
import { getDefaultLang } from "../../windowVars";
import { COOKIES_EXPIRY, fromStorage, StorageKey, toStorage } from "../libs/storage";
import { RootState } from "../states";
import { GlobalUIState, PopUpDialog } from '../states/globalUIState';
import { EWaitingFor } from './../enums/system';

let langStr = Cookies.get(StorageKey.LANGUAGE);
if (!langStr || langStr === "") {
    langStr = fromStorage(StorageKey.LANGUAGE, getDefaultLang());
}

const lang = langStr;

lingos.setLanguage(lang);

const popUpDialog: PopUpDialog = {
    popup: false,
    content: '',
    closeButton: false,
    goHomeButton: false,
};

let globalUIState: GlobalUIState = {
    lang,
    openSystemDialog: false,
    reconnectDialog: false,
    errorCode: 0,
    popUpDialog,
    waitingList: [],
    apiRequest: [],
    languageConfig: {
        "en": null,
        "zh-Hant": null,
        "zh-Hans": null,
    },
    supportedLanguages: [],
};

export const globalUISlice = createSlice({
    name: "globalUI",
    initialState: globalUIState,
    reducers: {
        changeLang: (state: GlobalUIState, { payload }: PayloadAction<string>) => {
            lingos.setLanguage(payload);
            toStorage(StorageKey.LANGUAGE, payload);
            Cookies.set(StorageKey.LANGUAGE, payload, { expires: COOKIES_EXPIRY });

            state.lang = payload;
        },
        openSystemDialog: (state: GlobalUIState, { payload }: PayloadAction<number>) => {
            state.openSystemDialog = true;
            state.errorCode = payload;
        },
        closeSystemDialog: (state: GlobalUIState) => {
            state.openSystemDialog = false;
        },
        updateWaiting: (state: GlobalUIState, { payload = { add: [], remove: null } }: PayloadAction<{ add?: EWaitingFor[], remove?: EWaitingFor; }>) => {
            if (payload.add?.length) {
                state.waitingList = [...state.waitingList, ...payload.add];
            }
            if (payload.remove >= 0) {
                let index = state.waitingList.indexOf(payload.remove);
                if (index != -1) {
                    state.waitingList.splice(index, 1);
                }
            }
        },
    },
});

export const {
    changeLang,
    openSystemDialog,
    closeSystemDialog,
    updateWaiting,
} = globalUISlice.actions;

export const selectGlobalUI = (state: RootState) => state.globalUI;

export default globalUISlice.reducer;
