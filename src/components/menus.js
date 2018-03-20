import React from 'react';
import './screens';
import './buttons';


// Bottom screen layout and sound effects. TextMenu is only used for the home screens.

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.screenChange = this.screenChange.bind(this);
    }
    screenChange(index, el) {
        if(this.props.data.sound) el.play();
        this.props.changeScreen(index);
    }
    playSound(el) {
        if(this.props.data.sound) el.play();
    }
    render() {    
        const beep = document.getElementById("beep");
        const click = document.getElementById("click");    
        let menu = this.props.data.menu;
        if (menu === "home") {
            return (<TextMenu />);
        }
        else {
            return (
                <div className="linklist">
                    <h3 className="content">{this.props.data[menu][0].bottom}</h3>
                    <ul>
                        {this.props.data[menu].map((item, index) => (
                            <li key={index} 
                                onClick={e => this.screenChange(index, beep)}
                                onMouseOver={e => this.playSound(click)}>
                                {item.bottom} {item.time}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

class TextMenu extends React.Component {
    render() {
        return <h2 className="center"> Welcome to Some Gamer Dude's console!</h2>;
    }
}

export { Menu, TextMenu };