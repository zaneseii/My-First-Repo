const balance = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const message = document.getElementById('message');
let balanceValue = 0;

/*  
 * DOCU: Formats a numeric value into USD currency format  
 * @param {number} value - The number to be formatted  
 * @returns {string} - The formatted currency string  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
const formatCurrency = (value) => `$${value.toFixed(2)}`;

/*  
 * DOCU: Displays a message to the user, with optional error styling  
 * @param {string} text - The message to display  
 * @param {boolean} isError - Whether the message indicates an error  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
const setMessage = (text, isError) => {
	message.textContent = text;
	message.style.color = isError ? '#b00020' : '#1b5e20';
};

/*  
 * DOCU: Retrieves the numeric value entered in the amount input field  
 * @param {void}  
 * @returns {number} - Parsed numeric value or 0 if invalid  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
const getAmount = () => Number.parseFloat(amountInput.value) || 0;

/*  
 * DOCU: Adds the specified amount to the account balance and updates the display  
 * @param {number} amount - Amount to deposit  
 * @returns {void}  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function deposit(amount) {
	if (amount <= 0) {
		setMessage('Enter a valid amount greater than 0.', true);
		return;
	}

	balanceValue = balanceValue + amount;
	balance.textContent = formatCurrency(balanceValue);
	setMessage(`Deposited ${formatCurrency(amount)}.`, false);
	amountInput.value = '';
};

/*  
 * DOCU: Deducts the specified amount from the balance if valid and updates the display  
 * @param {number} amount - Amount to withdraw  
 * @returns {void}  
 * @throws {Error} - Insufficient funds or invalid amount (handled via UI message)  
 *  
 * Last Updated: 2026-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus  
 */
function withdraw(amount) {
	if (amount <= 0) {
		setMessage('Enter a valid amount greater than 0.', true);
		return;
	}
	if (amount > balanceValue) {
		setMessage('Insufficient funds for this withdrawal.', true);
		return;
	}

	balanceValue = balanceValue - amount;
	balance.textContent = formatCurrency(balanceValue);
	setMessage(`Withdrew ${formatCurrency(amount)}.`, false);
	amountInput.value = '';
};

// Initialize UI
balance.textContent = formatCurrency(balanceValue);

document.getElementById('deposit').addEventListener('click', (e) => {
	e.preventDefault();
	deposit(getAmount());
});

document.getElementById('withdraw').addEventListener('click', (e) => {
	e.preventDefault();
	withdraw(getAmount());
});
