const balance = document.getElementById('balance');
const amountInput = document.getElementById('amount');
const message = document.getElementById('message');
let balanceValue = 0;

const formatCurrency = (value) => `$${value.toFixed(2)}`;
const setMessage = (text, isError) => {
	message.textContent = text;
	message.style.color = isError ? '#b00020' : '#1b5e20';
};

const handleTransaction = (type) => {
	const amount = Number.parseFloat(amountInput.value) || 0;
	if (amount <= 0) return setMessage('Enter a valid amount greater than 0.', true);
	if (type === 'withdraw' && amount > balanceValue) return setMessage('Insufficient funds for this withdrawal.', true);

	balanceValue += type === 'deposit' ? amount : -amount;
	balance.textContent = formatCurrency(balanceValue);
	setMessage(`${type === 'deposit' ? 'Deposited' : 'Withdrew'} ${formatCurrency(amount)}.`, false);
	amountInput.value = '';
};

balance.textContent = formatCurrency(balanceValue);
document.getElementById('deposit').addEventListener('click', (e) => {
	e.preventDefault();
	handleTransaction('deposit');
});
document.getElementById('withdraw').addEventListener('click', (e) => {
	e.preventDefault();
	handleTransaction('withdraw');
});
