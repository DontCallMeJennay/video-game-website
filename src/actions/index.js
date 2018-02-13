const types = require('./action_types.js');

var exports = module.exports = {}

exports.changeMenu = (str) => {
    console.log("Action changeMenu() activated with ", str);
    return {
        view: str,
        topview: 0,
        type: types.CHANGE_MENU
    }
}