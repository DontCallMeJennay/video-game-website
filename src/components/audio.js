import React from 'react';
import $ from 'jquery';

export default class AudioHandler extends React.Component {
    render() {
        return (
            <div id="audio">
                <audio id="sf2" src="https://jennicorbus.com/audio/hadouken.mp3" type="audio/mp3"></audio>
                <audio id="kon" src="https://jennicorbus.com/audio/stage-clear.mp3" type="audio/mp3"></audio>
                <audio id="dkc" src="https://jennicorbus.com/audio/tagged.mp3" type="audio/mp3"></audio>
                <audio id="nemo" src="https://jennicorbus.com/audio/nemo.mp3" type="audio/mp3"></audio>
            </div>
        )
    }
}

// Problem: How do I get the jQuery code to tell the React code to change the theme property?
// I probably have to rewrite this in plain JS...

$(document).ready(() => {
    let sequence = "";
    $(".square, .round, .ctrl, .lr").on("click", el => {
        sequence += el.currentTarget.value.toString();
        console.log(sequence);

        if (sequence.search("UpUpDownDownLeftRightLeftRightBAStart") > -1) {
            let kon = document.getElementById("kon");
            kon.play();
            this.props.changeTheme("src/css/dk.css");
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
            sequence = "";
        }
        if (sequence.length > 100) {
            sequence = "";
        }
    });
});