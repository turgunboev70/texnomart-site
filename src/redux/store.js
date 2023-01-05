import {createStore} from "redux"
import combineReducer  from "./combinedReducer"
const store = createStore(combineReducer)

export default store