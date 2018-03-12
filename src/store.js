const Reducer = require('./reducers/index.js');
const redux = require('redux');

var Store = redux.createStore(Reducer);

module.exports = Store;