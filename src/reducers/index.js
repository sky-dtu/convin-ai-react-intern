import { combineReducers } from "redux";

import userlistReducer from "./user";

const reducers = combineReducers({
    userList : userlistReducer,
})


export default reducers;