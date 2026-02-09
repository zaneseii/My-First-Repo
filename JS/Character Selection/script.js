const characters = document.querySelectorAll(".character-card");
const charImage = document.getElementById("display-image");
const charName = document.getElementById("display-name");
const charHealth = document.getElementById("display-health");
const charAttack = document.getElementById("display-attack");
const charSpeed = document.getElementById("display-speed");
const charDesc = document.getElementById("display-description");

characters.forEach((char) => {
    char.addEventListener("click", function () {
        characters.forEach(c => c.classList.remove("selected"));
        char.classList.add("selected");

        charImage.src = char.getAttribute("data-image");
        charName.textContent = char.getAttribute("data-name");
        charHealth.textContent = char.getAttribute("data-health");
        charAttack.textContent = char.getAttribute("data-attack");
        charSpeed.textContent = char.getAttribute("data-speed");
        charDesc.textContent = char.getAttribute("data-description");
    });
});