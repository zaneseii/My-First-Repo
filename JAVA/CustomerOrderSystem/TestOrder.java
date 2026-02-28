package CustomerOrderSystem;

public class TestOrder {
    public static void main(String[] args) {

        Item coffee = new Item("Cheesecake", 3.00);
        Item latte = new Item("Red Velvet", 4.25);
        Item muffin = new Item("Garlic Bread", 2.50);
        Item tea = new Item("Cinnamon Roll", 2.75);
        Item cookie = new Item("Chocolate Chip Cookie", 1.75);

        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Zane");
        Order order4 = new Order("Bron");
        Order order5 = new Order("Kobe");

        order1.addItem(coffee);
        order1.addItem(muffin);

        order2.addItem(latte);
        order2.addItem(cookie);

        order3.addItem(tea);
        order3.addItem(muffin);

        order4.addItem(latte);
        order4.addItem(coffee);

        order5.addItem(cookie);
        order5.addItem(tea);

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
