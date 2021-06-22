import { combineReducers } from "redux";
import { titleReducer } from './titleReducer';
import { monsterReducer } from './monsterReducer';

const rootReducer = combineReducers({ titleReducer, monsterReducer });

export default rootReducer;
