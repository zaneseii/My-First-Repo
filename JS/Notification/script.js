const notificationContainer = document.getElementById('notification-card');

/*  
 * DOCU: Creates and displays a temporary notification message with a close button.  
 * @param None  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2026-02-09  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function showNotification() {
	const notification = document.createElement('div');
	notification.textContent = 'You have a new message!';

	const closeButton = document.createElement('button');
	closeButton.type = 'button';
	closeButton.textContent = 'Close';
	closeButton.onclick = () => notification.remove();
	notification.appendChild(closeButton);

	const first = notificationContainer.firstChild;
	first
		? notificationContainer.insertBefore(notification, first)
		: notificationContainer.appendChild(notification);

	setTimeout(() => notification.remove(), 5000);
}
