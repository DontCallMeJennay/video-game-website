const reducers = require('./reducers/index.js');
const redux = require('redux');

var Store = redux.createStore(reducers);

module.exports = Store;