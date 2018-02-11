var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var eventObj = [{
  bottom: "",
  content: "Select an option below to learn more about current events!"
}, {
  bottom: "AGDQ starts January 7th!",
  info: "Awesome Games Done Quick runs the week of January 7th. Watch on Twitch.tv and donate to support the Prevent Cancer Foundation!"
}, {
  bottom: "LttP Randomizer races on SpeedGaming",
  info: "Watch SGD and dozens of other racers compete on SpeedGaming channels 1-4!"
}, {
  bottom: "And there's always Speedruns Live for racing or spectating.",
  info: "SGD is also a regular on Speedruns Live. Visit their IRC channel to set up a match!"
}];
var contactObj = [{
  bottom: "",
  content: "Lorem ipsum dolor amet cray coloring book bushwick shabby chic cliche cloud bread, air plant literally retro intelligentsia.",
  title: "Contact info"
}, {
  bottom: "Twitter",
  fa: "fa fa-4x fa-twitter",
  url: "https://www.twitter.com",
  name: "@Some_Gamer_Dude"
}, {
  bottom: "Email",
  fa: "fa fa-4x fa-envelope",
  url: "mailto:somegamerguy@example.com",
  name: "somegamerguy@example.com"
}, {
  bottom: "Discord server",
  fa: "fa fa-4x fa-server",
  url: "https://www.discord.com",
  name: "Some Gamer Dude's Discord server"
}];
var gameObj = [{
  bottom: "",
  content: "These are a few of my favorite games... o/~ (Content courtesy of Wikipedia, the free encyclopedia.)"
}, {
  bottom: "The Legend of Zelda: a Link to the Past",
  content: "The Legend of Zelda: A Link to the Past[a] is an action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. It is the third installment in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.",
  img: "https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg"
}, {
  bottom: "Super Metroid",
  content: "Super Metroid[a] is a side-scrolling action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. The third installment in the Metroid series, it was released in Japan in March 1994, with other territories later. The story takes place after the events of the Game Boy game Metroid II: Return of Samus (1991); it follows the protagonist and playable character Samus Aran, who travels to planet Zebes in an attempt to retrieve an infant Metroid stolen by the Space Pirate leader Ridley.",
  img: "https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg"
}, {
  bottom: "Spider-Man & Venom: Maximum Carnage",
  content: "Spider-Man and Venom: Maximum Carnage is a side-scrolling beat 'em up game for the Super Nintendo Entertainment System and Mega Drive/Genesis, developed by Software Creations and published by Acclaim Entertainment and its subsidiary LJN in 1994. The game, based on the comic book story arc of the same name, features numerous heroes, including Spider-Man, Venom, and their allies from the Marvel Comics fictional universe like Captain America, Black Cat, Iron Fist, Cloak and Dagger, Deathlok, Morbius and Firestar, all teaming up to battle an onslaught of villains led by Carnage, including Shriek, Doppelganger, Demogoblin and Carrion.[1]",
  img: "https://upload.wikimedia.org/wikipedia/en/e/e8/MaximumcarnageSNES_boxart.jpg"
}];
var recordObj = [{
  title: "Super Metroid",
  category: "Any%",
  time: "1 hour 22 minutes"
}, {
  title: "Link to the Past",
  category: "Any%",
  time: "2 hours, 59 seconds"
}, {
  title: "Spider-Man and Venom in Maximum Carnage",
  category: "Any%",
  time: "2 hours, 59 seconds"
}];
var watchObj = [{
  content: "Streams, races, highlight reels, and blooper videos!"
}, {
  title: "Speedruns Live IRC channel",
  link: "https://speedrunslive.com/channel"
}, {
  title: "My Twitch.tv channel",
  embed: {
    src: "https://player.twitch.tv/?channel=lirik"
  }
}, {
  title: "My highlight videos on YouTube",
  embed: {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
  }
}];

