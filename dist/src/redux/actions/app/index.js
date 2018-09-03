import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { app } = createActions({
  APP: {
      OPEN: payload => payload,
      OPEN_CONVERT: payload => payload
  }
})
