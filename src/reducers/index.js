const types = require('../actions/action_types');
const Data = require('../data');
const defaultTheme = './css/style.css';

const initialState = {
    bonus: "",
    contact: Data.contactObj,
    events: Data.eventObj,
    games: Data.gameObj,
    records: Data.recordObj,
    watch: Data.watchObj,
    sound: true,
    style: defaultTheme,
    topview: 0,
    menu: "home",
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_MENU:
            return Object.assign({}, state, action);
        case types.CHANGE_SCREEN:
            return Object.assign({}, state, action);
        case types.CHANGE_THEME:
            return Object.assign({}, state, action);
        default:
            return state;
    }
};

module.exports = Reducer;