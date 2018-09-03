import { handleActions } from "redux-actions";
import { auth } from "../../actions";
import initialState from "../../store/initialState";

export default handleActions({}, initialState.auth);
