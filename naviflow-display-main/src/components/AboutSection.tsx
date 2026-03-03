import { Linkedin, Github, Instagram } from "lucide-react";
import profileImg from "@/assets/profile-reshma.jpg";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const AboutSection = () => (
  <section id="about" className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-2xl">
        <img src={profileImg} alt="Reshma" className="w-32 h-32 rounded-2xl object-cover flex-shrink-0 shadow-lg" />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Welcome to my blog! I love writing about technology, education, and wellness. Connect with me!
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
