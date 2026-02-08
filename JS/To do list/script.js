const form = document.querySelector("form");
const input = form.querySelector("input[type='text']");
const taskCard = document.getElementById("task-card");
const notificationArea = document.createElement("div");
notificationArea.id = "notifications";
document.body.appendChild(notificationArea);

const showNotification = (message) => {
  const note = document.createElement("div");
  const closeBtn = document.createElement("span");
  note.className = "notification";
  note.textContent = message;
  closeBtn.className = "close-note";
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => note.remove());
  note.appendChild(closeBtn);
  notificationArea.appendChild(note);
  setTimeout(() => note.remove(), 5000);
};

form.addEventListener("submit", (e) => {
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

  taskText.addEventListener("click", () => taskDiv.classList.toggle("completed"));
  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
    showNotification(`Task removed: ${text}`);
  });

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteBtn);
  taskCard.appendChild(taskDiv);
  showNotification(`Task added: ${text}`);
  input.value = "";
});
