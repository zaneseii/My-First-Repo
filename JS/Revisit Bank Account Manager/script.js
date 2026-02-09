const balance = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const message = document.getElementById('message');
const historyList = document.getElementById('history-list');
const DAILY_WITHDRAWAL_LIMIT = 500;

let balanceValue = 0;
let withdrawnToday = 0;
let lastWithdrawalDate = getTodayStamp();

/*  
 * DOCU: Converts a number into a formatted currency string.  
 * @param {number} value - The numeric value to be formatted.  
 * @returns {string} - A string formatted as $0.00  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function formatCurrency(value) {
	return `$${value.toFixed(2)}`;
}

/*  
 * DOCU: Resets the daily withdrawal tracker when a new day begins.  
 * @param None  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function resetDailyLimitIfNeeded() {
	const today = getTodayStamp();
	if (today !== lastWithdrawalDate) {
		withdrawnToday = 0;
		lastWithdrawalDate = today;
	}
}

/*  
 * DOCU: Retrieves and parses the user's input amount.  
 * @param None  
 * @returns {number} - The parsed user input, or 0 if invalid.  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function getAmount() {
	return Number.parseFloat(amountInput.value) || 0;
}

/*  
 * DOCU: Adds a transaction entry to the history list.  
 * @param {string} type - The type of transaction ("deposit" or "withdraw").  
 * @param {number} amount - The amount involved in the transaction.  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function addHistoryItem(type, amount) {
	const item = document.createElement('li');
	item.className = `history-item ${type}`;
	item.innerHTML = `<span>${type === 'deposit' ? 'Deposit' : 'Withdraw'}</span><span>${formatCurrency(amount)}</span>`;
	historyList.appendChild(item);
}

/*  
 * DOCU: Handles adding money to the balance and updating the UI.  
 * @param {number} amount - The deposit amount.  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
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
	addHistoryItem('deposit', amount);
	amountInput.value = '';
}

/*  
 * DOCU: Handles withdrawing money, checking balance and daily limits.  
 * @param {number} amount - The withdrawal amount.  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function withdraw(amount) {
	if (amount <= 0) {
		setMessage('Enter a valid amount greater than 0.', true);
		return;
	}

	resetDailyLimitIfNeeded();

	if (withdrawnToday + amount > DAILY_WITHDRAWAL_LIMIT) {
		setMessage(`Daily withdrawal limit is ${formatCurrency(DAILY_WITHDRAWAL_LIMIT)}.`, true);
		return;
	}

	if (amount > balanceValue) {
		setMessage('Insufficient funds for this withdrawal.', true);
		return;
	}

	withdrawnToday = withdrawnToday + amount;
	balanceValue = balanceValue - amount;
	balance.textContent = formatCurrency(balanceValue);
	setMessage(`Withdrew ${formatCurrency(amount)}.`, false);
	addHistoryItem('withdraw', amount);
	amountInput.value = '';
}

balance.textContent = formatCurrency(balanceValue);

/*  
 * DOCU: Attaches click event listeners for deposit and withdraw buttons.  
 * @param None  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
['deposit', 'withdraw'].forEach((id) => {
	document.getElementById(id).addEventListener('click', (e) => {
		e.preventDefault();
		if (id === 'deposit') {
			deposit(getAmount());
		} else {
			withdraw(getAmount());
		}
	});
});

/*  
 * DOCU: Returns today's date in YYYY-MM-DD format.  
 * @param None  
 * @returns {string} - The formatted date string.  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus   
 * Last Updated By: Louis Zane De Jesus   
 */
function getTodayStamp() {
	return new Date().toISOString().slice(0, 10);
}

/*  
 * DOCU: Displays feedback messages to the user.  
 * @param {string} text - Message text to show.  
 * @param {boolean} isError - Whether to display error styling.  
 * @returns None  
 * @throws None  
 *
 * Last Updated: 2025-02-08  
 * Author: Louis Zane De Jesus  
 * Last Updated By: Louis Zane De Jesus   
 */
function setMessage(text, isError) {
	message.textContent = text;
	message.style.color = isError ? '#b00020' : '#1b5e20';
}
