import { legacy_createStore } from "redux";
import rootreducer from "./reducer";

const store = legacy_createStore(rootreducer)

export default store;