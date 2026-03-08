package RobotFactory.factory.base;

public class Robot {
    protected int energy;

    /*
     * DOCU: Default constructor that initializes a Robot with a default energy level of 100
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public Robot() {
        this.energy = 100;
    }

    /*
     * DOCU: Overloaded constructor that initializes a Robot with a specified energy level
     * @param {int} energy - The initial energy level to assign to the robot
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public Robot(int energy) {
        this.energy = energy;
    }

    /*
     * DOCU: Displays the robot's current energy level to the console and returns it
     * @returns {int} - The current energy level of the robot
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public int displayEnergy() {
        System.out.println("Current energy level: " + this.energy);
        return this.energy;
    }
}

