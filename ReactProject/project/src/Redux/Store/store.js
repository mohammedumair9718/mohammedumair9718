import { createStore, combineReducers } from "redux";

import {Handelreducer} from "../Reducer/ReducerIndex"

const rootReducer = combineReducers({
 
  Handelreducer,

});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
