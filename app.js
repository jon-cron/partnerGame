const heroes = [
  {
    name: "flint",
    type: "elf",
    lowDamage: 1,
    healCompanion: 5,
    healSelf: 5,
    health: 50,
    level: 0,
    stamina: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jFVSFSsZ9x7RnSizpmKJntigYtZsMLnbwg&usqp=CAU",
  },
  {
    name: "slate",
    type: "dwarf",
    lowDamage: 5,
    highDamage: 10,
    health: 100,
    level: 0,
    stamina: 10,
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
  let heal = 5;
  let healer = heroes.find((h) => h.name == "flint");
  healer.stamina--;
  if (healer.stamina <= 0) {
    healer.stamina = 0;
  }
  let player = heroes.find((h) => h.type == blank);
  let healPer = Math.round(heal * Math.random() + healer.stamina);
  player.stamina += 1;
  player.health += healPer;
  if (player.stamina >= 10) {
    player.stamina = 10;
  }
  if (player.health >= 100) {
    player.health = 100;
  }
  console.log(player.health);
  bossAttack();
}
function healSelf(blank) {
  let restPlayer = heroes.find((h) => h.name == "slate");
  restPlayer.stamina++;
  if (restPlayer.stamina >= 10) {
    restPlayer.stamina = 10;
  }
  let heal = 5;
  let player = heroes.find((h) => h.type == blank);
  player.stamina--;
  if (player.stamina <= 0) {
    player.stamina = 0;
  }
  let healPer = Math.round(heal * Math.random());
  player.health += healPer;
  if (player.health >= 50) {
    player.health = 50;
  }
  console.log(player.health);
  bossAttack();
}
function weakAttack(blank) {
  let player = heroes.find((h) => h.type == blank);
  let chances = player.stamina + Math.floor(100 * Math.random());
  if (chances > 50) {
    boss.health -= player.lowDamage;
    console.log(
      player.name,
      "did",
      player.lowDamage,
      "dmg.",
      "boss health:",
      boss.health
    );
    player.stamina--;
    if (player.stamina <= 0) {
      player.stamina = 0;
    }
  }
  if (chances < 50) {
    console.log("missed");
    player.stamina--;
    if (player.stamina <= 0) {
      player.stamina = 0;
    }
  }
  bossAttack();
}

function strongAttack(blank) {
  boss.health == 100;
  let player = heroes.find((h) => h.type == blank);
  let chances = Math.floor(100 * Math.random()) + player.stamina;
  player.stamina -= 2;
  if (player.stamina <= 0) {
    player.stamina = 0;
  }
  if (chances > 50) {
    boss.health -= player.highDamage;
    console.log(player.name, "did dam, boss health:", boss.health);
  } else {
    console.log("missed");
  }
  let restPlayer = heroes.find((h) => h.name == "flint");
  restPlayer.stamina++;
  if (restPlayer.stamina >= 10) {
    restPlayer.stamina = 10;
  }
  bossAttack();
}

function bossAttack() {
  drawBoss();
  let heroSlate = heroes.find((h) => h.name == "slate");
  let heroFlint = heroes.find((h) => h.name == "flint");
  if (heroSlate.health > 0 && heroFlint.health > 0) {
    bossAttack1();
  }
  if (heroSlate.health > 0 && heroFlint.health <= 0) {
    bossAttack2();
  }
  if (heroSlate.health <= 0 && heroFlint.health > 0) {
    bossAttack3();
  }
  drawHero();
  killPlayer();
}
function bossAttack1() {
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
}
function bossAttack2() {
  let attack = boss.damage;
  let chance = Math.floor(100 * Math.random());
  // if (chance >= 90) {
  //   heroes.forEach((h) => h.health - attack);
  //   console.log(h.health);
  // }
  if (chance > 30) {
    let hero = heroes.find((h) => h.type == "dwarf");
    hero.health -= attack;
    console.log(hero.name, hero.health);
  }
  if (chance < 30) {
    console.log("boss missed");
  }
}
function bossAttack3() {
  let attack = boss.damage;
  let chance = Math.floor(100 * Math.random());
  // if (chance >= 90) {
  //   heroes.forEach((h) => h.health - attack);
  //   console.log(h.health);
  // }
  if (chance > 30) {
    let hero = heroes.find((h) => h.type == "elf");
    hero.health -= attack;
    console.log(hero.name, hero.health);
  }
  if (chance < 30) {
    console.log("boss missed");
  }
}

function drawBoss() {
  if (boss.health <= 0) {
    window.alert("Congratulations! You beat up a child");
  }
  let template = "";
  if (boss.level >= 0) {
    template += `<div class="card">
    <div class="text-center player-height">
    <h4>${boss.name}</h4>
    <h4>Level:${boss.level}</h4>
    <h4>Hp:${boss.health}</h4>
    <img
    class="img-fluid"
    src="${boss.img}"
    alt=""
    />
    </div>
    <div class="d-flex justify-content-center">
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
      <div class="text-center player-height">
      <h4>${h.name}</h4>
      <h4>Level:${h.level}</h4>
      <h4>Stamina:${h.stamina}</h4>
      <img
      class="img-fluid"
      src="${h.img}"
      alt=""
      />
      </div>
      <div class="d-flex justify-content-center">
      <h4>Hp:${h.health}</h4>
      </div>
      </div>`;
    }
    document.getElementById(`${h.name}`).innerHTML = template;
    template = "";
  });
}

function killPlayer() {
  let flint = heroes.find((h) => h.name == "flint");
  if (flint.health <= 0) {
    document.getElementById("flintButton").classList.add("hidden");
  }
  let slate = heroes.find((h) => h.name == "slate");
  if (slate.health <= 0) {
    document.getElementById("slateButton").classList.add("hidden");
  }
  if (slate.health <= 0 && flint.health <= 0) {
    document.getElementById("dying").play();
    window.alert("You suck");
  }
}
drawHero();
drawBoss();

// function drawHealth() {
//   let slateElm = document.getElementById("slateHealth");
//   let slateHealth = heroes.find((h) => h.name == "slate");
//   slateElm.innerText = slateHealth.health;
//   let flintElm = document.getElementById("flintHealth");
//   let flintHealth = heroes.find((h) => h.name == "flint");
//   flintElm.innerText = flintHealth.health;
// }
