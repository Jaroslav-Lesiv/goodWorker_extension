import { handleActions } from "redux-actions";
import { message } from "../../actions";
import initialState from "../../store/initialState";

export default handleActions(
  {
    [message.addMessage]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      user: { ...store.user, ...payload }
    }),
    [message.removeMessage]: (store, { payload }) => ({
      ...initialState.user
    })
  },
  initialState.user
);
