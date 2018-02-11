import React from 'react';
import './screens';
import './buttons';


class ContactMenu extends React.Component {
    render() {
        //console.log("ContactMenu: ", this.props);
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

class EventsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleView = this.handleView.bind(this);
    }
    handleView(text) {
        this.props.changeView(text);
    }
    render() {
        //console.log("EventsMenu: ", this.props);
        return (
            <div>
                <ul className="linklist">
                    {this.props.events.map((item, index) => (
                        <li key={index} onClick={e => this.handleView(index)}>
                            {item.bottom}{" "}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class GamesMenu extends React.Component {
    render() {
        //console.log("GamesMenu: ", this.props);
        return (
            <div className="linklist">
                <ul>
                    {this.props.games.map((item, index) => (
                        <li key={index} onClick={e => this.props.changeView(index)}>
                            {item.bottom}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class RecordsMenu extends React.Component {
    render() {
        // console.log("RecordScreen: ", this.props);
        return (
            <div>
                <h2> Personal Bests</h2>
            </div>
        );
    }
}

class WatchMenu extends React.Component {
    render() {
        return (
            <div className="linklist">
                <ul>
                    {this.props.watch.map((item, index) => (
                        <li key={index} onClick={e => this.props.changeView(index)}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class HomeMenu extends React.Component {
    render() {
        return <h2> Welcome to Some Gamer Dude's console!</h2>;
    }
}

export { ContactMenu, EventsMenu, GamesMenu, RecordsMenu, WatchMenu, HomeMenu };