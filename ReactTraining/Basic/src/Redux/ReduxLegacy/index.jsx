import changeNumber from "./change";

import { combineReducers } from "redux";

const rootreducer = combineReducers({
    changeNumber
})

export default rootreducer

// can't directly cause there may be n no of reducers but we have to pass only rootreducer