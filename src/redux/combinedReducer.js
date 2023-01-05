import { combineReducers } from "redux";
import { cartReducer } from "./reducer";

const combinedReducer = combineReducers({
    cart : cartReducer
})

export default combinedReducer