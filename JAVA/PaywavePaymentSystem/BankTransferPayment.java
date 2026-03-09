package PaywavePaymentSystem;

public class BankTransferPayment implements PaymentMethod, Refundable {

    private String accountNumber;
    private double balance;

    /*
     * DOCU: Constructs a BankTransferPayment with the given account number and balance
     * @param {String} accountNumber - The bank account number
     * @param {double} balance - The initial balance of the bank account
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    public BankTransferPayment(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    /*
     * DOCU: Processes a bank transfer payment by deducting the amount from the balance
     * @param {double} amount - The payment amount to be transferred
     * @returns {boolean} - True if payment succeeded, false if amount is invalid or exceeds balance
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public boolean processPayment(double amount) {
        if (amount <= 0 || amount > balance) {
            System.out.println("Payment failed: Insufficient Bank Transfer balance.");
            return false;
        }
        balance -= amount;
        System.out.println("Payment processed successfully.");
        return true;
    }

    /*
     * DOCU: Processes a refund by adding the amount back to the bank account balance
     * @param {double} amount - The refund amount to be credited back
     * @returns {boolean} - True if the refund was successful
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public boolean processRefund(double amount) {
        balance += amount;
        System.out.println("Refund processed successfully.");
        return true;
    }

    /*
     * DOCU: Returns the bank transfer payment details as a formatted string
     * @returns {String} - A string containing the account number and current balance
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public String getPaymentDetails() {
        return "BankTransfer [accountNumber=" + accountNumber + ", balance=" + balance + "]";
    }
}
