const reducers = require('./reducers/index.js');
const redux = require('redux');

var store = redux.createStore(reducers);

module.export = store;