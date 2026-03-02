package LibraryAccountSystem;

public class LibraryTest {
    public static void main(String[] args) {

        /* Create 3 library accounts */
        LibraryAccount user1 = new LibraryAccount("Zane");
        LibraryAccount user2 = new LibraryAccount("Bobby");
        LibraryAccount user3 = new LibraryAccount("Kobe");

        /* Borrow Test */
        user1.borrowBook();
        user1.borrowBook();
        user2.borrowBook();
        user3.borrowBook();

        System.out.println(user1.getAccountHolder() + " (Account #" + user1.getAccountNumber() + ") borrowed " + user1.getBorrowedBooks() + (user1.getBorrowedBooks() == 1 ? " book." : " books."));
        System.out.println(user2.getAccountHolder() + " (Account #" + user2.getAccountNumber() + ") borrowed " + user2.getBorrowedBooks() + (user2.getBorrowedBooks() == 1 ? " book." : " books."));
        System.out.println(user3.getAccountHolder() + " (Account #" + user3.getAccountNumber() + ") borrowed " + user3.getBorrowedBooks() + (user3.getBorrowedBooks() == 1 ? " book." : " books."));

        /* Display accounts */
        System.out.println();
        user1.displayAccount();
        user2.displayAccount();
        user3.displayAccount();

        /* Return Test */
        System.out.println();
        user1.returnBook();
        user2.returnBook();
        user3.returnBook();

        /* Static Test */
        System.out.println();
        System.out.println("Total Accounts: " + LibraryAccount.getTotalAccounts());
        System.out.println("Total Borrowed Books: " + LibraryAccount.getTotalBorrowedBooks());
    }
}
