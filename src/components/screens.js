import React from 'react';
import './buttons';
import './menus';

class ContactScreen extends React.Component {
  render() {
    //console.log("ContactScreen: ", this.props);
    let k = this.props.topkey;
    let contact = this.props.contacts[k];
    let text = null;
    if (contact.content) {
      text = (
        <div className="content">
          <h2>{contact.title}</h2>
          <p>{contact.content}</p>
        </div>
      );
    } else {
      text = (
        <div className="column">
          <a href={contact.url}>
            <i className={contact.fa} />
            <br />
            {contact.name}</a>
        </div>
      );
    }
    return <div>{text}</div>;
  }
}

class EventScreen extends React.Component {
  render() {
    //console.log("EventScreen: ", this.props);
    let k = this.props.topkey;
    let event = this.props.events[k];
    let text = null;
    if (event.content) {
      text = (
        <div className="content">
          <p>{event.content}</p>
        </div>
      );
    } else {
      text = (
        <div className="content">
          <p>{event.info}</p>
        </div>
      );
    }
    return <div>{text}</div>;
  }
}

class GameScreen extends React.Component {
  render() {
    //console.log("GameScreen: ", this.props);
    let k = this.props.topkey;
    let game = this.props.games[k];
    let text = null;
    if (game.img) {
      text = (
        <div className="content">
          <div className="games">
            <img src={game.img} alt={game.bottom + " box image"} />
          </div>
          <div>
            <p>{game.content}</p>
          </div>
        </div>
      );
    } else {
      text = (
        <div className="content">
          <p>{game.content}</p>
        </div>
      );
    }
    return <div>{text}</div>;
  }
}

class RecordScreen extends React.Component {
  render() {
    //console.log("RecordScreen: ", this.props);
    return (
      <div className="content">
        <ul>
          {this.props.records.map((item, index) => (
            <li key={index}>
              {item.title}, {item.category}: {item.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class WatchScreen extends React.Component {
  render() {
    //console.log("WatchScreen: ", this.props);
    let k = this.props.topkey;
    let video = this.props.watch[k];
    let text = null;
    if (video.embed) {
      text = (
        <div>
          <iframe
            title="YouTube Video"
            src={video.embed.src}
            allowfullscreen="true"
            scrolling="no"
            gesture="media">
          </iframe>
        </div>
      );
    } else if (video.link) {
      text = (<div>
        <p className="content">
          <a href={video.link}>Go to {video.title}</a>
        </p>
      </div>)
    } else {
      text = (
        <div className="content">
          <p>
            {video.content}
          </p>
        </div>
      );
    }
    return <div>{text}</div>;
  }
}

export { ContactScreen, EventScreen, GameScreen, RecordScreen, WatchScreen };