//Main content: Games, Events, Contact, Records, Videos, Home 

import React from 'react';
//import { ArticleScreen, EmbedScreen, ListScreen } from './components/screens';
//import { Menu, TextMenu } from './components/menus';
import { Dpad, Buttons } from './components/buttons';
import AudioHandler from './components/audio';
import $ from 'jquery';
import store from './store';
const actions = require('./actions/index');


class DoubleScreen extends React.Component {
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
  }
  render() {
    return (
      <div>
        <div className="top half">
          <div className="screen" id="topscreen">

          </div>
        </div>
        <div className="hinge" id="hinge">
          <button className="lr right" id="lbtn" value="L">L </button>
          <button className="lr left" id="rbtn" value="R">R</button>
        </div>

        <div className="bottom half flex-row">
          <Dpad changeMenu={this.setMenu} />
          <div className="screen" id="bottomscreen">

          </div>
          <Buttons changeMenu={this.setMenu} />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.listenForMenuChange.bind(this));
  }
  listenForMenuChange() {
    let prevState = this.state.menu;
    let newState = store.getState();
    if (prevState.menu !== newState.menu) {
      this.setState(newState);
    }
  }
  componentDidMount() {
    let sequence = "";
    $(".square, .round, .ctrl, .lr").on("click", el => {
      sequence += el.currentTarget.value.toString();
      console.log(sequence);

      if (sequence.search("UpUpDownDownLeftRightLeftRightBAStart") > -1) {
        let kon = document.getElementById("kon");
        kon.play();
        sequence = "";
      }
      if (sequence.search("UpSelectLeftRightAAB") > -1) {
        let nemo = document.getElementById("nemo");
        nemo.play();
        sequence = "";
      }
      if (sequence.search("DownRUpLYB") > -1) {
        let sf2 = document.getElementById("sf2");
        sf2.play();
        sequence = "";
      }
      if (sequence.search("BARRAL") > -1) {
        let dkc = document.getElementById("dkc");
        dkc.play();
        $("#tophalf").css({
          "background": "linear-gradient(#884, #FF2 5%, #FF2 95%, #884)",
          "backgroundColor": "#FF2"
        });
        $("#hinge, #bottomhalf").css({
          //"background": "none",
          //"backgroundColor": "#770"
        });
        sequence = "";
      }
      if (sequence.length > 100) {
        sequence = "";
      }
    });
  }
  render() {
    return (
      <main>
        <DoubleScreen
          topview={this.state.topview}
          menu={this.state.menu}
        />
        <AudioHandler changeTheme={this.setTheme} />
      </main>
    );
  }
}

export default App;


//TMNT2 (NES): BABAUpDownBALeftRightBAStart