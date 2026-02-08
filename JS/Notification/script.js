const showButton = document.getElementById('show-notification');
const notificationContainer = document.getElementById('notification-card');

showButton.addEventListener('click', () => {
	const notification = document.createElement('div');
	notification.textContent = 'You have a new message!';

	const closeButton = document.createElement('button');
	closeButton.type = 'button';
	closeButton.textContent = 'Close';
	closeButton.addEventListener('click', () => notification.remove());
	notification.appendChild(closeButton);

	const first = notificationContainer.firstChild;
	first
		? notificationContainer.insertBefore(notification, first)
		: notificationContainer.appendChild(notification);

	setTimeout(() => notification.remove(), 5000);
});
