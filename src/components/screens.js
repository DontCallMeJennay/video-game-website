import React from 'react';
import './buttons';
import './menus';

class ArticleScreen extends React.Component {
  render() {
    console.log("Showing ArticleScreen");
    let k = this.props.data.topview;
    let game = this.props.data.games[k];
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
    console.log("Showing ListScreen");
    let topic = this.props.data.menu;
    let div = null;
    if (this.props.data[topic]) {
      let k = this.props.data.topview;  
      let content = this.props.data[topic][k];
      let contactDiv = (<p><i className={content.fa}><a href={content.url}>{content.name}</a></i></p>);
      let contentDiv = (<p> {content.content} </p>);
      topic === "contact" && this.props.data.topview > 0 ? div = contactDiv : div = contentDiv;
    } else {
      div = (<div>{this.props.data.menu}</div>);
    }
    return (
      <div className="content">
        {div}
        </div>
    );
  }
}

class EmbedScreen extends React.Component {
  render() {
    let k = this.props.data.topview;
    let video = this.props.data.menu;
    video === "watch" ? video = this.props.data.watch[k] : video = this.props.data.records[k];
    let text = null;
    if (video.embed) {
      text = (
          <iframe
            title="YouTube Video"
            src={video.embed.src}
            allowFullScreen="true"
            scrolling="no"
            gesture="media">
          </iframe>
      );
    } else if (video.link) {
      text = (
        <p className="content">
          <a href={video.link}>Go to {video.bottom}</a>
        </p>)
    } else {
      text = (
          <p className="content">
            {video.content}
          </p>
      );
    }
    return <div>{text}</div>;
  }
}

export { ArticleScreen, EmbedScreen, ListScreen };