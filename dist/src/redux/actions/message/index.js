import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { message } = createActions({
  MESSAGE: {
      SET_MESSAGES: payload => payload
  }
})
