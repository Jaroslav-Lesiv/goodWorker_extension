import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';
import store from '../redux/store'
import { cmd } from '../helper'

import * as action from '../redux/actions';
import * as background from './background'
import * as task from './task'
// AUTH
function* createTask() {
    yield console.log('task created')
}

function* fetchWorksWorker() {
	yield takeLatest(action.task.taskSetOne, createTask)
}


function* fetchAddTaskWorker() {
	yield takeEvery(action.task.addTask, background.addTask)
}
function* fetchDeleteTaskWorker() {
	yield takeEvery(action.task.deleteTask, background.deleteTask)
}
function* fetchUpdateTaskWorker() {
	yield takeEvery(action.task.updateTask, background.updateTask)
}
function* fetchActivateTaskWorker() {
	yield takeEvery(action.task.activateTask, background.activateTask)
}
function* fetchDisableTaskWorker() {
	yield takeEvery(action.task.disableTask, background.disableTask)
}

function* fetchGetTaskList() {
	yield takeEvery(action.task.getTaskList, background.getTaskList)
}

function* fetchUpdateActiveTask() {
	yield takeEvery(action.task.updateActiveTask, task.updateActiveTask)
}

function* fetchGetDoneList() {
	yield takeEvery(action.task.getDoneList, background.getDoneList)
}

function* fetchDoneTask() {
	yield takeEvery(action.task.doneTask, background.doneTask)
}
function* removeFromDoneTask() {
	yield takeEvery(action.task.removeFromDoneTask, background.removeFromDoneTask)
}

function* getTask() {
	yield takeEvery(action.task.getTask, background.getTask)
}

window.addEventListener('focus', async () => {
    const task_list = await cmd.doSet({ cmd: `get_task_list`})
    store.dispatch(action.task.taskListSet(task_list))
})

export default function* rootSaga() {
	yield all([
		fetchWorksWorker(),

		fetchAddTaskWorker(),
		fetchDeleteTaskWorker(),
		fetchUpdateTaskWorker(),
		fetchActivateTaskWorker(),
		fetchDisableTaskWorker(),
		fetchGetTaskList(),
		fetchUpdateActiveTask(),
		fetchGetDoneList(),
		fetchDoneTask(),
		removeFromDoneTask(),
		getTask()

	])
  }
