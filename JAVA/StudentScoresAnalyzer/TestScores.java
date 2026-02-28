package StudentScoresAnalyzer;
import java.util.Arrays;
import java.util.Scanner;

public class TestScores {
    public static void main(String[] args) {

        System.out.println("----- Student Scores Analyzer -----");

        ScoreUtil scoreUtil = new ScoreUtil();
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("\nHow many students? ");
        int numStudents = scanner.nextInt();
        
        // Create array and get scores from user
        int[] scores = new int[numStudents];
        System.out.println("Enter " + numStudents + " scores:");
        for (int i = 0; i < numStudents; i++) {
            System.out.print("Score " + (i + 1) + ": ");
            scores[i] = scanner.nextInt();
        }
        
        // Sort scores in ascending order
        Arrays.sort(scores);
        
        int passingScore = 75;

        System.out.println("Scores: " + Arrays.toString(scores));

        double average = scoreUtil.getAverageScores(scores);
        int highest = scoreUtil.getHighestScore(scores);
        int lowest = scoreUtil.getLowestScore(scores);

        System.out.println("\nAverage Score: " + average);
        System.out.println("Highest Score: " + highest);
        System.out.println("Lowest Score: " + lowest);
        
        int secondHighest = scoreUtil.getSecondHighestScore(scores);
        System.out.println("Second Highest Score: " + secondHighest);
        
        System.out.println("\nPassing Scores (>= 75):");
        scoreUtil.printPassingScores(scores, passingScore);
        
        System.out.println("\n\nFailing Scores (< 75):");
        for (int score : scores) {
            if (score < passingScore) {
                System.out.print(score + " ");
            }
        }
        System.out.println();
        
        scanner.close();
    }
}
