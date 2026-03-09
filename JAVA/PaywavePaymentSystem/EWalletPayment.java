package PaywavePaymentSystem;

public class EWalletPayment implements PaymentMethod {

    private String walletID;
    private double balance;

    public EWalletPayment(String walletID, double balance) {
        this.walletID = walletID;
        this.balance = balance;
    }

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

    @Override
    public String getPaymentDetails() {
        return "EWallet [walletID=" + walletID + ", balance=" + balance + "]";
    }
}
