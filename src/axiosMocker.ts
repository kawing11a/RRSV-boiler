import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Utils } from "./core/utils";

let adapter: MockAdapter;

export interface AxiosMocker {
  start: () => void;
}

const axiosMocker: AxiosMocker = {
  start: () => {
    console.log("axiosMocker.start()");
    adapter = new MockAdapter(axios, { delayResponse: 300 });
    adapter.onAny().passThrough();
  },
};

export const toMockPath = (path: string): RegExp => {
  if (path.endsWith(".json") || path.endsWith(".csv")) {
    if (!path.endsWith("vername.json")) {
      const ext = "." + path.substr(path.lastIndexOf(".") + 1);
      const withVersion = path.replace(ext, `_v(.+)${ext}`);
      return new RegExp(Utils.escapeRegExp(withVersion) + "$");
    }
  } else {
    path = Utils.formatText(path, ".*");
    return new RegExp("^" + Utils.escapeRegExp(path) + "$");
  }
};
export default axiosMocker;
