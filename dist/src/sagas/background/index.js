import { delay } from "redux-saga";
import { put, all, takeEvery, takeLatest, select } from "redux-saga/effects";
import { cmd } from "../../helper";
import * as action from "../../redux/actions";

function* activateTask({ payload }) {
  yield cmd.doSet({ cmd: `activate_task`, data: payload });
}

function* disableTask({ payload }) {
  yield cmd.doSet({ cmd: `disable_task`, data: payload });
}

function* setTaskList({ payload }) {
  yield cmd.doSet({ cmd: `set_task_list`, data: payload });
}

function* doneTask({ payload }) {
  yield cmd.doSet({ cmd: `done_task`, data: payload });
}

function* removeFromDoneTask({ payload }) {
  yield cmd.doSet({ cmd: `remove_from_done`, data: payload });
}

function* addTask({ payload }) {
  yield cmd.doSet({ cmd: `add_task`, data: payload });
}

function* deleteTask({ payload }) {
  yield cmd.doSet({ cmd: `delete_task`, data: payload });
}

function* updateTask({ payload }) {
  yield cmd.doSet({ cmd: `update_task`, data: payload });
}

function* getTaskList() {
  const task_list = yield cmd.doSet({ cmd: `get_task_list` });
  yield put(action.task.taskListSet(task_list));
}

function* getDoneList() {
  const done_list = yield cmd.doSet({ cmd: `get_done_list` });
  yield put(action.task.taskListSetDone(done_list));
}

function* getTask({ payload }) {
  const task = yield cmd.doSet({ cmd: `get_task`, data: payload });
  yield put(action.task.setCurrent(task));
}

export {
  activateTask,
  disableTask,
  setTaskList,
  doneTask,
  addTask,
  deleteTask,
  updateTask,
  getTaskList,
  getDoneList,
  removeFromDoneTask,
  getTask
};
