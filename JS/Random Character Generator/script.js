/*  
 * DOCU: Generates a random integer between the given min and max values (inclusive)  
 * @param {number} min - The minimum integer value  
 * @param {number} max - The maximum integer value  
 * @returns {number} - A randomly generated integer between min and max  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



/*  
 * DOCU: Returns a random element from the provided array  
 * @param {Array} items - The array to pick a random value from  
 * @returns {any} - A randomly selected item from the array  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
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



// 2. Base Character Object
const character = {
	name: "Hero",
	health: 100,
	class: randomFromArray(classes),
	specialAbility: randomFromArray(abilities),

	/*  
	 * DOCU: Randomizes the character's health within the range of 50–150  
	 * @returns {void}  
	 *  
	 * Last Updated: 2026-02-08  
	 * Author: Louis Zane De Jesus  
	 * Last Updated By: Louis Zane De Jesus  
	 */
	randomizeHealth() {
		this.health = randomInt(50, 150);
	}
};



// 4. Name Pool
const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];



/*  
 * DOCU: Generates a new character with optional provided name and randomized attributes  
 * @param {string} name - Optional name for the character  
 * @returns {object} - A fully generated character object  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function generateCharacter(name) {
	const randomName = randomFromArray(names);

	return {
		name: name || randomName,
		health: randomInt(50, 150),
		class: randomFromArray(classes),
		specialAbility: randomFromArray(abilities),

		/*  
		 * DOCU: Executes a battle action where this character attacks another character  
		 * @param {object} otherCharacter - The character being attacked  
		 * @returns {void}  
		 *  
		 * Last Updated: 2026-02-08  
		 * Author: Louis Zane De Jesus  
		 * Last Updated By: Louis Zane De Jesus  
		 */
		battle(otherCharacter) {
			const damage = randomInt(5, 20);
			const previousHealth = otherCharacter.health;

			otherCharacter.health -= damage;
			if (otherCharacter.health < 0) otherCharacter.health = 0;

			console.log(
				`Character ${this.name} attacked Character ${otherCharacter.name} ` +
				`with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ` +
				`${previousHealth} to ${otherCharacter.health}.`
			);
		}
	};
}



/*  
 * DOCU: Generates an array of randomly created characters  
 * @param {number} x - Number of characters to generate  
 * @returns {Array} - An array containing x generated character objects  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function generateMultipleCharacters(x) {
	const party = [];

	for (let i = 0; i < x; i++) {
		party.push(generateCharacter());
	}

	return party;
}



// TESTS

console.log("\n=== Character Test ===");
const randomCharacter = generateCharacter();
console.dir(randomCharacter);

const namedCharacter = generateCharacter("Drake");
console.dir(namedCharacter);


console.log("\n=== Battle Test ===");
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

console.log(character1);
console.log(character2);
character1.battle(character2);


console.log("\n=== Party Test ===");
const party = generateMultipleCharacters(5);
console.dir(party);