var CodeGif = function (_React$Component) {
  _inherits(CodeGif, _React$Component);

  function CodeGif(props) {
    _classCallCheck(this, CodeGif);

    return _possibleConstructorReturn(this, (CodeGif.__proto__ || Object.getPrototypeOf(CodeGif)).call(this, props));
  }

  _createClass(CodeGif, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { style: "width:100%;height:0;padding-bottom:56%;position:relative;" },
        React.createElement("iframe", { src: "https://giphy.com/embed/78iInGFo5B9D2",
          width: "100%",
          height: "100%",
          style: "position:absolute",
          frameBorder: "0",
          "class": "giphy-embed",
          allowFullScreen: true })
      );
    }
  }]);

  return CodeGif;
}(React.Component);

var ContactMenu = function (_React$Component2) {
  _inherits(ContactMenu, _React$Component2);

  function ContactMenu(props) {
    _classCallCheck(this, ContactMenu);

    return _possibleConstructorReturn(this, (ContactMenu.__proto__ || Object.getPrototypeOf(ContactMenu)).call(this, props));
  }

  _createClass(ContactMenu, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      //console.log("ContactMenu: ", this.props);
      return React.createElement(
        "div",
        { className: "linklist" },
        React.createElement(
          "ul",
          null,
          this.props.contacts.map(function (item, index) {
            return React.createElement(
              "li",
              { key: index, onClick: function onClick(e) {
                  return _this3.props.changeView(index);
                } },
              item.bottom
            );
          })
        )
      );
    }
  }]);

  return ContactMenu;
}(React.Component);

var ContactScreen = function (_React$Component3) {
  _inherits(ContactScreen, _React$Component3);

  function ContactScreen(props) {
    _classCallCheck(this, ContactScreen);

    return _possibleConstructorReturn(this, (ContactScreen.__proto__ || Object.getPrototypeOf(ContactScreen)).call(this, props));
  }

  _createClass(ContactScreen, [{
    key: "render",
    value: function render() {
      //console.log("ContactScreen: ", this.props);
      var k = this.props.topkey;
      var contact = this.props.contacts[k];
      var text = null;
      if (contact.content) {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "h2",
            null,
            contact.title
          ),
          React.createElement(
            "p",
            null,
            contact.content
          )
        );
      } else {
        text = React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "a",
            { href: contact.url },
            React.createElement("i", { className: contact.fa }),
            React.createElement("br", null),
            contact.name
          )
        );
      }
      return React.createElement(
        "div",
        null,
        text
      );
    }
  }]);

  return ContactScreen;
}(React.Component);

var EventsMenu = function (_React$Component4) {
  _inherits(EventsMenu, _React$Component4);

  function EventsMenu(props) {
    _classCallCheck(this, EventsMenu);

    var _this5 = _possibleConstructorReturn(this, (EventsMenu.__proto__ || Object.getPrototypeOf(EventsMenu)).call(this, props));

    _this5.handleView = _this5.handleView.bind(_this5);
    return _this5;
  }

  _createClass(EventsMenu, [{
    key: "handleView",
    value: function handleView(text) {
      this.props.changeView(text);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      //console.log("EventsMenu: ", this.props);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          { className: "linklist" },
          this.props.events.map(function (item, index) {
            return React.createElement(
              "li",
              { key: index, onClick: function onClick(e) {
                  return _this6.handleView(index);
                } },
              item.bottom,
              " "
            );
          })
        )
      );
    }
  }]);

  return EventsMenu;
}(React.Component);

var EventScreen = function (_React$Component5) {
  _inherits(EventScreen, _React$Component5);

  function EventScreen(props) {
    _classCallCheck(this, EventScreen);

    return _possibleConstructorReturn(this, (EventScreen.__proto__ || Object.getPrototypeOf(EventScreen)).call(this, props));
  }

  _createClass(EventScreen, [{
    key: "render",
    value: function render() {
      //console.log("EventScreen: ", this.props);
      var k = this.props.topkey;
      var event = this.props.events[k];
      var text = null;
      if (event.content) {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "p",
            null,
            event.content
          )
        );
      } else {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "p",
            null,
            event.info
          )
        );
      }
      return React.createElement(
        "div",
        null,
        text
      );
    }
  }]);

  return EventScreen;
}(React.Component);

