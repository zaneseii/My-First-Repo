package PaywavePaymentSystem;

public class CreditCardPayment implements PaymentMethod, Refundable {

    private String cardNumber;
    private double creditLimit;
    private double availableCredit;

    /*
     * DOCU: Constructs a CreditCardPayment with the given card number and credit limit
     * @param {String} cardNumber - The credit card number
     * @param {double} creditLimit - The maximum credit limit for this card
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    public CreditCardPayment(String cardNumber, double creditLimit) {
        this.cardNumber = cardNumber;
        this.creditLimit = creditLimit;
        this.availableCredit = creditLimit;
    }

    /*
     * DOCU: Processes a credit card payment by deducting the amount from available credit
     * @param {double} amount - The payment amount to be charged
     * @returns {boolean} - True if payment succeeded, false if amount is invalid or exceeds available credit
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public boolean processPayment(double amount) {
        if (amount <= 0 || amount > availableCredit) {
            System.out.println("Payment failed: Insufficient Credit Card balance.");
            return false;
        }
        availableCredit -= amount;
        System.out.println("Payment processed successfully.");
        return true;
    }

    /*
     * DOCU: Processes a refund by adding the amount back to the available credit
     * @param {double} amount - The refund amount to be credited back
     * @returns {boolean} - True if the refund was successful
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public boolean processRefund(double amount) {
        availableCredit += amount;
        return true;
    }

    /*
     * DOCU: Returns the credit card payment details as a formatted string
     * @returns {String} - A string containing the card number and available credit
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    @Override
    public String getPaymentDetails() {
        return "CreditCard [cardNumber=" + cardNumber + ", availableCredit=" + availableCredit + "]";
    }
}
