// Warrior 1: Brogy
let brogy = {
    name: "Brogy",
    hp: 100,
    strength: 10,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

// Warrior 2: Dorry
let dorry = {
    name: "Dorry",
    hp: 100,
    strength: 10,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

for (let round = 1; round <= 10; round++) {
    console.log(`\n=== Round ${round} ===`);

    let brogyDamage = brogy.attack();
    dorry.hp -= brogyDamage;
    if (dorry.hp < 0) dorry.hp = 0;

    console.log(`${brogy.name} attacks ${dorry.name} and does ${brogyDamage} damage!`);
    console.log(`Brogy HP: ${brogy.hp} | Dorry HP: ${dorry.hp}`);

    if (dorry.hp === 0) {
        console.log(`\nBrogy wins by knockout!`);
        break;
    }

    let dorryDamage = dorry.attack();
    brogy.hp -= dorryDamage;
    if (brogy.hp < 0) brogy.hp = 0;

    console.log(`${dorry.name} attacks ${brogy.name} and does ${dorryDamage} damage!`);
    console.log(`Brogy HP: ${brogy.hp} | Dorry HP: ${dorry.hp}`);

    if (brogy.hp === 0) {
        console.log(`\nDorry wins by knockout!`);
        break;
    }
}

if (brogy.hp > 0 && dorry.hp > 0) {
    console.log("\n=== FINAL RESULT ===");
    if (brogy.hp > dorry.hp) {
        console.log(`Brogy WINS the battle!`);
    } else if (dorry.hp > brogy.hp) {
        console.log(`Dorry WINS the battle!`);
    } else {
        console.log("It's a DRAW! Both warriors fall equally!");
    }
}
