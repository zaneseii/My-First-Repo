package CustomerOrderSystem;
import java.util.ArrayList;

public class Order {

    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    public Order() {
        this.name = "Guest";
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public Order(String name) {
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public boolean isReady() {
        return ready;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    // METHODS ------------------------------

    public void addItem(Item item) {
        this.items.add(item);
    }

    public String getStatusMessage() {
        return this.ready ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }

    public double getOrderTotal() {
        double sum = 0.0;
        for (Item item : this.items) {
            sum += item.getPrice();
        }
        return sum;
    }

    public void display() {
        System.out.println("Customer Name: " + this.name);
        for (Item item : this.items) {
            System.out.printf("%s - $%.2f\n", item.getName(), item.getPrice());
        }
        System.out.printf("Total: $%.2f\n\n", getOrderTotal());
    }
}
