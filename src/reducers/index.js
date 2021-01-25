import car from './car';
import carslist from './carslist';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    car,
    carslist,
    test: 'test',
});

export default rootReducer;