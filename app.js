const heroes = [
  {
    name: "flint",
    type: "elf",
    lowDamage: 1,
    healCompanion: 10,
    healSelf: 5,
    health: 50,
    level: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jFVSFSsZ9x7RnSizpmKJntigYtZsMLnbwg&usqp=CAU",
  },
  {
    name: "slate",
    type: "dwarf",
    lowDamage: 5,
    highDamage: 10,
    health: 100,
    level: 0,
    img: "https://images.unsplash.com/photo-1610568781018-995405522539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhdG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const boss = {
  name: "boss",
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 0,
  img: "https://images.unsplash.com/photo-1603652338609-84d94118f52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFkJTIwZ3V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};

function healSlate(blank) {
  let heal = 10;
  let player = heroes.find((h) => h.type == blank);
  let healPer = Math.round(heal * Math.random());
  player.health += healPer;
  console.log(player.health);
  bossAttack();
}
function healSelf(blank) {
  let heal = 5;
  let player = heroes.find((h) => h.type == blank);
  let healPer = Math.round(heal * Math.random());
  player.health += healPer;
  console.log(player.health);
  bossAttack();
}
function weakAttack(blank) {
  let player = heroes.find((h) => h.type == blank);
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
  bossAttack();
}

function strongAttack(blank) {
  boss.health == 100;
  let player = heroes.find((h) => h.type == blank);
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

  drawHero();
  drawBoss();
}

function drawHealth() {
  let slateElm = document.getElementById("slateHealth");
  let slateHealth = heroes.find((h) => h.name == "slate");
  slateElm.innerText = slateHealth.health;
  let flintElm = document.getElementById("flintHealth");
  let flintHealth = heroes.find((h) => h.name == "flint");
  flintElm.innerText = flintHealth.health;
}

function drawBoss() {
  let template = "";
  if (boss.level >= 0) {
    template += `<div class="card">
          <div class="text-center">
          <h4>${boss.name}</h4>
          <img
          class="img-fluid"
          src="${boss.img}"
          alt=""
          />
          </div>
          <div class="d-flex">
          <h4>Hp:${boss.health}</h4>
          <h4>Level:${boss.level}</h4>
          </div>
          </div>`;
  }
  document.getElementById(`${boss.name}`).innerHTML = template;
}

function drawHero() {
  let template = "";
  heroes.forEach((h) => {
    if (h.level >= 0) {
      template += `<div class="card">
          <div class="text-center">
          <h4>${h.name}</h4>
          <img
          class="img-fluid"
          src="${h.img}"
          alt=""
          />
          </div>
          <div class="d-flex">
          <h4>Hp:${h.health}</h4>
          <h4>Level:${h.level}</h4>
          </div>
          </div>`;
    }
    document.getElementById(`${h.name}`).innerHTML = template;
    template = "";
  });
}
drawHero();
drawBoss();
