package JARVIS;

public class JarvisTest {
    
    public static void main(String[] args) {
        JarvisAssistant jarvis = new JarvisAssistant();
        
        System.out.println(jarvis.basicGreeting());
        
        System.out.println(jarvis.guestGreeting("Zane"));
        
        System.out.println(jarvis.guestGreeting("Mr. Stark", "evening"));
        
        System.out.println(jarvis.dateAnnouncement());
        
        String conversation1 = "Hey Jarvis, can you get me a coffee before Friday?";
        String conversation2 = "Jarvis, what's the weather like?";
        String conversation3 = "I have a meeting on Tuesday.";
        
        System.out.println(jarvis.respondBeforeFriday(conversation1));
        System.out.println(jarvis.respondBeforeFriday(conversation2));
        System.out.println(jarvis.respondBeforeFriday(conversation3));
    }

}
