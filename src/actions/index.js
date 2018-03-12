const types = require('./action_types.js');

var exports = module.exports = {}

exports.changeMenu = (menu) => {
    return {
        type: types.CHANGE_MENU,
        menu
    }
}

exports.changeScreen = (topview) => {
    return {        
        type: types.CHANGE_SCREEN,
        topview
    }
}

exports.changeTheme = (style) => {
    return {
        type: types.CHANGE_THEME,
        style
    }
}