import React from 'react';
import { ArticleScreen, EmbedScreen, ListScreen } from './screens';
import { Menu } from './menus';
import { Dpad, Buttons } from './buttons';
import store from '../store';
const actions = require('../actions/index');
const dpadImg = require('../img/dpad.png');
const buttonImg = require('../img/buttons.png');

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
        screen = (<div>
          <h1 className="content">Welcome!</h1>
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