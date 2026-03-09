package PaywavePaymentSystem;

public class BankTransferPayment implements PaymentMethod, Refundable {

    private String accountNumber;
    private double balance;

    public BankTransferPayment(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

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

    @Override
    public boolean processRefund(double amount) {
        balance += amount;
        return true;
    }

    @Override
    public String getPaymentDetails() {
        return "BankTransfer [accountNumber=" + accountNumber + ", balance=" + balance + "]";
    }
}
