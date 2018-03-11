const eventObj = [
  {
    bottom: ``,
    content: `Select an option below to learn more about current events!`
  },
  {
    bottom: "AGDQ starts January 7th!",
    content: `Awesome Games Done Quick runs the week of January 7th. Watch on Twitch.tv and donate to support the Prevent Cancer Foundation!`
  },
  {
    bottom: "LttP Randomizer races on SpeedGaming",
    content: `Watch SGD and dozens of other racers compete on SpeedGaming channels 1-4!`
  },
  {
    bottom: "And there's always Speedruns Live for racing or spectating.",
    content: `SGD is also a regular on Speedruns Live. Visit their IRC channel to set up a match!`
  }
];

const contactObj = [
  { content: `Contact information` },
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
  { content: "Personal bests" },
  {
    bottom: "Super Metroid Any%, 1 hour 22 minutes",
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  },
  {
    bottom: "Link to the Past Any%, 2 hours 59 seconds",
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  },
  {
    bottom: "Spider-Man and Venom in Maximum Carnage Any%, 34 minutes 22 seconds",
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  }
];

const watchObj = [
  {
    content: `Streams, races, highlight reels, and blooper videos!`
  },
  {
    bottom: `Speedruns Live IRC channel`,
    link: "https://speedrunslive.com/channel"
  },
  {
    bottom: `My Twitch.tv channel`,
    embed: {
      src: "https://player.twitch.tv/?channel=lirik",
    }
  },
  {
    bottom: `My highlight videos on YouTube`,
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  }
]

module.exports = { eventObj, contactObj, recordObj, watchObj, gameObj };