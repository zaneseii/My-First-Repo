/*  
 * DOCU: Minecraft Character Builder App
 * Allows users to customize a character by selecting armor pieces
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */

// ===== DOM ELEMENT SELECTIONS =====
const armorOptions = document.querySelectorAll(".armor-option");
const lockBtn = document.getElementById("lock-btn");
const confirmation = document.getElementById("confirmation");

// Preview image elements
const previewImages = {
    helmet: document.getElementById("preview-helmet"),
    chestplate: document.getElementById("preview-chestplate"),
    leggings: document.getElementById("preview-leggings"),
    boots: document.getElementById("preview-boots"),
};

/*  
 * DOCU: Handles the selection of an armor piece, updates the preview  
 *       and highlights the selected option  
 * @param {HTMLElement} option - The clicked armor option element  
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function selectArmor(option) {
    const part = option.getAttribute("data-part");
    const image = option.getAttribute("data-image");
    const name = option.getAttribute("data-name");

    // Remove 'selected' class from other options of the same part
    const samePartOptions = document.querySelectorAll(`.armor-option[data-part="${part}"]`);
    samePartOptions.forEach((opt) => opt.classList.remove("selected"));

    // Add 'selected' class to clicked option
    option.classList.add("selected");

    // Update the preview image
    previewImages[part].src = image;
    previewImages[part].alt = name;

    // Hide confirmation if user changes selection after locking
    confirmation.classList.add("hidden");
}

/*  
 * DOCU: Locks in the current character build and displays a confirmation  
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function lockInBuild() {
    const selectedPieces = document.querySelectorAll(".armor-option.selected");

    if (selectedPieces.length === 0) {
        confirmation.classList.remove("hidden");
        confirmation.innerHTML = "<p>Select at least one armor piece first!</p>";
        confirmation.style.background = "rgba(255, 204, 0, 0.15)";
        return;
    }

    // Build summary of selected items
    let summary = "Build Locked In!<br>";
    selectedPieces.forEach((piece) => {
        const name = piece.getAttribute("data-name");
        summary += `<span>${name}</span><br>`;
    });

    confirmation.innerHTML = summary;
    confirmation.classList.remove("hidden");
    confirmation.style.background = "rgba(94, 255, 94, 0.15)";
}

/*  
 * DOCU: Initializes click event listeners on all armor options  
 *       and the lock-in button  
 * @returns {void}
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 */
function initializeEventListeners() {
    // Add click event to each armor option
    armorOptions.forEach((option) => {
        option.addEventListener("click", () => {
            selectArmor(option);
        });
    });

    // Add click event to lock-in button
    lockBtn.addEventListener("click", lockInBuild);
}

// ===== INITIALIZATION =====
// Mark all preview images as empty initially
Object.values(previewImages).forEach((img) => img.classList.add("empty"));

// Start the app
initializeEventListeners();
