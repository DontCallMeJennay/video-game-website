const eventObj = [
  {
    bottom: `Current events`,
    title: `Current Events`,
    content: `Select an option below to learn more about tournaments and events I'm involved in (or wish I was)!`
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
  {
    bottom: `Contact info`,
    content: `Ways to contact Gamer Dude`,
    title: "Shout-out"
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
    bottom: `Select a game`,
    content1: `More info about what I'm playing lately.  Content courtesy of Wikipedia, the free encyclopedia.`,
    title: `Game information`
  },
  {
    bottom: `The Bugs Bunny Birthday Blowout`,
    content1: `The Bugs Bunny Birthday Blowout, known in Japan and on the title screen as Happy Birthday Bugs (ハッピーバースディ・バッグス) and in Europe as The Bugs Bunny Blowout, is the title of a Kemco video game released for the Nintendo Entertainment System in 1990.`,
    content2: `The game is a side-scrolling adventure game where players control Bugs Bunny on a quest to get to his 50th birthday party. He is armed with a mallet that he can swing at various enemies to defeat them, deflect certain projectiles or destroy bricks. He can also collect hearts to restore his health and carrots for bonus points. He can also land on top of enemies without getting damaged. At the end of most levels, Bugs Bunny has to use his mallet to defeat a Warner Brothers cartoon character such as Foghorn Leghorn, Sylvester, or the Tasmanian Devil. These other Looney Tunes characters are trying to stop Bugs because they are all jealous that Bugs gets all the attention. The gameplay is very similar to Super Mario Bros. 2, another game for NES.`,
    img: `https://upload.wikimedia.org/wikipedia/en/5/50/Bugs_Bunny_Birthday_Blowout.jpg`
  },
  {
    bottom: `The Legend of Zelda: a Link to the Past`,
    content1: `The Legend of Zelda: A Link to the Past[a] is an action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. It is the third installment in The Legend of Zelda series and was released in 1991 in Japan and 1992 in North America and Europe.`,
    img: `https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg`
  },
  {
    bottom: `Spider-Man & Venom: Maximum Carnage`,
    content1: `Spider-Man and Venom: Maximum Carnage is a side-scrolling beat 'em up game for the Super Nintendo Entertainment System and Mega Drive/Genesis, developed by Software Creations and published by Acclaim Entertainment and its subsidiary LJN in 1994. The game, based on the comic book story arc of the same name, features numerous heroes, including Spider-Man, Venom, and their allies from the Marvel Comics fictional universe like Captain America, Black Cat, Iron Fist, Cloak and Dagger, Deathlok, Morbius and Firestar, all teaming up to battle an onslaught of villains led by Carnage, including Shriek, Doppelganger, Demogoblin and Carrion.[1]`,
    img: `https://upload.wikimedia.org/wikipedia/en/e/e8/MaximumcarnageSNES_boxart.jpg`
  },
  {
    bottom: `StarTropics`,
    content1: `StarTropics is an action-adventure video game released by Nintendo in 1990 for the NES. Unlike most of Nintendo's games, it was never released or intended to be released in Japan. It was released only in North America and Europe, although designed by Japanese designers living in the United States. It was produced, written and directed by Genyo Takeda of Nintendo Integrated Research & Development (who also developed the Punch-Out!! series). StarTropics was followed by a sequel titled Zoda's Revenge: StarTropics II, released in 1994.`,
    img: `https://upload.wikimedia.org/wikipedia/en/8/84/Startropics_box.jpg`
  },
  {
    bottom: `Super Metroid`,
    content1: `Super Metroid[a] is a side-scrolling action-adventure video game developed and published by Nintendo for the Super Nintendo Entertainment System video game console. The third installment in the Metroid series, it was released in Japan in March 1994, with other territories later.`,
    content2: `The story takes place after the events of the Game Boy game Metroid II: Return of Samus (1991); it follows the protagonist and playable character Samus Aran, who travels to planet Zebes in an attempt to retrieve an infant Metroid stolen by the Space Pirate leader Ridley.`,
    img: `https://upload.wikimedia.org/wikipedia/en/e/e4/Smetroidbox.jpg`
  }
];

const recordObj = [
  {
    bottom: "Video links",
    title: "Personal records",
    content: "My fastest game completion runs with video proof.  Click below to watch!"
  },
  {
    bottom: "Zelda II: The Adventure of Link 100%",
    time: "1:32:29",
    embed: {
      src: "https://www.youtube.com/embed/xyc0s925txk",
    }
  },
  {
  bottom: "Spider-Man and Venom in Maximum Carnage Any%",
  time: "31:17",
  embed: {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
  }
},
{
  bottom: "StarTropics Any%",
  time: "1:19:24",
  embed: {
    src: "https://youtube.com/embed/hW4QzqXDtYk",
  }
},
  {
    bottom: "Super Metroid Any%",
    time: "1:20:48",
    embed: {
      src: "https://www.youtube.com/embed/CUr722aUuZw",
    }
  }

];

const watchObj = [
  {
    content: `Past streams, races, highlight reels, and bloopers!`,
    title: `Videos`
  },
  {
    bottom: `Speedruns Live IRC channel`,
    link: "http://speedrunslive.com/channel"
  },
  {
    bottom: `Someone else's Twitch.tv channel`,
    embed: {
      src: "https://player.twitch.tv/?channel=lirik",
    }
  },
  {
    bottom: `A hypothetical highlight video on YouTube`,
    embed: {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
    }
  }
]

module.exports = { eventObj, contactObj, recordObj, watchObj, gameObj };