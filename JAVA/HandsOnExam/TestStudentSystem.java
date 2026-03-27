package HandsOnExam;
import java.util.Scanner;

public class TestStudentSystem {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("----- Student Information System -----\n\n"); 

        System.out.print("Enter student name : ");
        String name = scanner.nextLine();

        System.out.print("Enter student age  : ");
        int age = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter student ID   : ");
        String studentID = scanner.nextLine();

        System.out.print("Enter course       : ");
        String course = scanner.nextLine(); 

        Student student = new Student(name, age, studentID, course);

        System.out.print("\n----- Student Information -----\n\n");
        student.displayInfo();
        scanner.close();
    }
}
