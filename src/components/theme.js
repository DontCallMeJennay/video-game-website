import React from 'react';
import store from '../store';
import actions from '../actions/index'
import $ from 'jquery';

const dkcTheme = '../css/style2.css';

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
                store.dispatch(actions.changeTheme(dkcTheme));
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
        return (<br />);
    }
}