const heroes = [
  {
    name: "slate",
    type: "dwarf",
    lowDamage: 5,
    highDamage: 10,
    health: 100,
    level: 0,
  },
  {
    name: "flint",
    type: "elf",
    lowDamage: 1,
    healCompanion: 10,
    healSelf: 5,
    health: 50,
    level: 0,
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

function healSlate() {
  let heal = 10;
  let player = heroes.find((h) => h.name == "slate");
  let healPer = Math.round(heal * Math.random());
  player.health += healPer;
  console.log(player.health);
  bossAttack();
}
function healSelf() {
  let heal = 5;
  let player = heroes.find((h) => h.name == "flint");
  let healPer = Math.round(heal * Math.random());
  player.health += healPer;
  console.log(player.health);
  bossAttack();
}
function weakAttack(blank) {
  let player = heroes.find((h) => h.name == blank);
  let chances = Math.floor(100 * Math.random());
  if (chances > 40) {
    boss.health -= player.lowDamage;
    console.log(
      player.name,
      "did",
      player.lowDamage,
      "dmg.",
      "boss health:",
      boss.health
    );
  } else {
    console.log("missed");
  }
  drawBossHealth();
  bossAttack();
}

function strongAttack(blank) {
  boss.health == 100;
  let player = heroes.find((h) => h.name == blank);
  let chances = Math.floor(100 * Math.random());
  if (chances > 60) {
    boss.health -= player.highDamage;
    console.log(player.name, "did dam, boss health:", boss.health);
  } else {
    console.log("missed");
  }
  bossAttack();
}

function bossAttack() {
  let attack = boss.damage;
  let chance = Math.floor(100 * Math.random());
  // if (chance >= 90) {
  //   heroes.forEach((h) => h.health - attack);
  //   console.log(h.health);
  // }
  if (chance > 70) {
    let hero = heroes.find((h) => h.type == "elf");
    hero.health -= attack;
    console.log(hero.name, hero.health);
  }
  if (chance <= 70 && chance > 30) {
    let hero = heroes.find((h) => h.type == "dwarf");
    hero.health -= attack;
    console.log(hero.name, hero.health);
  }
  if (chance <= 30) {
    console.log("boss missed");
  }

  drawHealth();
}

function drawHealth() {
  let slateElm = document.getElementById("slateHealth");
  let slateHealth = heroes.find((h) => h.name == "slate");
  slateElm.innerText = slateHealth.health;
  let flintElm = document.getElementById("flintHealth");
  let flintHealth = heroes.find((h) => h.name == "flint");
  flintElm.innerText = flintHealth.health;
}
function drawBossHealth() {
  boss.health = document.getElementById("progressBar");
}
// function drawBoss() {}

function drawHeroes() {}
