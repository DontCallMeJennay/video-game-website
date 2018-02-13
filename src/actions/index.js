const types = require('./action_types.js');

var exports = module.exports = {}

exports.changeMenu = (str) => {
    return {
        view: str,
        topview: 0,
        type: types.CHANGE_MENU
    }
}