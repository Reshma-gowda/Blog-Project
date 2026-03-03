import { X, User, Calendar } from "lucide-react";
import { useEffect } from "react";

interface Post {
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogPostModal = ({ post, onClose }: { post: Post; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4" onClick={onClose}>
      <article
        className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-t-2xl" />
          <button onClick={onClose} className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>{post.title}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
          <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostModal;
