// Select all DOM elements that will be updated
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profilePic = document.getElementById('profile-pic');
const profileCard = document.getElementById('profile-card');

function updateName() {
    const newName = document.getElementById('name').value.trim();
    if (newName) {
        profileName.textContent = newName; // Update displayed text
    }
}

function updateBio() {
    const newBio = document.getElementById('bio').value.trim();
    if (newBio) {
        profileBio.textContent = newBio; // Update displayed text
    }
}

function updateProfilePic() {
    const newPicUrl = document.getElementById('pic').value.trim();
    if (newPicUrl) {
        profilePic.setAttribute('src', newPicUrl); // Replace the image source
    }
}

function updateBackgroundColor() {
    profileCard.style.backgroundColor = document.getElementById('background').value;
}

// Function to update all profile details
function updateProfile() {
    updateName();
    updateBio();
    updateProfilePic();
    updateBackgroundColor();
}

// Attach event listener to the button (no inline onclick allowed)
document.getElementById('update-profile').addEventListener('click', updateProfile);
