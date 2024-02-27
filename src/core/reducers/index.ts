import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { combineReducers } from "redux";
import globalUIReducer from '../slices/globalUISlice';

const rootReducer = (history: any) =>
    combineReducers({
        router: createRouterReducer(history),
        globalUI: globalUIReducer,
    });

export default rootReducer;
