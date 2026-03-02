package StudentsCourses;
import java.util.ArrayList;

public class TestSchool {
    public static void main(String[] args) {

        // ---- Create Course objects ----
        Course course1 = new Course();
        course1.courseName = "Introduction to Java";
        course1.courseCode = "CS101";
        course1.units = 3;

        Course course2 = new Course();
        course2.courseName = "Database Systems";
        course2.courseCode = "CS202";
        course2.units = 4;

        Course course3 = new Course();
        course3.courseName = "Web Development";
        course3.courseCode = "CS303";
        course3.units = 3;

        Course course4 = new Course();
        course4.courseName = "Mobile App Development";
        course4.courseCode = "CS404";
        course4.units = 4;

        // ---- Create Student objects ----
        Student student1 = new Student();
        student1.name = "Alice";
        student1.age = 19;
        student1.courses = new ArrayList<Course>();
        student1.enrolled = false;

        Student student2 = new Student();
        student2.name = "Bob";
        student2.age = 20;
        student2.courses = new ArrayList<Course>();
        student2.enrolled = false;

        Student student3 = new Student();
        student3.name = "Charlie";
        student3.age = 18;
        student3.courses = new ArrayList<Course>();
        student3.enrolled = false;

        // ---- Enroll students ----
        student1.courses.add(course1); // Java
        student1.courses.add(course3); // Web Dev

        student2.courses.add(course2); // DB
        student2.courses.add(course4); // Mobile Dev

        student3.courses.add(course1);
        student3.courses.add(course2);
        student3.courses.add(course3);
        student3.courses.add(course4);

        /*  Print course lists  */
        System.out.println("\n--- Student Course Lists ---");

        printStudentCourses(student1);
        printStudentCourses(student2);
        printStudentCourses(student3);

        /*  Alice becomes officially enrolled  */
        student1.enrolled = true;
        System.out.println("\n" + student1.name + " is now officially enrolled!");

        /*  Add another course to Alice (Database Systems) */
        student1.courses.add(course2);
        System.out.println("Updated courses for " + student1.name + ":");
        printStudentCourses(student1);

        /*  Change Bob's enrollment status  */
        student2.enrolled = true;
        System.out.println("\n" + student2.name + " enrollment status: " + student2.enrolled);
        printStudentCourses(student2);

        /*  Charlie drops Web Development */
        student3.courses.remove(course3);
        System.out.println("\n" + student3.name + " dropped Web Development.");
        printStudentCourses(student3);
    }

    /*  Helper method to print the student's courses  */
    public static void printStudentCourses(Student s) {
        System.out.println(s.name + " (" + s.age + ") enrolled in:");
        for (Course c : s.courses) {
            System.out.println(" - " + c.courseName + " (" + c.courseCode + ")");
        }
        System.out.println();
    }
}
