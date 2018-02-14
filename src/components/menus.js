import React from 'react';
import './screens';
import './buttons';


class Menu extends React.Component {
    render() {
        return (
            <div className="linklist">
                <ul>
                    {this.props.contacts.map((item, index) => (
                        <li key={index} onClick={e => this.props.changeView(index)}>
                            {item.bottom}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class TextMenu extends React.Component {
    render() {
        return <h2> Welcome to Some Gamer Dude's console!</h2>;
    }
}

export { Menu, TextMenu };