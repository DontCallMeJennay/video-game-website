import React from 'react';
import { ArticleScreen, EmbedScreen, ListScreen } from './screens';
import { Menu } from './menus';
import { Dpad, Buttons } from './buttons';
import store from '../store';
const actions = require('../actions/index');
const dpadImg = require('../img/dpad.png');
const buttonImg = require('../img/buttons.png');

/*
Top and bottom screen and control buttons. In UI, buttons are used to select a menu (bottom screen);
an item that is selected on the menu shows on the top screen. IOW, pushing a button selects a prop (object),
and selecting a menu item changes which part is being displayed on the top screen.  See data.js.

Buttons can also be clicked/tapped to enter retro "cheat codes" to cause UI changes.
*/


export default class DoubleScreen extends React.Component {
    constructor(props) {
      super(props);
      this.setMenu = this.setMenu.bind(this);
      this.setScreen = this.setScreen.bind(this);
    }
    setScreen(num) {
      store.dispatch(actions.changeScreen(num));
    }
    setMenu(str) {
      store.dispatch(actions.changeMenu(str));
      store.dispatch(actions.changeScreen("0"));
    }
    render() {
      let screen = null;
      let menu = this.props.data.menu;
      if(menu === "home") {
        screen = (<div className="content">
          <h1>Welcome!</h1>
          <p>This is a "portfolio" site for someone who plays retro video games competitively.</p>
          <p>Push the <img className='tiny' src={dpadImg} alt='D-pad icon' /> and <img className='tiny' src={buttonImg} alt='buttons icon' /> buttons below to navigate the site.</p>
          <p>(Links and other interactions are generally located on the bottom half of the "console", and the selected content is displayed on the top screen.)</p>
        </div>)
      }
      else if (menu === "watch" || menu === "records") {
        screen = (<EmbedScreen data={this.props.data} />);
      }
      else if (menu === "games") {
        screen = (<ArticleScreen data={this.props.data} />);
      }
      else screen = (<ListScreen data={this.props.data} />);
      return (
        <div>
          <div className="top half">
            <div className="screen" id="topscreen">
              {screen}
            </div>
          </div>
          <div className="hinge" id="hinge">
            <button className="lr right" id="lbtn" value="L">L </button>
            <button className="lr left" id="rbtn" value="R">R</button>
          </div>
  
          <div className="bottom half flex-row">
            <Dpad
              changeMenu={this.setMenu}
              changeScreen={this.setScreen} />
            <div className="screen" id="bottomscreen">
              <Menu
                data={this.props.data}
                changeScreen={this.setScreen} />
            </div>
            <Buttons
              changeMenu={this.setMenu}
              changeScreen={this.setScreen} />
          </div>
        </div>
      );
    }
  }