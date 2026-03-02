package CustomerOrderSystem;

public class TestOrder {
    public static void main(String[] args) {

        Item cheesecake = new Item("Cheesecake", 3.00);
        Item cake = new Item("Red Velvet", 4.25);
        Item bread = new Item("Garlic Bread", 2.50);
        Item cinnamon = new Item("Cinnamon Roll", 2.75);
        Item cookie = new Item("Chocolate Chip Cookie", 1.75);

        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Zane");
        Order order4 = new Order("Bron");
        Order order5 = new Order("Kobe");

        order1.addItem(cheesecake);
        order1.addItem(bread);

        order2.addItem(cake);
        order2.addItem(cookie);

        order3.addItem(cinnamon);
        order3.addItem(bread);

        order4.addItem(cake);
        order4.addItem(cheesecake);

        order5.addItem(cookie);
        order5.addItem(cinnamon);

        order3.setReady(true);
        System.out.println(order3.getName() + ": " + order3.getStatusMessage());

        order1.setReady(false);
        System.out.println(order1.getName() + ": " + order1.getStatusMessage());

        System.out.println("Order 1 Total: $" + order1.getOrderTotal());
        System.out.println("Order 4 Total: $" + order4.getOrderTotal());
        System.out.println();

        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}