var GamesMenu = function (_React$Component6) {
  _inherits(GamesMenu, _React$Component6);

  function GamesMenu(props) {
    _classCallCheck(this, GamesMenu);

    return _possibleConstructorReturn(this, (GamesMenu.__proto__ || Object.getPrototypeOf(GamesMenu)).call(this, props));
  }

  _createClass(GamesMenu, [{
    key: "render",
    value: function render() {
      var _this9 = this;

      //console.log("GamesMenu: ", this.props);
      return React.createElement(
        "div",
        { className: "linklist" },
        React.createElement(
          "ul",
          null,
          this.props.games.map(function (item, index) {
            return React.createElement(
              "li",
              { key: index, onClick: function onClick(e) {
                  return _this9.props.changeView(index);
                } },
              item.bottom
            );
          })
        )
      );
    }
  }]);

  return GamesMenu;
}(React.Component);

var GameScreen = function (_React$Component7) {
  _inherits(GameScreen, _React$Component7);

  function GameScreen(props) {
    _classCallCheck(this, GameScreen);

    return _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, props));
  }

  _createClass(GameScreen, [{
    key: "render",
    value: function render() {
      //console.log("GameScreen: ", this.props);
      var k = this.props.topkey;
      var game = this.props.games[k];
      var text = null;
      if (game.img) {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "div",
            { className: "games" },
            React.createElement("img", { src: game.img, alt: game.bottom + " box image" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "p",
              null,
              game.content
            )
          )
        );
      } else {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "p",
            null,
            game.content
          )
        );
      }
      return React.createElement(
        "div",
        null,
        text
      );
    }
  }]);

  return GameScreen;
}(React.Component);

var RecordsMenu = function (_React$Component8) {
  _inherits(RecordsMenu, _React$Component8);

  function RecordsMenu(props) {
    _classCallCheck(this, RecordsMenu);

    return _possibleConstructorReturn(this, (RecordsMenu.__proto__ || Object.getPrototypeOf(RecordsMenu)).call(this, props));
  }

  _createClass(RecordsMenu, [{
    key: "render",
    value: function render() {
      // console.log("RecordScreen: ", this.props);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          " Personal Bests"
        )
      );
    }
  }]);

  return RecordsMenu;
}(React.Component);

var RecordScreen = function (_React$Component9) {
  _inherits(RecordScreen, _React$Component9);

  function RecordScreen(props) {
    _classCallCheck(this, RecordScreen);

    return _possibleConstructorReturn(this, (RecordScreen.__proto__ || Object.getPrototypeOf(RecordScreen)).call(this, props));
  }

  _createClass(RecordScreen, [{
    key: "render",
    value: function render() {
      //console.log("RecordScreen: ", this.props);
      return React.createElement(
        "div",
        { className: "content" },
        React.createElement(
          "ul",
          null,
          this.props.records.map(function (item, index) {
            return React.createElement(
              "li",
              null,
              item.title,
              ", ",
              item.category,
              ": ",
              item.time
            );
          })
        )
      );
    }
  }]);

  return RecordScreen;
}(React.Component);

var WatchMenu = function (_React$Component10) {
  _inherits(WatchMenu, _React$Component10);

  function WatchMenu(props) {
    _classCallCheck(this, WatchMenu);

    return _possibleConstructorReturn(this, (WatchMenu.__proto__ || Object.getPrototypeOf(WatchMenu)).call(this, props));
  }

  _createClass(WatchMenu, [{
    key: "render",
    value: function render() {
      var _this14 = this;

      return React.createElement(
        "div",
        { className: "linklist" },
        React.createElement(
          "ul",
          null,
          this.props.watch.map(function (item, index) {
            return React.createElement(
              "li",
              { key: index, onClick: function onClick(e) {
                  return _this14.props.changeView(index);
                } },
              item.title
            );
          })
        )
      );
    }
  }]);

  return WatchMenu;
}(React.Component);

