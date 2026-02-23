package PizzaPalace;

public class PizzaPalace {
    public static void main(String[] args) {

        String welcomeMessage = "Welcome to Pizza Palace!";
        String pendingMessage = "Your order is being prepared.";
        String readyMessage = "Your order is ready!";
        String displayTotalMessage = "Your total is: $";
        
        double pepperoniPizza = 8.99;
        double veggiePizza = 9.49;
        double cheesePizza = 7.99;
        
        String anna = "Anna";
        String mark = "Mark";
        String lisa = "Lisa";
        String kevin = "Kevin";
        
        boolean isOrderReadyAnna = false;
        boolean isOrderReadyMark = true;
        boolean isOrderReadyLisa = true;
        boolean isOrderReadyKevin = false;
        
        System.out.println(welcomeMessage + " " + anna + "!");
        if (isOrderReadyAnna) {
            System.out.println(readyMessage);
        } else {
            System.out.println(pendingMessage);
        }
        System.out.println();
        
        double markTotal = 2 * cheesePizza;
        System.out.println(mark + "'s order:");
        System.out.println(displayTotalMessage + markTotal);
        if (isOrderReadyMark) {
            System.out.println(readyMessage);
        }
        System.out.println();
        
        System.out.println(lisa + "'s order:");
        if (isOrderReadyLisa) {
            System.out.println(readyMessage);
            System.out.println(displayTotalMessage + veggiePizza);
        } else {
            System.out.println(pendingMessage);
        }
        System.out.println();
        
        double difference = veggiePizza - cheesePizza;
        System.out.println(kevin + "'s order correction:");
        System.out.println("Difference to pay: $" + difference);
    }
}
