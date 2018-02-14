import React from 'react';
import './buttons';
import './menus';

class ArticleScreen extends React.Component {
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

class ListScreen extends React.Component {
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

class EmbedScreen extends React.Component {
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

export { ArticleScreen, EmbedScreen, ListScreen };