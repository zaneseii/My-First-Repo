package LibraryAccountSystem;
import java.util.Random;

public class LibraryAccount {

    private String accountHolder;
    private int borrowedBooks;
    private int accountNumber;

    private static int totalAccounts;
    private static int totalBorrowedBooks;

    private static final int BORROW_LIMIT = 5;

    public LibraryAccount(String accountHolder) {
        this.accountHolder = accountHolder;
        this.borrowedBooks = 0;
        this.accountNumber = generateAccountNumber();
        totalAccounts++;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public int getBorrowedBooks() {
        return borrowedBooks;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public static int getTotalAccounts() {
        return totalAccounts;
    }

    public static int getTotalBorrowedBooks() {
        return totalBorrowedBooks;
    }

    // Generate a random 6-digit account number
    private int generateAccountNumber() {
        Random random = new Random();
        return 100000 + random.nextInt(900000);
    }

    // Borrow a book
    public void borrowBook() {
        if (borrowedBooks >= BORROW_LIMIT) {
            System.out.println("Borrowing limit reached! Return some books before borrowing more.");
            return;
        }
        borrowedBooks++;
        totalBorrowedBooks++;
    }

    // Return a book
    public void returnBook() {
        if (borrowedBooks > 0) {
            borrowedBooks--;
            totalBorrowedBooks--;
            System.out.println(accountHolder + " returned a book. Now has " + borrowedBooks + ".");
        } else {
            System.out.println(accountHolder + " has no books to return.");
        }
    }

    // Display account info
    public void displayAccount() {
        System.out.println(accountHolder + " (Account #" + accountNumber + ") has " + borrowedBooks + " borrowed books.");
    }
}
