import { useState } from "react";
import { Search, Menu, X, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#blogs" },
  { label: "Categories", href: "#categories" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 font-heading text-xl font-bold text-foreground"
        >
          <PenTool className="w-6 h-6 text-primary" />
          <span style={{ fontFamily: "var(--font-heading)" }}>
            My Blog
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}

          {/* Sign In */}
          <li>
            <button
              onClick={() => navigate("/signin")}
              className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Sign In
            </button>
          </li>

          {/* Sign Up */}
          <li>
            <button
              onClick={() => navigate("/signup")}
              className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Sign Up
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:block">
            {searchOpen ? (
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                placeholder="Search..."
                className="w-48 rounded-full bg-secondary px-4 py-1.5 text-sm text-foreground outline-none ring-1 ring-border focus:ring-primary transition-all"
              />
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Search className="w-4 h-4" /> Search
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-3 text-foreground hover:text-primary font-medium border-b border-border"
            >
              {l.label}
            </button>
          ))}

          {/* Mobile Sign In */}
          <button
            onClick={() => {
              setMobileOpen(false);
              navigate("/signin");
            }}
            className="block w-full text-left py-3 text-foreground hover:text-primary font-medium border-b border-border"
          >
            Sign In
          </button>

          {/* Mobile Sign Up */}
          <button
            onClick={() => {
              setMobileOpen(false);
              navigate("/signup");
            }}
            className="block w-full text-left py-3 text-foreground hover:text-primary font-medium"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;