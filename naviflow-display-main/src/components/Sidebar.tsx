import { useState } from "react";
import profileImg from "@/assets/profile-reshma.jpg";

const categories = ["Technology", "Education", "Health", "Projects"];
const recentPosts = [
  "The Future of Online Learning",
  "Work-Life Balance Tips",
  "Beginner's Guide to Coding",
];

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside id="categories" className="space-y-6">
      {/* About Me */}
      <div className="bg-card rounded-xl shadow-card p-5">
        <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>About Me</h3>
        <div className="flex items-start gap-3">
          <img src={profileImg} alt="Reshma" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hi, I'm Reshma, a blogger sharing tips on tech, education, and lifestyle.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card rounded-xl shadow-card p-5">
        <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button className="text-sm text-primary hover:underline flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-card rounded-xl shadow-card p-5">
        <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post}>
              <button className="text-sm text-primary hover:underline flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {post}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe */}
      <div className="bg-card rounded-xl shadow-card p-5">
        <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Subscribe</h3>
        {subscribed ? (
          <p className="text-sm text-primary font-medium">Thanks for subscribing! 🎉</p>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Join our newsletter"
              required
              className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm text-foreground outline-none ring-1 ring-border focus:ring-primary transition-colors"
            />
            <button type="submit" className="w-full bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
