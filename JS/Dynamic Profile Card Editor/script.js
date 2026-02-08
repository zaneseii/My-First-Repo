function updateName() {
    const newName = document.getElementById('name').value.trim();
    if (newName) {
        document.getElementById('profile-name').textContent = newName;
    }
}

function updateBio() {
    const newBio = document.getElementById('bio').value.trim();
    if (newBio) {
        document.getElementById('profile-bio').textContent = newBio;
    }
}

function updateProfilePic() {
    const newPicUrl = document.getElementById('pic').value.trim();
    if (newPicUrl) {
        document.getElementById('profile-pic').src = newPicUrl;
    }
}

function updateBackgroundColor() {
    document.getElementById('profile-card').style.backgroundColor = document.getElementById('background').value;
}


