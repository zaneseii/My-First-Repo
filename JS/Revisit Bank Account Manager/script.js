const balance = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const message = document.getElementById('message');
const historyList = document.getElementById('history-list');
const DAILY_WITHDRAWAL_LIMIT = 500;

let balanceValue = 0;
let withdrawnToday = 0;
let lastWithdrawalDate = getTodayStamp();

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const resetDailyLimitIfNeeded = () => {
	const today = getTodayStamp();
	if (today !== lastWithdrawalDate) {
		withdrawnToday = 0;
		lastWithdrawalDate = today;
	}
};

const handleTransaction = (type) => {
	const amount = Number.parseFloat(amountInput.value) || 0;
	if (amount <= 0) return setMessage('Enter a valid amount greater than 0.', true);
	if (type === 'withdraw') {
		resetDailyLimitIfNeeded();
		if (withdrawnToday + amount > DAILY_WITHDRAWAL_LIMIT) {
			return setMessage(`Daily withdrawal limit is ${formatCurrency(DAILY_WITHDRAWAL_LIMIT)}.`, true);
		}
		if (amount > balanceValue) return setMessage('Insufficient funds for this withdrawal.', true);
		withdrawnToday += amount;
	}
	balanceValue += type === 'deposit' ? amount : -amount;
	balance.textContent = formatCurrency(balanceValue);
	setMessage(`${type === 'deposit' ? 'Deposited' : 'Withdrew'} ${formatCurrency(amount)}.`, false);

	const item = document.createElement('li');
	item.className = `history-item ${type}`;
	item.innerHTML = `<span>${type === 'deposit' ? 'Deposit' : 'Withdraw'}</span><span>${formatCurrency(amount)}</span>`;
	historyList.appendChild(item);
	amountInput.value = '';
};

balance.textContent = formatCurrency(balanceValue);
['deposit', 'withdraw'].forEach((id) => {
	document.getElementById(id).addEventListener('click', (e) => {
		e.preventDefault();
		handleTransaction(id);
	});
});

function getTodayStamp() {
	return new Date().toISOString().slice(0, 10);
}

function setMessage(text, isError) {
	message.textContent = text;
	message.style.color = isError ? '#b00020' : '#1b5e20';
}
