package RobotFactory;

import RobotFactory.factory.types.WorkerBot;
import RobotFactory.factory.types.SecurityBot;

public class RobotTest {
    /*
     * DOCU: Entry point of the program that tests WorkerBot and SecurityBot functionality
     * @param {String[]} args - Command line arguments (not used)
     *
     * Last Updated: 2026-03-08
     * Author: LouisZane DeJesus
     * Last Updated By: LouisZane DeJesus
     */
    public static void main(String[] args) {

        /*  WorkerBot Test  */
        System.out.println("===== WorkerBot Test =====");
        WorkerBot worker = new WorkerBot();

        worker.liftCrate();
        worker.liftCrate();

        worker.assemblePart();
        worker.assemblePart();

        worker.chargeBattery();

        System.out.println();
        System.out.print("WorkerBot - ");
        worker.displayEnergy();

        /*  SecurityBot Test  */
        System.out.println();
        System.out.println("===== SecurityBot Test =====");
        SecurityBot guard = new SecurityBot();

        guard.patrol();
        guard.patrol();

        guard.soundAlarm();

        guard.recharge();

        System.out.println();
        System.out.print("SecurityBot - ");
        guard.displayEnergy();
    }
}