var WatchScreen = function (_React$Component11) {
  _inherits(WatchScreen, _React$Component11);

  function WatchScreen(props) {
    _classCallCheck(this, WatchScreen);

    return _possibleConstructorReturn(this, (WatchScreen.__proto__ || Object.getPrototypeOf(WatchScreen)).call(this, props));
  }

  _createClass(WatchScreen, [{
    key: "render",
    value: function render() {
      //console.log("WatchScreen: ", this.props);
      var k = this.props.topkey;
      var video = this.props.watch[k];
      var text = null;
      if (video.embed) {
        text = React.createElement(
          "div",
          null,
          React.createElement("iframe", {
            src: video.embed.src,
            allowfullscreen: "true",
            scrolling: "no",
            gesture: "media" })
        );
      } else if (video.link) {
        text = React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "content" },
            React.createElement(
              "a",
              { href: video.link },
              "Go to ",
              video.title
            )
          )
        );
      } else {
        text = React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "p",
            null,
            video.content
          )
        );
      }
      return React.createElement(
        "div",
        null,
        text
      );
    }
  }]);

  return WatchScreen;
}(React.Component);

var HomeMenu = function (_React$Component12) {
  _inherits(HomeMenu, _React$Component12);

  function HomeMenu(props) {
    _classCallCheck(this, HomeMenu);

    return _possibleConstructorReturn(this, (HomeMenu.__proto__ || Object.getPrototypeOf(HomeMenu)).call(this, props));
  }

  _createClass(HomeMenu, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h2",
        null,
        " Welcome to Some Gamer Dude's console!"
      );
    }
  }]);

  return HomeMenu;
}(React.Component);

var Dpad = function (_React$Component13) {
  _inherits(Dpad, _React$Component13);

  function Dpad(props) {
    _classCallCheck(this, Dpad);

    return _possibleConstructorReturn(this, (Dpad.__proto__ || Object.getPrototypeOf(Dpad)).call(this, props));
  }

  _createClass(Dpad, [{
    key: "render",
    value: function render() {
      var _this18 = this;

      //console.log("Dpad: ", this.props);
      return React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "button",
          {
            className: "square",
            id: "upbtn",
            value: "Up",
            onClick: function onClick(e) {
              return _this18.props.changeMenu("games");
            }
          },
          React.createElement("i", { className: "fa fa-gamepad" })
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          {
            className: "square",
            id: "leftbtn",
            value: "Left",
            onClick: function onClick(e) {
              return _this18.props.changeMenu("events");
            }
          },
          React.createElement("i", { className: "fa fa-calendar" })
        ),
        React.createElement(
          "button",
          { className: "square visible" },
          React.createElement("i", { className: "fa fa-arrows" })
        ),
        React.createElement(
          "button",
          {
            className: "square",
            id: "rightbtn",
            value: "Right",
            onClick: function onClick(e) {
              return _this18.props.changeMenu("watch");
            }
          },
          React.createElement("i", { className: "fa fa-video-camera" })
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          {
            className: "square",
            id: "downbtn",
            value: "Down",
            onClick: function onClick(e) {
              return _this18.props.changeMenu("contact");
            }
          },
          React.createElement("i", { className: "fa fa-comment" })
        )
      );
    }
  }]);

  return Dpad;
}(React.Component);

