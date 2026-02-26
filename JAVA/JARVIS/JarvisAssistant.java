package JARVIS;
import java.util.Date;
import java.util.Calendar;

public class JarvisAssistant {
    
    public String basicGreeting() {
        return "Greetings, Sir. How may I assist you today?";
    }

    public String guestGreeting(String name, String dayPeriod) {
        return "Good " + dayPeriod + ", " + name + ". How may I assist you?";
    }

    public String guestGreeting(String name) {
        Calendar calendar = Calendar.getInstance();
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        
        String dayPeriod;
        if (hour >= 5 && hour < 12) {
            dayPeriod = "morning";
        } else if (hour >= 12 && hour < 18) {
            dayPeriod = "afternoon";
        } else {
            dayPeriod = "evening";
        }
        
        return guestGreeting(name, dayPeriod);
    }

    public String dateAnnouncement() {
        Date currentDate = new Date();
        return "Sir, it is currently " + currentDate.toString();
    }

    public String respondBeforeFriday(String conversation) {
        if(conversation.contains("Friday")) {
            return "Right away, Sir. Although she is still learning.";
        } else if(conversation.contains("Jarvis")) {
            return "At your service, Sir.";
        } else {
            return "Very well. Carrying on.";
        }
    }
}
