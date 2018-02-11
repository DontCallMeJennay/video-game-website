import React from 'react';
import $ from 'jquery';
import { ContactScreen, EventScreen, GameScreen, RecordScreen, WatchScreen } from './components/screens'
import { Dpad, Buttons } from './components/buttons'
import { ContactMenu, EventsMenu, GamesMenu, RecordsMenu, WatchMenu, HomeMenu } from './components/menus'

class TopScreen extends React.Component {
  render() {
    //console.log("TopScreen: ", this.props);
    let top = null;
    if (this.props.view === "contact") {
      top = (
        <ContactScreen
          contacts={this.props.contacts}
          topkey={this.props.topview}
        />
      );
    }
    if (this.props.view === "events") {
      top = (
        <EventScreen 
          events={this.props.events} 
          topkey={this.props.topview} 
          />
      );
    }
    if (this.props.view === "games") {
      top = <GameScreen 
              games={this.props.games} 
              topkey={this.props.topview} />;
    }
    if (this.props.view === "home") {
      top = (
      <div className="content" id="giftarget">
          <h2>Hi!</h2>
          <p>SGD is a classically trained gamer who inexplicably makes a living by playing silly games and making dumb jokes online. Find videos, events, personal records, and everything else about him by pushing the buttons below.</p>
          </div>);
    }
    if (this.props.view === "records") {
      top = (
        <RecordScreen
          records={this.props.records}
          topkey={this.props.topview}
        />
      );
    }
    if (this.props.view === "watch") {
      top = <WatchScreen 
              watch={this.props.watch}
              topkey={this.props.topview} />;
    }
    return (
      <div className="screen" id="topscreen">
        {top}
      </div>
    );
  }
}

class BottomScreen extends React.Component {
  render() {
    //console.log("BottomScreen: ", this.props);
    let view = null;
    if (this.props.view === "home")
      view = <HomeMenu changeView={this.props.changeTopView} />;
    if (this.props.view === "events")
      view = (
        <EventsMenu
          events={this.props.events}
          changeView={this.props.changeTopView}
        />
      );
    if (this.props.view === "games")
      view = (
        <GamesMenu
          games={this.props.games}
          changeView={this.props.changeTopView}
        />
      );
    if (this.props.view === "contact")
      view = (
        <ContactMenu
          contacts={this.props.contacts}
          changeView={this.props.changeTopView}
        />
      );
    if (this.props.view === "watch")
      view = <WatchMenu 
               watch={this.props.watch}
               changeView={this.props.changeTopView} 
               />;
    if (this.props.view === "records")
      view = (
        <RecordsMenu
          records={this.props.records}
          changeView={this.props.changeTopView}
        />
      );
    return (
      <div className="screen" id="bottomscreen">
        {view}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: "",
      contacts: contactObj,
      events: eventObj,
      games: gameObj,
      records: recordObj,
      watch: watchObj,  
      topview: 0,
      view: "home"
    };
    this.setMenu = this.setMenu.bind(this);
    this.setTopView = this.setTopView.bind(this);
  }
  setTopView(num) {
    this.setState({ topview: num });
  }
  setMenu(str) {
    this.setState({ 
      view: str,
      topview: 0
    });
  }
  render() {
    return (
      <main>
        <div className="top half" id="tophalf">
          <TopScreen
            contacts={this.state.contacts}
            events={this.state.events}
            games={this.state.games}
            records={this.state.records}
            watch={this.state.watch}
            view={this.state.view}
            topview={this.state.topview}
            changeMenu={this.setMenu}
          />
        </div>
        <div className="hinge">
          <button className="lr right" id="lbtn" value="L">L </button>
          <button className="lr left" id="rbtn" value="R">R</button>
        </div>
        <div className="bottom half flex-row" id="bottomhalf">
                    
          <Dpad
            view={this.state.view}
            changeTopView={this.setTopView}
            changeMenu={this.setMenu}
          />
          <BottomScreen
            view={this.state.view}
            changeMenu={this.setMenu}
            changeTopView={this.setTopView}
            contacts={this.state.contacts}
            events={this.state.events}
            games={this.state.games}
            records={this.state.records}
            watch={this.state.watch}
          />
          <Buttons
            view={this.state.view}
            changeTopView={this.setTopView}
            changeMenu={this.setMenu}
          />
          
        </div>
      </main>
    );
  }
}

export default App;

