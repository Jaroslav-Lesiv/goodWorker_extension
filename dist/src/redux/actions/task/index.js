import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { task } = createActions({
  TASK: {
      TASK_LIST_SET: payload => payload,
      TASK_LIST_SET_DONE: payload => payload,
      GET_DONE_LIST: payload => payload,
      TASK_LIST_UPDATE: payload => payload,

      TASK_SET_ONE: payload => payload,
      TASK_SELECT: payload => payload,
      TASK_DONE_SELECT: payload => payload,

      DELETE_TASK: payload => payload,
      DELETE_ONE_TASK: payload => payload,

      COPY_TASK: payload => payload,
      COPY_ONE_TASK: payload => payload,

      SELECT_ALL: payload => payload,
      UNSELECT_ALL: payload => payload,
      
      SELECT_ALL_DONE: payload => payload,
      UNSELECT_ALL_DONE: payload => payload,

      ACTIVATE_TASK: payload => payload,
      DISABLE_TASK: payload => payload,

      UPDATE_ACTIVE_TASK: payload => payload,

      ADD_TASK: payload => payload,
      DELETE_TASK: payload => payload,
      UPDATE_TASK: payload => payload,
      DONE_TASK: payload => payload,
      REMOVE_FROM_DONE_TASK: payload => payload,
      GET_TASK_LIST: payload => payload,

      GET_TASK: payload => payload,
      CLEAR_CURRENT: payload => payload,
      SET_CURRENT: payload => payload
  }
})
