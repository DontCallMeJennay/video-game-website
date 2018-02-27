import React from 'react';

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
