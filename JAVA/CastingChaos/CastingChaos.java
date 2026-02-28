package CastingChaos;
import java.util.ArrayList;

public class CastingChaos {
     public static void main(String[] args) {

        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        for (int i = 0; i < myList.size(); i++) {

            try {
                // This will cause ClassCastException for non-integer objects
                Integer castedValue = (Integer) myList.get(i);
                System.out.println("Value at index " + i + " is: " + castedValue);

            } catch (ClassCastException e) {

                System.out.println("\nError: " + e.getClass().getName());
                System.out.println("At index: " + i);
                System.out.println("Offending value: " + myList.get(i));
            }
        }
    }
}
