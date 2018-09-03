import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest,
    select
} from 'redux-saga/effects';
import { cmd } from '../../helper'
import * as action from '../../redux/actions';

function* updateActiveTask({payload}) {
    const { task } = yield select()
    const taskIdx = task.list.findIndex( task => task.id === payload.id )

    let newList = [...task.list]
    if (newList[taskIdx]) {
        newList[taskIdx].spend_time = payload.spend_time
        newList[taskIdx].plain_time = payload.plain_time
    
        yield put(action.task.taskListSet(newList))
    }  
}

export {
    updateActiveTask
}
