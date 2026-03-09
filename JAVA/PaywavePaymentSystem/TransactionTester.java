package PaywavePaymentSystem;

import java.util.ArrayList;

public class TransactionTester {

    public static void main(String[] args) {
        ArrayList<PaymentMethod> payments = new ArrayList<>();
        payments.add(new CreditCardPayment("CC1234", 4000));
        payments.add(new EWalletPayment("EW9876", 1200));
        payments.add(new BankTransferPayment("BA1122", 8000));

        for (PaymentMethod method : payments) {
            method.processPayment(1000);
            System.out.println(method.getPaymentDetails());
        }
    }
}
