import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-redux";

let reducers = combineReducers({
    dialogsReducer: dialogsReducer,
    profileReducer: profileReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer,
});

let store = createStore(reducers);

export default store;