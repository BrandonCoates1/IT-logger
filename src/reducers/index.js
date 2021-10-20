import { combineReducers } from "redux";
import logReducer from './logReducer.js'
import techReducer from './techReducer.js'

export default combineReducers({
  log: logReducer,
  tech: techReducer
})