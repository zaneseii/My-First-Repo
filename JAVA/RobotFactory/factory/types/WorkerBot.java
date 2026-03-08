package RobotFactory.factory.types;

import RobotFactory.factory.base.Robot;

public class WorkerBot extends Robot {

    /*
     * DOCU: Simulates the WorkerBot lifting a heavy crate, reducing energy by 15
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void liftCrate() {
        this.energy -= 15;
        System.out.println("WorkerBot lifted a heavy crate. Energy -15.");
    }

    /*
     * DOCU: Recharges the WorkerBot's battery, increasing energy by 20
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void chargeBattery() {
        this.energy += 20;
        System.out.println("WorkerBot is recharging its battery. Energy +20.");
    }

    /*
     * DOCU: Simulates the WorkerBot assembling a part, reducing energy by 10
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void assemblePart() {
        this.energy -= 10;
        System.out.println("WorkerBot assembled a part. Energy -10.");
    }
}
