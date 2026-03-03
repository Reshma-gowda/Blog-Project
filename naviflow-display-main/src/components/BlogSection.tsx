import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogPostModal from "./BlogPostModal";
import blogAi from "@/assets/blog-ai-students.jpg";
import blogStudy from "@/assets/blog-study-tips.jpg";
import blogHealth from "@/assets/blog-healthy-habits.jpg";

const posts = [
  {
    id: 1,
    image: blogAi,
    title: "How AI is Changing Student Life",
    excerpt: "Discover how artificial intelligence is helping students study smarter and faster.",
    content: "Artificial Intelligence is revolutionizing education at every level. From personalized learning platforms that adapt to each student's pace, to AI-powered tutoring systems that provide instant feedback, the classroom of tomorrow is here today.\n\nStudents now have access to tools that can summarize lengthy textbooks, generate practice questions, and even help with research. AI writing assistants help improve grammar and structure, while smart scheduling apps optimize study time based on individual learning patterns.\n\nThe impact goes beyond academics — AI is helping students with career guidance, mental health support through chatbots, and collaborative learning through intelligent group matching. As these technologies mature, the gap between traditional and AI-enhanced education continues to widen.\n\nHowever, it's important to use AI as a supplement rather than a replacement for critical thinking. The most successful students are those who leverage AI tools while maintaining their own analytical abilities.",
    author: "Reshma",
    date: "March 15, 2026",
  },
  {
    id: 2,
    image: blogStudy,
    title: "Top 10 Study Tips for Success",
    excerpt: "Effective study tips to boost your productivity and ace your exams.",
    content: "Success in academics isn't just about studying harder — it's about studying smarter. Here are ten proven strategies that top students use:\n\n1. **Active Recall**: Test yourself instead of re-reading notes. This forces your brain to retrieve information, strengthening neural pathways.\n\n2. **Spaced Repetition**: Review material at increasing intervals. Apps like Anki can automate this process.\n\n3. **The Pomodoro Technique**: Study in 25-minute focused blocks with 5-minute breaks. This maintains concentration and prevents burnout.\n\n4. **Mind Mapping**: Create visual connections between concepts. This helps with understanding complex relationships.\n\n5. **Teach Someone Else**: Explaining concepts to others reveals gaps in your understanding.\n\n6. **Eliminate Distractions**: Put your phone in another room. Use website blockers during study sessions.\n\n7. **Get Enough Sleep**: Your brain consolidates memories during sleep. Never sacrifice sleep for study time.\n\n8. **Exercise Regularly**: Physical activity improves cognitive function and memory retention.\n\n9. **Set Specific Goals**: Instead of 'study math,' try 'complete 10 calculus problems on integration.'\n\n10. **Review Before Bed**: A quick review of the day's material before sleep enhances retention.",
    author: "Jake Miller",
    date: "March 10, 2026",
  },
  {
    id: 3,
    image: blogHealth,
    title: "Healthy Habits for a Better Life",
    excerpt: "Simple health tips to improve your daily routine and well-being.",
    content: "Building healthy habits doesn't require dramatic lifestyle changes. Small, consistent adjustments can transform your well-being over time.\n\n**Start Your Morning Right**: Begin with a glass of water and 10 minutes of stretching or light exercise. This kickstarts your metabolism and sets a positive tone for the day.\n\n**Nutrition Matters**: Focus on whole foods — vegetables, fruits, lean proteins, and whole grains. The 80/20 rule works well: eat nutritiously 80% of the time, and allow yourself treats 20% of the time.\n\n**Move Your Body**: You don't need a gym membership. A 30-minute walk, yoga session, or home workout is enough to maintain good health. The key is consistency.\n\n**Prioritize Mental Health**: Practice mindfulness or meditation for just 5 minutes daily. Journal your thoughts. Don't hesitate to seek professional help when needed.\n\n**Digital Detox**: Set boundaries with technology. No screens an hour before bed. Take regular breaks from social media.\n\n**Stay Hydrated**: Aim for 8 glasses of water daily. Carry a reusable water bottle as a reminder.\n\n**Sleep Hygiene**: Maintain a consistent sleep schedule. Create a dark, cool, quiet sleeping environment. Aim for 7-9 hours per night.",
    author: "Sarah",
    date: "March 5, 2026",
  },
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blogs" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-10">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              {...post}
              onReadMore={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default BlogSection;