$("document").ready(() => {
  let sequence = "";
  $(".square, .round, .ctrl, .lr").on("click", el => {
    sequence += el.currentTarget.value.toString();
    console.log(sequence);
    
    if (sequence.search("UpUpDownDownLeftRightLeftRightBAStart") > -1) {
      let kon = document.getElementById("kon");
      kon.play();
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

//TMNT2 (NES): BABAUpDownBALeftRightBAStart

//<a href="https://giphy.com/gifs/games-nes-contra-78iInGFo5B9D2">via GIPHY</a></p>

const eventObj = [
  {
    bottom: ``,
    content: `Select an option below to learn more about current events!`
  },
  {
    bottom: "AGDQ starts January 7th!",
    info: `Awesome Games Done Quick runs the week of January 7th. Watch on Twitch.tv and donate to support the Prevent Cancer Foundation!`
  },
  {
    bottom: "LttP Randomizer races on SpeedGaming",
    info: `Watch SGD and dozens of other racers compete on SpeedGaming channels 1-4!`
  },
  {
    bottom: "And there's always Speedruns Live for racing or spectating.",
    info: `SGD is also a regular on Speedruns Live. Visit their IRC channel to set up a match!`
  }
];

const contactObj = [
  {
    bottom: ``,
    content: `Lorem ipsum dolor amet cray coloring book bushwick shabby chic cliche cloud bread, air plant literally retro intelligentsia.`,
    title: "Contact info"
  },
  {
    bottom: "Twitter",
    fa: "fa fa-4x fa-twitter",
    url: "https://www.twitter.com",
    name: "@Some_Gamer_Dude"
  },
  {
    bottom: "Email",
    fa: "fa fa-4x fa-envelope",
    url: "mailto:somegamerguy@example.com",
    name: "somegamerguy@example.com"
  },
  {
    bottom: "Discord server",
    fa: "fa fa-4x fa-server",
    url: "https://www.discord.com",
    name: "Some Gamer Dude's Discord server"
  }
];

const gameObj = [
  {
    bottom: ``,
    content: `These are a few of my favorite games... o/~ (Content courtesy of Wikipedia, the free encyclopedia.)`
  },
  {
    bottom: `The Legend of Zelda: a Link to the Past`,
    content: `The Legend of Zelda: A Link to the Past[a] is an action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. It is the third installment in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.`,
    img: `https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg`
  },
  {
    bottom: `Super Metroid`,
    content: `Super Metroid[a] is a side-scrolling action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. The third installment in the Metroid series, it was released in Japan in March 1994, with other territories later. The story takes place after the events of the Game Boy game Metroid II: Return of Samus (1991); it follows the protagonist and playable character Samus Aran, who travels to planet Zebes in an attempt to retrieve an infant Metroid stolen by the Space Pirate leader Ridley.`,
    img: `https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg`
  },
  {
    bottom: `Spider-Man & Venom: Maximum Carnage`,
    content: `Spider-Man and Venom: Maximum Carnage is a side-scrolling beat 'em up game for the Super Nintendo Entertainment System and Mega Drive/Genesis, developed by Software Creations and published by Acclaim Entertainment and its subsidiary LJN in 1994. The game, based on the comic book story arc of the same name, features numerous heroes, including Spider-Man, Venom, and their allies from the Marvel Comics fictional universe like Captain America, Black Cat, Iron Fist, Cloak and Dagger, Deathlok, Morbius and Firestar, all teaming up to battle an onslaught of villains led by Carnage, including Shriek, Doppelganger, Demogoblin and Carrion.[1]`,
    img: `https://upload.wikimedia.org/wikipedia/en/e/e8/MaximumcarnageSNES_boxart.jpg`
  }
];

const recordObj = [
  {
    title: "Super Metroid",
    category: "Any%",
    time: "1 hour 22 minutes"
  },
  {
    title: "Link to the Past",
    category: "Any%",
    time: "2 hours, 59 seconds"
  },
  {
    title: "Spider-Man and Venom in Maximum Carnage",
    category: "Any%",
    time: "2 hours, 59 seconds"
  }
];

const watchObj = [
  {    
    content: `Streams, races, highlight reels, and blooper videos!`
  },
  {
    title: `Speedruns Live IRC channel`,
    link: "https://speedrunslive.com/channel"
  },
  {
    title: `My Twitch.tv channel`,
    embed: {
      src: "https://player.twitch.tv/?channel=lirik",
    }
  },
  {
    title: `My highlight videos on YouTube`,
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  }
]
