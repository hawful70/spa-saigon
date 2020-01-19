import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import signin from "./SigninPage/reducer";
import layout from "./Layout/reducer";
import branch from "./BranchPage/reducer";
import staff from "./StaffPage/reducer";
import service from "./ServicePage/reducer";
import note from "./NotePage/reducer";

export default history =>
    combineReducers({
        router: connectRouter(history),
        signin,
        layout,
        branch,
        staff,
        service,
        note
    });
