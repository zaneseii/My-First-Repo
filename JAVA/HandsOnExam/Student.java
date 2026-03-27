package HandsOnExam;

public class Student extends Person implements Display {
    
    private String studentID;
    private String course;

    public Student(String name, int age, String studentID, String course) {
        super(name, age);
        this.studentID = studentID;
        this.course = course;
    }

    public String getStudentID() {
        return studentID;
    }

    public String getCourse() {
        return course;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public void displayInfo() {
        System.out.println("Name       : " + getName());
        System.out.println("Age        : " + getAge());
        System.out.println("Student ID : " + studentID);
        System.out.println("Course     : " + course);
    }
}
