import { handleActions } from "redux-actions";
import { app } from "../../actions";
import initialState from "../../store/initialState";

export default handleActions(
  {
    [app.open]: (store, { payload }) => ({
      ...store,
      isOpen: payload
    }),

    [app.setLoadingLabel]: (store, { payload }) => ({
      ...store,
      loader_label: payload
    }),
  },
  initialState.app
);
