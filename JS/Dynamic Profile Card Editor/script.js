/*  
 * DOCU: Updates the displayed profile name using the value from the input field  
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
        document.getElementById('profile-name').textContent = newName;
    }
}



/*  
 * DOCU: Updates the displayed profile bio using the value from the input field  
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
        document.getElementById('profile-bio').textContent = newBio;
    }
}



/*  
 * DOCU: Updates the profile picture using the URL provided in the input field  
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
        document.getElementById('profile-pic').src = newPicUrl;
    }
}



/*  
 * DOCU: Updates the background color of the profile card using the selected input color  
 * @param {void}  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function updateBackgroundColor() {
    document.getElementById('profile-card').style.backgroundColor =
        document.getElementById('background').value;
}
