/*  
 * DOCU: Character Selection System - Clash Royale Style
 * Allows users to select characters and view their stats dynamically
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */

// ===== DOM ELEMENT SELECTIONS =====
const characterCards = document.querySelectorAll('.character-card');
const displayName = document.getElementById('display-name');
const displayImage = document.getElementById('display-image');
const displayHealth = document.getElementById('display-health');
const displayAttack = document.getElementById('display-attack');
const displaySpeed = document.getElementById('display-speed');
const displayDescription = document.getElementById('display-description');

let currentlySelected = null;

/*  
 * DOCU: Updates the main display area with selected character's information
 * @param {HTMLElement} characterCard - The character card element that was clicked
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function selectCharacter(characterCard) {
    // Remove 'selected' class from previously selected character
    if (currentlySelected) {
        currentlySelected.classList.remove('selected');
    }

    // Add 'selected' class to the clicked character
    characterCard.classList.add('selected');
    currentlySelected = characterCard;

    // Get character data from data attributes
    const name = characterCard.getAttribute('data-name');
    const health = characterCard.getAttribute('data-health');
    const attack = characterCard.getAttribute('data-attack');
    const speed = characterCard.getAttribute('data-speed');
    const description = characterCard.getAttribute('data-description');
    const image = characterCard.getAttribute('data-image');

    // Update the display area with character information
    updateDisplay(name, health, attack, speed, description, image);
}

/*  
 * DOCU: Updates the main display card with character details
 * @param {string} name - Character name
 * @param {string} health - Character health points
 * @param {string} attack - Character attack damage
 * @param {string} speed - Character movement speed
 * @param {string} description - Character description
 * @param {string} image - Character image URL
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function updateDisplay(name, health, attack, speed, description, image) {
    // Update all display elements with smooth transition
    displayName.textContent = name;
    displayHealth.textContent = health;
    displayAttack.textContent = attack;
    displaySpeed.textContent = speed;
    displayDescription.textContent = description;
    
    // Update image with fade effect
    displayImage.style.opacity = '0';
    setTimeout(() => {
        displayImage.src = image;
        displayImage.alt = name;
        displayImage.style.opacity = '1';
    }, 200);
}

/*  
 * DOCU: Adds click event listeners to all character cards
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function initializeEventListeners() {
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            selectCharacter(card);
        });

        // Optional: Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                selectCharacter(card);
            }
        });
    });
}

// ===== INITIALIZATION =====
// Initialize event listeners when the page loads
initializeEventListeners();

// Optional: Auto-select first character on load
if (characterCards.length > 0) {
    selectCharacter(characterCards[0]);
}
