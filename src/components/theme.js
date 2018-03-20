import React from 'react';
import store from '../store';
import actions from '../actions/index'
import $ from 'jquery';

import '../css/dk.css';

export default class ThemeHandler extends React.Component {
    constructor(props) {
        super(props);
        this.setTheme = this.setTheme.bind(this);
    }
    setTheme(theme) {
        store.dispatch(actions.changeTheme(theme));
    }

    componentDidMount() {
        let sequence = "";
        const beep = document.getElementById("beep");
        $(".square, .round, .ctrl, .lr").on("click", el => {
            if (this.props.sound) { beep.play(); }
            sequence += el.currentTarget.value.toString();

            if (sequence.search("UpUpDownDownLeftRightLeftRightBAStart") > -1) {
                store.dispatch(actions.changeTheme("contra"));
                let kon = document.getElementById("kon");                
                kon.play();
                sequence = "";
            }
            if (sequence.search("UpSelectLeftRightAAB") > -1) {
                store.dispatch(actions.changeTheme("nemo"));
                let nemo = document.getElementById("nemo");                
                nemo.play();
                sequence = "";
            }
            if (sequence.search("DownRUpLYB") > -1) {
                store.dispatch(actions.changeTheme("sf2"));
                let sf2 = document.getElementById("sf2");                
                sf2.play();
                sequence = "";
            }
            if (sequence.search("BARRAL") > -1) {
                store.dispatch(actions.changeTheme("dk"));
                let dkc = document.getElementById("dkc");
                dkc.play();                
                sequence = "";
            }
            if (sequence.length > 100) {
                sequence = "";
            }
        });
    }
    render() {
        return (<br />);
    }
}