var Buttons = function (_React$Component14) {
  _inherits(Buttons, _React$Component14);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));
  }

  _createClass(Buttons, [{
    key: "render",
    value: function render() {
      var _this20 = this;

      return React.createElement(
        "div",
        { className: "controls" },
        React.createElement(
          "div",
          { className: "buttons" },
          React.createElement(
            "button",
            {
              className: "round",
              id: "xbtn",
              value: "X",
              onClick: function onClick(e) {
                return _this20.props.changeMenu("home");
              }
            },
            React.createElement("i", { className: "fa fa-home", "aria-hidden": "true" })
          ),
          React.createElement("br", null),
          React.createElement(
            "button",
            {
              className: "round",
              id: "ybtn",
              value: "Y",
              onClick: function onClick(e) {
                return _this20.props.changeMenu("records");
              }
            },
            React.createElement("i", { className: "fa fa-trophy", "aria-hidden": "true" })
          ),
          React.createElement("i", { className: "fa fa-stop invisible" }),
          React.createElement(
            "button",
            { className: "round", id: "abtn", value: "A" },
            "A"
          ),
          React.createElement("br", null),
          React.createElement(
            "button",
            { className: "round", id: "bbtn", value: "B" },
            "B"
          )
        ),
        React.createElement(
          "div",
          { className: "start" },
          React.createElement(
            "button",
            { className: "ctrl", id: "selectbtn", value: "Select" },
            "select"
          ),
          React.createElement(
            "button",
            { className: "ctrl", id: "startbtn", value: "Start" },
            "start"
          )
        )
      );
    }
  }]);

  return Buttons;
}(React.Component);

var TopScreen = function (_React$Component15) {
  _inherits(TopScreen, _React$Component15);

  function TopScreen(props) {
    _classCallCheck(this, TopScreen);

    return _possibleConstructorReturn(this, (TopScreen.__proto__ || Object.getPrototypeOf(TopScreen)).call(this, props));
  }

  _createClass(TopScreen, [{
    key: "render",
    value: function render() {
      //console.log("TopScreen: ", this.props);
      var top = null;
      if (this.props.view === "contact") {
        top = React.createElement(ContactScreen, {
          contacts: this.props.contacts,
          topkey: this.props.topview
        });
      }
      if (this.props.view === "events") {
        top = React.createElement(EventScreen, {
          events: this.props.events,
          topkey: this.props.topview
        });
      }
      if (this.props.view === "games") {
        top = React.createElement(GameScreen, {
          games: this.props.games,
          topkey: this.props.topview });
      }
      if (this.props.view === "home") {
        top = React.createElement(
          "div",
          { className: "content", id: "giftarget" },
          React.createElement(
            "h2",
            null,
            "Hi!"
          ),
          React.createElement(
            "p",
            null,
            "SGD is a classically trained gamer who inexplicably makes a living by playing silly games and making dumb jokes online. Find videos, events, personal records, and everything else about him by pushing the buttons below."
          )
        );
      }
      if (this.props.view === "records") {
        top = React.createElement(RecordScreen, {
          records: this.props.records,
          topkey: this.props.topview
        });
      }
      if (this.props.view === "watch") {
        top = React.createElement(WatchScreen, {
          watch: this.props.watch,
          topkey: this.props.topview });
      }
      if (this.props.view === "bonus") {
        top = React.createElement(CodeGif, null);
      }
      return React.createElement(
        "div",
        { className: "screen", id: "topscreen" },
        top
      );
    }
  }]);

  return TopScreen;
}(React.Component);

