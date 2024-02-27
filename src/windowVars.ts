
declare global {
    interface Window {
        // general
        __FRONTEND_VERSION__: string;
        __APP_HOME__: string;
        __API_BASEURL__: string;
        __CDN_BASEURL__: string;
        __DEFAULT_LANG__: string;
        __DATE_FORMAT__: string;
        __DATE_TIME_FORMAT__: string;

        // misc
        __ENABLE_REDUX_DEVTOOL__: string;

        // local dev only :
        __API_MOCK__: string;
    }
}

const toBoolean = (str: string): boolean => {
    try {
        return parseInt(str) > 0;
    } catch ($e) {
        return false;
    }
};

// general

export const getFrontendVersion = (): string => {
    return window.__FRONTEND_VERSION__ ? window.__FRONTEND_VERSION__ : "/";
};

export const getAppHome = (): string => {
    return window.__APP_HOME__ ? window.__APP_HOME__ : "/";
};

export const getApiBasedUrl = (): string => {
    return window.__API_BASEURL__ ? window.__API_BASEURL__ : "";
};

export const getCdnBaseUrl = (): string => {
    return window.__CDN_BASEURL__ ? window.__CDN_BASEURL__ : "";
};

export const getDefaultLang = (): string => (window.__DEFAULT_LANG__ ?? 'en');

export const getDateFormat = (): string => (window.__DATE_FORMAT__ ?? 'YYYY-MM-DD');

export const getDateTimeFormat = (): string => (window.__DATE_TIME_FORMAT__ ?? 'YYYY-MM-DD HH:mm');

// misc
export const isReduxDevToolEnable = (): boolean => {
    return toBoolean(window.__ENABLE_REDUX_DEVTOOL__);
};


// local dev only
//mock API
export const isApiMocked = (): boolean => {
    return toBoolean(window.__API_MOCK__);
};
