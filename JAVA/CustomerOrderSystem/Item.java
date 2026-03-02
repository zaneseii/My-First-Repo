package CustomerOrderSystem;

public class Item {
    private String name;
    private double price;

    /*  
     * DOCU: Constructs a new item with a name and price  
     * @param {String} name - Name of the item  
     * @param {double} price - Price of the item  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    /*  
     * DOCU: Retrieves the name of the item  
     * @param {None} - No parameters  
     * @returns {String} - The name of the item  
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
     * DOCU: Sets or updates the name of the item  
     * @param {String} name - New name for the item  
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
     * DOCU: Retrieves the price of the item  
     * @param {None} - No parameters  
     * @returns {double} - The price of the item  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public double getPrice() {
        return price;
    }

    /*  
     * DOCU: Sets or updates the price of the item  
     * @param {double} price - New price for the item  
     * @returns {void} - Does not return a value  
     * @throws {None} - No exceptions thrown  
     *  
     * Last Updated: 2026-03-02  
     * Author: Louis Zane De Jesus
     * Last Updated By: Louis Zane De Jesus   
     */
    public void setPrice(double price) {
        this.price = price;
    }
}