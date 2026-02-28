package SnackAttack;
import java.util.ArrayList;

public class SnackAttack {
    public static void main(String[] args) {

        ArrayList<String> snacks = new ArrayList<String>();
        snacks.add("Apples");
        snacks.add("Almonds");
        snacks.add("Pretzels");
        snacks.add("Yogurt");

        System.out.println(snacks);

        for (int i = 0; i < snacks.size(); i++) {
            System.out.println("Checking index " + i + ": " + snacks.get(i));
            if (snacks.get(i).charAt(0) == 'A') {
                System.out.println("Removing: " + snacks.get(i));
                snacks.remove(i);    // Causes skipping problem
            }
        }

        System.out.println(snacks + "  <-- Bug: Almonds not removed!\n");

        snacks.clear();
        snacks.add("Apples");
        snacks.add("Almonds");
        snacks.add("Pretzels");
        snacks.add("Yogurt");

        System.out.println(snacks);

        for (int i = 0; i < snacks.size(); i++) {
            System.out.println("Checking index " + i + ": " + snacks.get(i));
            if (snacks.get(i).startsWith("A")) {
                System.out.println("Removing: " + snacks.get(i));
                snacks.remove(i);
                i--; 
            }
        }

        System.out.println(snacks + "  <-- Success!");
    }
}
