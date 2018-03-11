const types = require('./action_types.js');

var exports = module.exports = {}

exports.changeMenu = (menu) => {
    console.log("Action changeMenu() activated with ", menu);
    return {
        type: types.CHANGE_MENU,
        menu
    }
}

exports.changeScreen = (topview) => {
    console.log("Action changeScreen activated with ", topview);
    return {        
        type: types.CHANGE_SCREEN,
        topview
    }
}