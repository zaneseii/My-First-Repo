package PaywavePaymentSystem;

public class CreditCardPayment implements PaymentMethod, Refundable {

    private String cardNumber;
    private double creditLimit;
    private double availableCredit;

    public CreditCardPayment(String cardNumber, double creditLimit) {
        this.cardNumber = cardNumber;
        this.creditLimit = creditLimit;
        this.availableCredit = creditLimit;
    }

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

    @Override
    public boolean processRefund(double amount) {
        availableCredit += amount;
        return true;
    }

    @Override
    public String getPaymentDetails() {
        return "CreditCard [cardNumber=" + cardNumber + ", availableCredit=" + availableCredit + "]";
    }
}
