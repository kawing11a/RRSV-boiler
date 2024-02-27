import { ReduxRouter } from "@lagunovsky/redux-react-router";
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App.tsx';
import { AxiosMocker } from "./axiosMocker.ts";
import store, { history } from './configureStore';
import Logger from './core/libs/logger';
import './index.css';
import { isApiMocked } from "./windowVars.ts";

declare global {
  interface Window {
    __startApp: () => void;
  }
}

Logger.info('%c住手！', 'color: red; font-size: 48px; border: 1px;');
Logger.info(
  '%c這是專門提供給開發人員的瀏覽器功能。',
  'color: black; font-size: 24px; border: 1px;',
);

axios.defaults.withCredentials = false; //remove cookie from API request (we use header for credential)

const startMocker = async () => {
  const mod = await import("./axiosMocker.ts");
  const mocker = mod.default as AxiosMocker;
  mocker.start();
};

const startRender = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <ReduxRouter history={history}>
          <App />
        </ReduxRouter>
      </Provider>
    </React.StrictMode>,
  );
};

window.__startApp = () => {
  if (isApiMocked()) {
    startMocker().then(startRender);
  } else {
    startRender();
  }
};
