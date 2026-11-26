function BlogCard({ post, onReadMore }) {
  return (
    <article className="blog-card">
      <span className="category">{post.category}</span>

      <h2>{post.title}</h2>

      <p className="blog-description">
        {post.description}
      </p>

      <div className="blog-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>

      <div className="blog-bottom">
        <span>{post.readTime}</span>

        <button
          className="read-more-btn"
          onClick={() => onReadMore(post)}
        >
          Read More →
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
