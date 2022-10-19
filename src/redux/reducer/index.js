import { combineReducers } from 'redux';

import countReducer from './count';
import userReducer from './user'

const rootReducer = combineReducers({
    count: countReducer,
    user: userReducer
})

export default rootReducer;