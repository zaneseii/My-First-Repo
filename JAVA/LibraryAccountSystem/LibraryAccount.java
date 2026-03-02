package LibraryAccountSystem;
import java.util.Random;

public class LibraryAccount {

    private String accountHolder;
    private int borrowedBooks;
    private int accountNumber;

    private static int totalAccounts;
    private static int totalBorrowedBooks;

    private static final int BORROW_LIMIT = 5;

    /*  
     * DOCU: Creates a new library account for a user with initial setup  
     * @param {String} accountHolder - Name of the account holder  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public LibraryAccount(String accountHolder) {
        this.accountHolder = accountHolder;
        this.borrowedBooks = 0;
        this.accountNumber = generateAccountNumber();
        totalAccounts++;
    }

    /*  
     * DOCU: Retrieves the account holder's name  
     * @param {None} - No parameters  
     * @returns {String} - Name of the account holder  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public String getAccountHolder() {
        return accountHolder;
    }

    /*  
     * DOCU: Retrieves the number of books currently borrowed by this account  
     * @param {None} - No parameters  
     * @returns {int} - Number of borrowed books  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public int getBorrowedBooks() {
        return borrowedBooks;
    }

    /*  
     * DOCU: Retrieves the account number of this account  
     * @param {None} - No parameters  
     * @returns {int} - Account number  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public int getAccountNumber() {
        return accountNumber;
    }

    /*  
     * DOCU: Retrieves the total number of library accounts created  
     * @param {None} - No parameters  
     * @returns {int} - Total accounts in the system  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public static int getTotalAccounts() {
        return totalAccounts;
    }

    /*  
     * DOCU: Retrieves the total number of borrowed books across all accounts  
     * @param {None} - No parameters  
     * @returns {int} - Total borrowed books  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public static int getTotalBorrowedBooks() {
        return totalBorrowedBooks;
    }

    /*  
     * DOCU: Generates a random 6-digit account number  
     * @param {None} - No parameters  
     * @returns {int} - Randomly generated 6-digit account number  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    private int generateAccountNumber() {
        Random random = new Random();
        return 100000 + random.nextInt(900000);
    }

    /*  
     * DOCU: Borrows a book if under the borrow limit and updates totals  
     * @param {None} - No parameters  
     * @returns {void} - Does not return a value  
     * @throws {None} - Prints a message if borrow limit reached  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void borrowBook() {
        if (borrowedBooks >= BORROW_LIMIT) {
            System.out.println("Borrowing limit reached! Return some books before borrowing more.");
            return;
        }
        borrowedBooks++;
        totalBorrowedBooks++;
    }

    /*  
     * DOCU: Returns a book if any are borrowed and updates totals  
     * @param {None} - No parameters  
     * @returns {void} - Does not return a value  
     * @throws {None} - Prints a message if no books to return  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void returnBook() {
        if (borrowedBooks > 0) {
            borrowedBooks--;
            totalBorrowedBooks--;
            System.out.println(accountHolder + " returned a book. Now has " + borrowedBooks + ".");
        } else {
            System.out.println(accountHolder + " has no books to return.");
        }
    }

    /*  
     * DOCU: Displays account information including holder name and borrowed books count  
     * @param {None} - No parameters  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void displayAccount() {
        System.out.println(accountHolder + " has " + borrowedBooks + " borrowed books.");
    }
}