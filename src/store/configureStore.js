import { createStore, combineReducers } from 'redux';
import exprensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            expenses: exprensesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};