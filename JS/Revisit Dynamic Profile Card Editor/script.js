// Select all DOM elements that will be updated
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profilePic = document.getElementById('profile-pic');
const profileCard = document.getElementById('profile-card');

/*  
 * DOCU: Updates the displayed profile name using the value from the name input field  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateName() {
    const newName = document.getElementById('name').value.trim();
    if (newName) {
        profileName.textContent = newName;
    }
}

/*  
 * DOCU: Updates the displayed profile bio using the value from the bio input field  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateBio() {
    const newBio = document.getElementById('bio').value.trim();
    if (newBio) {
        profileBio.textContent = newBio;
    }
}

/*  
 * DOCU: Updates the profile picture by replacing its image source with the provided URL  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateProfilePic() {
    const newPicUrl = document.getElementById('pic').value.trim();
    if (newPicUrl) {
        profilePic.setAttribute('src', newPicUrl);
    }
}

/*  
 * DOCU: Updates the background color of the profile card using the selected color value  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateBackgroundColor() {
    profileCard.style.backgroundColor =
        document.getElementById('background').value;
}

/*  
 * DOCU: Updates all profile details by calling each individual update function  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateProfile() {
    updateName();
    updateBio();
    updateProfilePic();
    updateBackgroundColor();
}

// Attach event listener to the button
document.getElementById('update-profile').addEventListener('click', updateProfile);
