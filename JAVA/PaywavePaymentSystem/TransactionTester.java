package PaywavePaymentSystem;

import java.util.ArrayList;

public class TransactionTester {

    /*
     * DOCU: Entry point that demonstrates polymorphic payment processing across multiple payment types
     * @param {String[]} args - Command line arguments (not used)
     *
     * Last Updated: 2026-03-09
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus
     */
    public static void main(String[] args) {
        ArrayList<PaymentMethod> payments = new ArrayList<>();
        payments.add(new CreditCardPayment("CC1234", 1000));
        payments.add(new EWalletPayment("EW9876", 200));
        payments.add(new BankTransferPayment("BA1122", 8000));

        for (PaymentMethod method : payments) {
            method.processPayment(1000);
            System.out.println(method.getPaymentDetails());
        }
    }
}
