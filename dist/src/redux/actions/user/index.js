import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { user } = createActions({
  USER: {
      USER_SET: payload => payload,
      USER_REMOVE: payload => payload
  }
})
