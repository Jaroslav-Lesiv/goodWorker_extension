import { combineReducers } from 'redux'
import app from './app'
import auth from './auth'
import task from './task'
import user from './user'
import message from './message'

export default combineReducers({
    app,
    auth,
    task,
    user,
    message,
})
