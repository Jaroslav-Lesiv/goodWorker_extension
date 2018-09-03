import { handleActions } from "redux-actions";
import { task } from "../../actions";
import initialState from "../../store/initialState";

const selectTask = (_id, selected) =>
  selected.includes(_id)
    ? selected.filter(taskId => taskId !== _id)
    : [...selected, _id];

const deleteTask = (selected, list) =>
  list.filter(task => !selected.includes(task.id));

const deleteOneTask = (_id, list) => list.filter(task => task.id !== _id);

const copyTask = (list, selected) => [
  ...list,
  ...selected.map(taskId => ({
    ...list.find(task => task.id === taskId),
    id: +new Date() + Math.random()
  }))
];

const copyOneTask = (list, _id) => [
  ...list,
  { ...list.find(task => task.id === _id), id: +new Date() + Math.random() }
];

const selectAll = list => list.map(task => task.id);

const unselectAll = () => [];

export default handleActions(
  {
    [task.taskListSet]: (store, { payload }) => ({
      ...store,
      list: payload
    }),
    [task.taskListUpdate]: (store, { payload }) => ({
      ...store,
      list: [...store, ...payload]
    }),
    [task.taskSetOne]: (store, { payload }) => ({
      ...store,
      list: [...store.list, payload]
    }),
    [task.removeFromDoneTask]: (store, { payload }) => ({
      ...store,
      done_list: store.done_list.filter(task => task.id !== payload)
    }),
    [task.taskSelect]: (store, { payload }) => ({
      ...store,
      selected: selectTask(payload, store.selected)
    }),
    [task.taskDoneSelect]: (store, { payload }) => ({
      ...store,
      done_selected: selectTask(payload, store.done_selected)
    }),
    [task.deleteTask]: (store, { payload }) => ({
      ...store,
      selected: [],
      list: deleteTask(store.selected, store.list)
    }),

    [task.deleteOneTask]: (store, { payload }) => ({
      ...store,
      list: deleteOneTask(payload, store.list)
    }),

    [task.copyTask]: (store, { payload }) => ({
      ...store,
      list: copyTask(store.list, store.selected)
    }),

    [task.selectAll]: (store, { payload }) => ({
      ...store,
      selected: selectAll(store.list)
    }),

    [task.unselectAll]: (store, { payload }) => ({
      ...store,
      selected: []
    }),

    [task.selectAllDone]: (store, { payload }) => ({
      ...store,
      done_selected: selectAll(store.done_list)
    }),

    [task.unselectAllDone]: (store, { payload }) => ({
      ...store,
      done_selected: []
    }),

    [task.doneTask]: (store, { payload }) => ({
      ...store,
      selected: [],
      done: [...store.done, ...store.selected],
      list: deleteTask(store.selected, store.list)
    }),
    [task.doneTask]: (store, { payload }) => ({
      ...store,
      list: deleteOneTask(payload, store.list)
    }),

    [task.updateActiveTask]: (store, { payload }) => ({
      ...store,
      active: payload
    }),
    [task.taskListSetDone]: (store, { payload }) => ({
      ...store,
      done_list: payload
    }),
    [task.disableTask]: (store, { payload }) => ({
      ...store,
      active: {...initialState.task.active}
    }),
    [task.activateTask]: (store, { payload }) => ({
      ...store,
      active: { id: payload }
    }),

    // CURRENT TASK HANDL
    [task.clearCurrent]: store => ({
      ...store,
      current: {}
    }),
    [task.setCurrent]: (store, { payload }) => ({
      ...store,
      current: payload
    })
  },
  initialState.task
);
