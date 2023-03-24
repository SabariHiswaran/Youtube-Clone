

var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme'
    ,'Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head',
    'Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];


export function generate() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

const characters = [
"You won't be able to do it.",
  "Mary went over to the United States.",
  "It has cooled off.",
  "What subjects do you like the best?",
  "Are you here for work?",
  "She hated him so much.",
  "Can I call you right back?",
  "I think it's OK. I also have two credit cards.",
  "Should I reply to his letter?",
  "That's a bright idea.",
  "Let me see that.",
  "That's too bad.",
  "I expect that he will help us.",
  "I tried that also and it didn't work.",
  "I am not always at home on Sundays.",
  "Hunting is prohibited in national parks.",
  "I wonder if they'll get divorced.",
  "They started working right away.",
]

export function makeid(){
  const charactersLength = characters.length;
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}


// export function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }
