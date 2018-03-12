import React from 'react';
import DoubleScreen from './components/doublescreen';
import AudioHandler from './components/audio';
import ThemeHandler from './components/theme';
import store from './store';

import './css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.listenForMenuChange.bind(this));
    store.subscribe(this.listenForScreenChange.bind(this));
    store.subscribe(this.listenForThemeChange.bind(this));
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
  listenForThemeChange() {
    let prevState = this.state.style;
    let newState = store.getState();
    if (prevState.style !== newState.style) {
      this.setState(newState);
    }
  }
  render() {
    return (
      <main>
        <link rel="stylesheet" type="text/css" href={this.state.style} />
        <ThemeHandler
          sound={this.state.sound}
          />
        <DoubleScreen
          data={this.state}
        />
        <AudioHandler />
      </main>
    );
  }
}

export default App;