import { createStore } from 'redux';

// Action generators - function returns returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = () => ({
    type: 'RESET'
});

const resetCount = ({ count = 1} = {}) => ({
    type: 'SET',
    count
});

// Reducers
// 1. are Pure Functions
// 2. Never change state or action

const countReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            };
        case 'RESET': 
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions are the objects that gets sent to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(setCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount({ count: -101 }));

unsubscribe();