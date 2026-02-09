// Select DOM elements
const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const taskCard = document.getElementById("task-card");
const notificationArea = document.getElementById("notification-area");

/*  
 * DOCU: Displays a notification message on the screen with auto-remove and close button  
 * @param {string} message - The message to be displayed inside the notification  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function showNotification(message) {
  const note = document.createElement("div");
  const closeBtn = document.createElement("span");
  note.className = "notification";
  note.textContent = message;

  closeBtn.className = "close-note";
  closeBtn.textContent = "×";
  closeBtn.onclick = () => note.remove();

  note.appendChild(closeBtn);
  notificationArea.appendChild(note);

  setTimeout(() => note.remove(), 5000);
}


/*  
 * DOCU: Handles the form submission event to create a new task element,  
 *        append it to the task list, and display notifications  
 * @param {Event} e - The submit event triggered by the form  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
form.onsubmit = (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const taskDiv = document.createElement("div");
  const taskText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  taskDiv.className = "task";
  taskText.textContent = text;
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "×";

  taskText.onclick = () => taskDiv.classList.toggle("completed");

  deleteBtn.onclick = () => {
    taskDiv.remove();
    showNotification(`Task removed: ${text}`);
  };

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteBtn);
  taskCard.appendChild(taskDiv);

  showNotification(`Task added: ${text}`);
  input.value = "";
};
