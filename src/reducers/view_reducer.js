const types = require('../actions/action_types');

var initialState = {
    topview: 0,
    view: "home"
}

var viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MENU:
        console.log("CHANGE_MENU: ", Object.assign({}, state, action));
            return Object.assign({}, state, action.str);
        default:
            return state;
    }
};

module.exports = viewReducer;