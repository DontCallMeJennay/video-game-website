//Main content: Games, Events, Contact, Records, Videos, Home 

import React from 'react';
import DoubleScreen from './components/doublescreen';
import AudioHandler from './components/audio';
import $ from 'jquery';
import store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.listenForMenuChange.bind(this));
    store.subscribe(this.listenForScreenChange.bind(this));
  }
  listenForMenuChange() {
    let prevState = this.state.menu;
    let newState = store.getState();
    if (prevState.menu !== newState.menu) {
      this.setState(newState);
    }
  }
  listenForScreenChange() {
    let prevState = this.state.topview;
    let newState = store.getState();
    if (prevState.topview !== newState.topview) {
      this.setState(newState);
    }
  }
  componentDidMount() {
    let sequence = "";
    const beep = document.getElementById("beep");
    $(".square, .round, .ctrl, .lr").on("click", el => {
      if(this.state.sound) {beep.play();}
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
    console.log(this.state);
    return (
      <main>
        <DoubleScreen

          data={this.state}
        />
        <AudioHandler changeTheme={this.setTheme} />
      </main>
    );
  }
}

export default App;


//TMNT2 (NES): BABAUpDownBALeftRightBAStart