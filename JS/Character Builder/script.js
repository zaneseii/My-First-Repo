const armorOptions = document.querySelectorAll(".armor-option");
const lockBtn = document.getElementById("lock-btn");
const confirmation = document.getElementById("confirmation");
const previewImages = {
    helmet: document.getElementById("preview-helmet"),
    chestplate: document.getElementById("preview-chestplate"),
    leggings: document.getElementById("preview-leggings"),
    boots: document.getElementById("preview-boots"),
};

/*  
 * DOCU: Initializes all armor option click listeners and updates preview images based on selection  
 * @param {void}  
 * @returns {void}  
 * @throws {none}  
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */

armorOptions.forEach((option) => {
    option.addEventListener("click", function () {
        const part = option.getAttribute("data-part");

        document.querySelectorAll(`.armor-option[data-part="${part}"]`)
            .forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");

        previewImages[part].src = option.getAttribute("data-image");
        previewImages[part].alt = option.getAttribute("data-name");
        confirmation.classList.add("hidden");
    });
});

/*  
 * DOCU: Validates selected armor pieces and displays confirmation message with selected items  
 * @param {void}  
 * @returns {void}  
 * @throws {none}  
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */

lockBtn.addEventListener("click", function () {
    const selectedPieces = document.querySelectorAll(".armor-option.selected");

    if (selectedPieces.length === 0) {
        confirmation.innerHTML = "<p>Select at least one armor piece first!</p>";
        confirmation.style.background = "rgba(255, 204, 0, 0.15)";
    } else {
        let summary = "Build Locked In!<br>";
        selectedPieces.forEach((piece) => summary += `<span>${piece.getAttribute("data-name")}</span><br>`);
        confirmation.innerHTML = summary;
        confirmation.style.background = "rgba(94, 255, 94, 0.15)";
    }
    confirmation.classList.remove("hidden");
});

/*  
 * DOCU: Adds the 'empty' class to all armor preview image elements at initialization  
 * @param {void}  
 * @returns {void}  
 * @throws {none}  
 *  
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */

Object.values(previewImages).forEach((img) => img.classList.add("empty"));