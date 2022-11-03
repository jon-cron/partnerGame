const heroes = [
  {
    name: "slate",
    type: "dwarf",
    lowDamage: 5,
    highDamage: 10,
    health: 100,
  },
  {
    name: "flint",
    type: "elf",
    lowDamage: 5,
    highDamage: 15,
    health: 50,
  },
];

const boss = {
  name: "boss",
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
};

// function weakChance() {
//   let chances = Math.floor(100 * Math.random());
//   if (chances > 40) {
//   }
//   return false;
// }

function weakAttack(blank) {
  boss.health == 100;
  let player = heroes.find((h) => h.name == blank);
  let chances = Math.floor(100 * Math.random());
  if (chances > 40) {
    boss.health -= player.lowDamage;
    console.log(boss.health);
  } else {
    console.log("missed");
  }
}
function strongAttack(blank) {
  boss.health == 100;
  let player = heroes.find((h) => h.name == blank);
  let chances = Math.floor(100 * Math.random());
  if (chances > 60) {
    boss.health -= player.highDamage;
    console.log(boss.health);
  } else {
    console.log("missed");
  }
}
