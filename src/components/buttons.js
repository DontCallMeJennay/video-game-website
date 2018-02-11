import React from 'react';
import './menus';
import './screens';

class Dpad extends React.Component {
    render() {
        //console.log("Dpad: ", this.props);
        return (
            <div className="controls">
                <button
                    className="square"
                    id="upbtn"
                    value="Up"
                    onClick={e => this.props.changeMenu("games")}
                >
                    <i className="fa fa-gamepad" />
                </button>
                <br />
                <button
                    className="square"
                    id="leftbtn"
                    value="Left"
                    onClick={e => this.props.changeMenu("events")}
                >
                    <i className="fa fa-calendar" />
                </button>
                <button className="square visible">
                    <i className="fa fa-arrows" />
                </button>
                <button
                    className="square"
                    id="rightbtn"
                    value="Right"
                    onClick={e => this.props.changeMenu("watch")}
                >
                    <i className="fa fa-video-camera" />
                </button>
                <br />
                <button
                    className="square"
                    id="downbtn"
                    value="Down"
                    onClick={e => this.props.changeMenu("contact")}
                >
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
                        id="xbtn"
                        value="X"
                        onClick={e => this.props.changeMenu("home")}
                    >
                        <i className="fa fa-home" aria-hidden="true" />
                    </button>
                    <br />
                    <button
                        className="round"
                        id="ybtn"
                        value="Y"
                        onClick={e => this.props.changeMenu("records")}
                    >
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