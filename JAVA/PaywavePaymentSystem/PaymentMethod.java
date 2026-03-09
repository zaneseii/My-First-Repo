package PaywavePaymentSystem;

public interface PaymentMethod {

    /*
     * DOCU: Processes a payment of the specified amount
     * @param {double} amount - The payment amount to be processed
     * @returns {boolean} - True if the payment was successful, false otherwise
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    boolean processPayment(double amount);

    /*
     * DOCU: Retrieves the payment details of the payment method
     * @returns {String} - A formatted string containing the payment method details
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    String getPaymentDetails();
}
