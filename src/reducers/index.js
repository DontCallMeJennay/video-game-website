const viewReducer = require('./view_reducer');
const redux = require('redux');

const rootReducer = redux.combineReducers({
    view: viewReducer,
});

module.export(rootReducer);