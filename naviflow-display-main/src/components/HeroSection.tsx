import heroBlogger from "@/assets/hero-blogger.jpg";

const HeroSection = () => {
  const scrollToBlogs = () => {
    document.querySelector("#blogs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative hero-gradient overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-primary-foreground z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Sharing Ideas That Matter
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Tech · Education · Lifestyle
          </p>
          <button
            onClick={scrollToBlogs}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Read Latest Blogs →
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={heroBlogger}
            alt="Reshma, blogger working on laptop"
            className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
