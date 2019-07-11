import {createStore, combineReducers} from "redux";
import entrenador from "./reducers/entrenadorReducer"


const reducer = combineReducers({
    entrenador
})

const store = createStore(reducer)

export default store;