package RobotFactory.factory.types;

import RobotFactory.factory.base.Robot;

public class SecurityBot extends Robot {

    /*
     * DOCU: Constructor that initializes a SecurityBot with a default energy level of 200
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public SecurityBot() {
        super(200);
    }

    /*
     * DOCU: Simulates the SecurityBot patrolling the area, reducing energy by 20
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void patrol() {
        this.energy -= 20;
        System.out.println("SecurityBot is patrolling the area. Energy -20.");
    }

    /*
     * DOCU: Triggers the security alarm, reducing energy by 30
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void soundAlarm() {
        this.energy -= 30;
        System.out.println("SecurityBot triggered the alarm! Energy -30.");
    }

    /*
     * DOCU: Recharges the SecurityBot's power cells, increasing energy by 40
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public void recharge() {
        this.energy += 40;
        System.out.println("SecurityBot has recharged its power cells. Energy +40.");
    }
}
