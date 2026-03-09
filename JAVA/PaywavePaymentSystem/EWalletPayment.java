package PaywavePaymentSystem;

public class EWalletPayment implements PaymentMethod {

    private String walletID;
    private double balance;

    /*
     * DOCU: Constructs an EWalletPayment with the given wallet ID and initial balance
     * @param {String} walletID - The unique identifier for the e-wallet
     * @param {double} balance - The initial balance of the e-wallet
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    public EWalletPayment(String walletID, double balance) {
        this.walletID = walletID;
        this.balance = balance;
    }

    /*
     * DOCU: Processes an e-wallet payment by deducting the amount from the balance
     * @param {double} amount - The payment amount to be deducted
     * @returns {boolean} - True if payment succeeded, false if amount is invalid or exceeds balance
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public boolean processPayment(double amount) {
        if (amount <= 0 || amount > balance) {
            System.out.println("Payment failed: Insufficient E-Wallet balance.");
            return false;
        }
        balance -= amount;
        System.out.println("Payment processed successfully.");
        return true;
    }

    /*
     * DOCU: Returns the e-wallet payment details as a formatted string
     * @returns {String} - A string containing the wallet ID and current balance
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public String getPaymentDetails() {
        return "EWallet [walletID=" + walletID + ", balance=" + balance + "]";
    }
}
