import { User, Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  onReadMore: () => void;
}

const BlogCard = ({ image, title, excerpt, author, date, onReadMore }: BlogCardProps) => (
  <article className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-foreground mb-2 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {author}</span>
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
      </div>
      <button
        onClick={onReadMore}
        className="w-full bg-primary text-primary-foreground rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        Read More <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </article>
);

export default BlogCard;
