import LocalizedStrings from "react-localization";
import { Utils } from "../core/utils";
import { ILingoContents } from "./interfaces";

export const localeConfig: any = {
  "en": {},
  "tc": {},
  "sc": {},
};

export const setLocaleConfig = (lang: string, value: any) => {
  localeConfig[lang] = value;
};

export enum ELocaleKey {
  APP_NAME = "APP_NAME",
  ERROR_MSG_GENERAL = "ERROR_MSG_GENERAL",
  ERROR_MSG_0 = "ERROR_MSG_0",
  ERROR_MSG_100 = "ERROR_MSG_100",
  ERROR_MSG_101 = "ERROR_MSG_101",
  ERROR_MSG_102 = "ERROR_MSG_102",
  ERROR_MSG_200 = "ERROR_MSG_200",
  ERROR_MSG_201 = "ERROR_MSG_201",
  ERROR_MSG_202 = "ERROR_MSG_202",
  ERROR_MSG_204 = "ERROR_MSG_204",
  ERROR_MSG_205 = "ERROR_MSG_205",
  ERROR_MSG_400 = "ERROR_MSG_400",
  ERROR_MSG_401 = "ERROR_MSG_401",
  ERROR_MSG_403 = "ERROR_MSG_403",
  ERROR_MSG_404 = "ERROR_MSG_404",
  ERROR_MSG_405 = "ERROR_MSG_405",
  ERROR_MSG_406 = "ERROR_MSG_406",
  ERROR_MSG_409 = "ERROR_MSG_409",
  ERROR_MSG_410 = "ERROR_MSG_410",
  ERROR_MSG_415 = "ERROR_MSG_415",
  ERROR_MSG_418 = "ERROR_MSG_418",
  ERROR_MSG_422 = "ERROR_MSG_422",
  ERROR_MSG_423 = "ERROR_MSG_423",
  ERROR_MSG_424 = "ERROR_MSG_424",
  ERROR_MSG_425 = "ERROR_MSG_425",
  ERROR_MSG_500 = "ERROR_MSG_500",
  ERROR_MSG_501 = "ERROR_MSG_501",
  ERROR_MSG_503 = "ERROR_MSG_503",
}

export const tt = (key: ELocaleKey) => {
  return Utils.get(Utils.get(localeConfig, lingos.getLanguage()), key, key);
};

const lingoContent: ILingoContents = localeConfig as any;

export interface ILingo extends ILingoContents { }

export const lingos = new LocalizedStrings(lingoContent);

export const getLanguageName = (code: string): string => {
  if (isLanguageSupported(code)) {
    switch (code) {
      case 'en':
        return 'English';
      case 'tc':
        return '繁體中文';
      case 'sc':
        return '簡體中文';

      default:
        break;
    }
  }

  return null;
};

export const getShortLanguageName = (code: string): string => {
  if (isLanguageSupported(code)) {
    switch (code) {
      case 'en':
        return 'EN';
      case 'tc':
        return '繁';
      case 'sc':
        return '簡';

      default:
        break;
    }
  }

  return null;
};

export const isLanguageSupported = (code: string): boolean => {
  return Object.keys(localeConfig).includes(code);
};

export const getLanguageCamelCase = (): string => {
  return langCodeToCamel(lingos.getLanguage());
};

export const langCamelToCode = (lang: string): string => {
  return lang.replace(/([a-z])([A-Z])/, "$1-$2");
};

export const langCodeToCamel = (lang: string): string => {
  return lang.replace(/-([a-z])/, "$1");
};

export default lingos;
