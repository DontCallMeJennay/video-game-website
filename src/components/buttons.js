import React from 'react';
import ReactTooltip from 'react-tooltip';
import './menus';
import './screens';

class Dpad extends React.Component {
    render() {
        return (
            <div className="controls">
                <button
                    className="square"
                    data-tip="Games"
                    id="upbtn"
                    value="Up"
                    onClick={e => this.props.changeMenu("games")}
                ><ReactTooltip />
                    <i className="fa fa-gamepad" />
                </button>
                <br />
                <button
                    className="square"
                    data-tip="Events"
                    id="leftbtn"
                    value="Left"
                    onClick={e => this.props.changeMenu("events")}
                ><ReactTooltip />
                    <i className="fa fa-calendar" />
                </button>
                <button className="square visible">
                    <i className="fa fa-arrows" />
                </button>
                <button
                    className="square"
                    data-tip="Livestreams and highlight videos"
                    id="rightbtn"
                    value="Right"
                    onClick={e => this.props.changeMenu("watch")}
                ><ReactTooltip />
                    <i className="fa fa-video-camera" />
                </button>
                <br />
                <button
                    className="square"
                    data-tip="Contact information"
                    id="downbtn"
                    value="Down"
                    onClick={e => this.props.changeMenu("contact")}
                ><ReactTooltip />
                    <i className="fa fa-comment" />
                </button>
            </div>
        );
    }
}

class Buttons extends React.Component {

    render() {
        return (
            <div className="controls">
                <div className="buttons">
                    <button
                        className="round"
                        data-tip="Home"
                        id="xbtn"
                        value="X"
                        onClick={e => this.props.changeMenu("home")}
                    ><ReactTooltip />
                        <i className="fa fa-home" aria-hidden="true" />
                    </button>
                    <br />
                    <button
                        className="round"
                        data-tip="Personal Bests and Awards"
                        id="ybtn"
                        value="Y"
                        onClick={e => this.props.changeMenu("records")}
                    ><ReactTooltip />
                        <i className="fa fa-trophy" aria-hidden="true" />
                    </button>
                    <i className="fa fa-stop invisible" />
                    <button className="round" id="abtn" value="A">
                        A
            </button>
                    <br />
                    <button className="round" id="bbtn" value="B">
                        B
            </button>
                </div>
                <div className="start">
                    <button className="ctrl" id="selectbtn" value="Select">
                        select
            </button>
                    <button className="ctrl" id="startbtn" value="Start">
                        start
            </button>
                </div>
            </div>
        );
    }
}

export { Dpad, Buttons };