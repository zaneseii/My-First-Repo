package CustomerOrderSystem;
import java.util.ArrayList;

public class Order {

    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    /*  
     * DOCU: Creates a new order with default values (Guest name, not ready, empty item list)  
     * @param {None} - No parameters  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public Order() {
        this.name = "Guest";
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    /*  
     * DOCU: Creates a new order for a specific customer with empty item list  
     * @param {String} name - Name of the customer placing the order  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public Order(String name) {
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    /*  
     * DOCU: Retrieves the name of the customer for this order  
     * @param {None} - No parameters  
     * @returns {String} - Customer name  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public String getName() {
        return name;
    }

    /*  
     * DOCU: Updates the name of the customer for this order  
     * @param {String} name - New customer name  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void setName(String name) {
        this.name = name;
    }

    /*  
     * DOCU: Checks if the order is ready  
     * @param {None} - No parameters  
     * @returns {boolean} - True if order is ready, false otherwise  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public boolean isReady() {
        return ready;
    }

    /*  
     * DOCU: Sets the readiness status of the order  
     * @param {boolean} ready - True if order is ready, false otherwise  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void setReady(boolean ready) {
        this.ready = ready;
    }

    /*  
     * DOCU: Retrieves the list of items in the order  
     * @param {None} - No parameters  
     * @returns {ArrayList<Item>} - List of items  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public ArrayList<Item> getItems() {
        return items;
    }

    /*  
     * DOCU: Updates the list of items in the order  
     * @param {ArrayList<Item>} items - New list of items  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    // METHODS ------------------------------

    /*  
     * DOCU: Adds a new item to the order  
     * @param {Item} item - Item to be added  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void addItem(Item item) {
        this.items.add(item);
    }

    /*  
     * DOCU: Returns a status message based on whether the order is ready  
     * @param {None} - No parameters  
     * @returns {String} - "Your order is ready." if ready, otherwise waiting message  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public String getStatusMessage() {
        return this.ready ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }

    /*  
     * DOCU: Calculates the total price of all items in the order  
     * @param {None} - No parameters  
     * @returns {double} - Total price of the order  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public double getOrderTotal() {
        double sum = 0.0;
        for (Item item : this.items) {
            sum += item.getPrice();
        }
        return sum;
    }

    /*  
     * DOCU: Displays the order details (customer name, item list, and total) to the console  
     * @param {None} - No parameters  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void display() {
        System.out.println("Customer Name: " + this.name);
        for (Item item : this.items) {
            System.out.printf("%s - $%.2f\n", item.getName(), item.getPrice());
        }
        System.out.printf("Total: $%.2f\n\n", getOrderTotal());
    }
}