var BottomScreen = function (_React$Component16) {
  _inherits(BottomScreen, _React$Component16);

  function BottomScreen(props) {
    _classCallCheck(this, BottomScreen);

    return _possibleConstructorReturn(this, (BottomScreen.__proto__ || Object.getPrototypeOf(BottomScreen)).call(this, props));
  }

  _createClass(BottomScreen, [{
    key: "render",
    value: function render() {
      //console.log("BottomScreen: ", this.props);
      var view = null;
      if (this.props.view === "home") view = React.createElement(HomeMenu, { changeView: this.props.changeTopView });
      if (this.props.view === "events") view = React.createElement(EventsMenu, {
        events: this.props.events,
        changeView: this.props.changeTopView
      });
      if (this.props.view === "games") view = React.createElement(GamesMenu, {
        games: this.props.games,
        changeView: this.props.changeTopView
      });
      if (this.props.view === "contact") view = React.createElement(ContactMenu, {
        contacts: this.props.contacts,
        changeView: this.props.changeTopView
      });
      if (this.props.view === "watch") view = React.createElement(WatchMenu, {
        watch: this.props.watch,
        changeView: this.props.changeTopView
      });
      if (this.props.view === "records") view = React.createElement(RecordsMenu, {
        records: this.props.records,
        changeView: this.props.changeTopView
      });
      return React.createElement(
        "div",
        { className: "screen", id: "bottomscreen" },
        view
      );
    }
  }]);

  return BottomScreen;
}(React.Component);

var Application = function (_React$Component17) {
  _inherits(Application, _React$Component17);

  function Application(props) {
    _classCallCheck(this, Application);

    var _this23 = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, props));

    _this23.state = {
      bonus: "",
      contacts: contactObj,
      events: eventObj,
      games: gameObj,
      records: recordObj,
      watch: watchObj,
      topview: 0,
      view: "home"
    };
    _this23.setMenu = _this23.setMenu.bind(_this23);
    _this23.setTopView = _this23.setTopView.bind(_this23);
    return _this23;
  }

  _createClass(Application, [{
    key: "setTopView",
    value: function setTopView(num) {
      this.setState({ topview: num });
    }
  }, {
    key: "setMenu",
    value: function setMenu(str) {
      this.setState({
        view: str,
        topview: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(
          "div",
          { className: "top half", id: "tophalf" },
          React.createElement(TopScreen, {
            contacts: this.state.contacts,
            events: this.state.events,
            games: this.state.games,
            records: this.state.records,
            watch: this.state.watch,
            view: this.state.view,
            topview: this.state.topview,
            changeMenu: this.setMenu
          })
        ),
        React.createElement(
          "div",
          { className: "hinge" },
          React.createElement(
            "button",
            { className: "lr right", id: "lbtn", value: "L" },
            "L "
          ),
          React.createElement(
            "button",
            { className: "lr left", id: "rbtn", value: "R" },
            "R"
          )
        ),
        React.createElement(
          "div",
          { className: "bottom half flex-row", id: "bottomhalf" },
          React.createElement(Dpad, {
            view: this.state.view,
            changeTopView: this.setTopView,
            changeMenu: this.setMenu
          }),
          React.createElement(BottomScreen, {
            view: this.state.view,
            changeMenu: this.setMenu,
            changeTopView: this.setTopView,
            contacts: this.state.contacts,
            events: this.state.events,
            games: this.state.games,
            records: this.state.records,
            watch: this.state.watch
          }),
          React.createElement(Buttons, {
            view: this.state.view,
            changeTopView: this.setTopView,
            changeMenu: this.setMenu
          })
        )
      );
    }
  }]);

  return Application;
}(React.Component);

ReactDOM.render(React.createElement(Application, null), document.getElementById("react-app"));

$("document").ready(function () {
  var sequence = "";
  $(".square, .round, .ctrl, .lr").on("click", function (el) {
    sequence += el.currentTarget.value.toString();
    console.log(sequence);

    if (sequence.search("UpUpDownDownLeftRightLeftRightBAStart") > -1) {
      var kon = document.getElementById("kon");
      kon.play();
      sequence = "";
    }
    if (sequence.search("UpSelectLeftRightAAB") > -1) {
      var nemo = document.getElementById("nemo");
      nemo.play();
      sequence = "";
    }
    if (sequence.search("DownRUpLYB") > -1) {
      var sf2 = document.getElementById("sf2");
      sf2.play();
      sequence = "";
    }
    if (sequence.search("BARRAL") > -1) {
      var dkc = document.getElementById("dkc");
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