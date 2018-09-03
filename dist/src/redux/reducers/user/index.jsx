import { handleActions } from "redux-actions";
import { user } from "../../actions";
import initialState from "../../store/initialState";

export default handleActions(
  {
    [user.userSet]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      user: { ...store.user, ...payload }
    }),
    [user.userRemove]: (store, { payload }) => ({
      ...initialState.user
    })
  },
  initialState.user
);
