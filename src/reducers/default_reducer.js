const Data = require('../data');
//const types = require('../actions/action_types');

var initialState = {
    bonus: "",
    contacts: Data.contactObj,
    events: Data.eventObj,
    games: Data.gameObj,
    records: Data.recordObj,
    watch: Data.watchObj,
    topview: 0
}

var defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

module.exports = defaultReducer;