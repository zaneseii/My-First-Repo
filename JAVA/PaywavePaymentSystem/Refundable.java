package PaywavePaymentSystem;

public interface Refundable {

    /*
     * DOCU: Processes a refund of the specified amount back to the payment method
     * @param {double} amount - The refund amount to be returned
     * @returns {boolean} - True if the refund was successful, false otherwise
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    boolean processRefund(double amount);

    /*
     * DOCU: Retrieves the payment details of the refundable payment method
     * @returns {String} - A formatted string containing the payment method details
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    String getPaymentDetails();
}
