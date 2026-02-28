package LibraryAccountSystem;

public class LibraryTest {
    public static void main(String[] args) {

        // Create 3 library accounts
        LibraryAccount user1 = new LibraryAccount("Zane");
        LibraryAccount user2 = new LibraryAccount("Bobby");
        LibraryAccount user3 = new LibraryAccount("Kobe");

        // Borrow Test
        user1.borrowBook();
        user1.borrowBook();
        user2.borrowBook();
        user3.borrowBook();

        // Display accounts
        System.out.println();
        user1.displayAccount();
        user2.displayAccount();
        user3.displayAccount();

        // Return Test
        System.out.println();
        user1.returnBook();
        user2.returnBook();
        user3.returnBook();

        // Display again after returning
        System.out.println();
        user1.displayAccount();
        user2.displayAccount();
        user3.displayAccount();

        // Static Test
        System.out.println();
        System.out.println("Total Accounts: " + LibraryAccount.getTotalAccounts());
        System.out.println("Total Borrowed Books: " + LibraryAccount.getTotalBorrowedBooks());
    }
}
