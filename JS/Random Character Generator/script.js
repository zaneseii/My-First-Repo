// Generates a random integer between min and max (inclusive)
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random item from any provided array
function randomFromArray(items) {
	return items[randomInt(0, items.length - 1)];
}

// 1. Class and Ability Pools
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const abilities = [
	"Fireball",
	"Healing Touch",
	"Stealth",
	"Lightning Strike",
	"Power Slash"
];

// 2. Base Character Object (Default Values)
const character = {
	name: "Hero",                    // Default name
	health: 100,                     // Default health
	class: randomFromArray(classes), // Random class
	specialAbility: randomFromArray(abilities), // Random ability

	// 3. Method to randomize health (50–150)
	randomizeHealth() {
		this.health = randomInt(50, 150);
	}
};

// 4. Name Pool for Random Character Generation
const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

// 5. Function: generateCharacter(name)
function generateCharacter(name) {
	const randomName = randomFromArray(names);

	return {
		name: name || randomName,                 // Provided name OR random one
		health: randomInt(50, 150),               // Random health
		class: randomFromArray(classes),          // Random class
		specialAbility: randomFromArray(abilities), // Random ability

		// 6. Battle method
		battle(otherCharacter) {
			const damage = randomInt(5, 20);      // Random attack damage
			const previousHealth = otherCharacter.health;

			// Subtract damage from opponent's health
			otherCharacter.health -= damage;

			// Prevent health from going negative
			if (otherCharacter.health < 0) otherCharacter.health = 0;

			// Battle log
			console.log(
				`Character ${this.name} attacked Character ${otherCharacter.name} ` +
				`with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ` +
				`${previousHealth} to ${otherCharacter.health}.`
			);
		}
	};
}

// 7. Creates an array ("party") of x randomly generated characters.
function generateMultipleCharacters(x) {
	const party = [];

	for (let i = 0; i < x; i++) {
		party.push(generateCharacter());
	}

	return party;
}

// TESTS

//  Test 1: Generate a character (random + named) 
console.log("\n=== Character Test ===");
const randomCharacter = generateCharacter();
console.dir(randomCharacter);

const namedCharacter = generateCharacter("Drake");
console.dir(namedCharacter);

//  Test 2: Battle Simulation 
console.log("\n=== Battle Test ===");
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

console.log(character1);
console.log(character2);
character1.battle(character2);

//  Test 3: Generate Party of 5 
console.log("\n=== Party Test ===");
const party = generateMultipleCharacters(5);
console.dir(party);

