import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-8 mt-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground mb-4">
        © 2026 My Blog | <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-primary transition-colors">Terms</a>
      </p>
      <div className="flex items-center justify-center gap-4">
        {[Facebook, Twitter, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
