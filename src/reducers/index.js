const types = require('../actions/action_types');
const Data = require('../data');

/*
Contact, events, games, records, watch:  Objects for display on various screens
sound: Sound on/off
menu: Info on bottom screen. Clicking links shows content on top screen.
topview: Index that indicates which data item is showing on the top screen.
style: Controls novelty styling that appears when cheat codes are entered.
*/

const initialState = {
    contact: Data.contactObj,
    events: Data.eventObj,
    games: Data.gameObj,
    records: Data.recordObj,
    watch: Data.watchObj,
    sound: true,
    topview: 0,
    menu: "home",
    style: "default"
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