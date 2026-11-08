const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 40,
    image: "snortleblat.webp",
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
        }
        if (this.health <= 0) {
            this.health = 0;
            message.textContent = `${this.name} has died!`;
        } else {
            message.textContent = `${this.name} was attacked!`;
        }
        displayCharacter();
    },
    levelUp: function() {
        this.level += 1;
        message.textContent = `${this.name} leveled up!`;

        displayCharacter();
    }
};
// Get the HTML elements
const characterName = document.querySelector("#characterName");
const characterClass = document.querySelector("#characterClass");
const characterLevel = document.querySelector("#characterLevel");
const characterHealth = document.querySelector("#characterHealth");
const characterImage = document.querySelector("#characterImage");

const attackButton = document.querySelector("#attackButton");
const levelButton = document.querySelector("#levelButton");
const message = document.querySelector("#message");
// Display the character information
function displayCharacter() {
    characterName.textContent = character.name;
    characterClass.textContent = character.class;
    characterLevel.textContent = character.level;
    characterHealth.textContent = character.health;

    characterImage.setAttribute("src", character.image);
    characterImage.setAttribute("alt", character.name);
}
// Connect the buttons to the object methods
attackButton.addEventListener("click", function() {
    character.attacked();
});
levelButton.addEventListener("click", function() {
    character.levelUp();
});
// Display the character when the page loads
displayCharacter();