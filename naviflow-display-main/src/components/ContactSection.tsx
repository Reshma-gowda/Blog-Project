import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-heading)" }}>Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 max-w-2xl space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="rounded-lg bg-secondary px-4 py-3 text-sm text-foreground outline-none ring-1 ring-border focus:ring-primary transition-colors"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="rounded-lg bg-secondary px-4 py-3 text-sm text-foreground outline-none ring-1 ring-border focus:ring-primary transition-colors"
            />
          </div>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg bg-secondary px-4 py-3 text-sm text-foreground outline-none ring-1 ring-border focus:ring-primary transition-colors resize-none"
          />
          <button type="submit" className="bg-primary text-primary-foreground rounded-lg px-8 py-3 text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity mx-auto">
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
