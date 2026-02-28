package StudentScoresAnalyzer;

public class ScoreUtil {
    
    public double getAverageScores(int[] scores) {
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        return (double) sum / scores.length;
    }

    public int getHighestScore(int[] scores) {
        int highest = scores[0];
        for (int score : scores) {
            if (score > highest) {
                highest = score;
            }
        }
        return highest;
    }

    public int getLowestScore(int[] scores) {
        int lowest = scores[0];
        for (int score : scores) {
            if (score < lowest) {
                lowest = score;
            }
        }
        return lowest;
    }

    public void printPassingScores(int[] scores, int passingScore) {
        for (int score : scores) {
            if (score >= passingScore) {
                System.out.print(score + " ");
            }
        }
    }
    
    // Overloaded method that prints count of passing students
    public void printPassingScores(int[] scores, int passingScore, boolean showCount) {
        int count = 0;
        for (int score : scores) {
            if (score >= passingScore) {
                System.out.print(score + " ");
                count++;
            }
        }
        if (showCount) {
            System.out.println("\n(" + count + " passing students)");
        }
    }

    public int[] getFailingScores(int[] scores, int passingScore) {
        int count = 0;

        // Count failing scores
        for (int score : scores) {
            if (score < passingScore) {
                count++;
            }
        }

        // Create new array
        int[] failing = new int[count];
        int index = 0;

        for (int score : scores) {
            if (score < passingScore) {
                failing[index++] = score;
            }
        }

        return failing;
    }
    
    // Find second highest score without sorting
    public int getSecondHighestScore(int[] scores) {
        if (scores.length < 2) {
            return -1; // Invalid if less than 2 scores
        }
        
        int highest = Integer.MIN_VALUE;
        int secondHighest = Integer.MIN_VALUE;
        
        for (int score : scores) {
            if (score > highest) {
                secondHighest = highest;
                highest = score;
            } else if (score > secondHighest && score < highest) {
                secondHighest = score;
            }
        }
        
        return secondHighest;
    }
}
