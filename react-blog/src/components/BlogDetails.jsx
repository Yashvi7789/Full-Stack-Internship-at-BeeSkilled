function BlogDetails({ post, onBack }) {
  return (
    <section className="blog-details">
      <button className="back-btn" onClick={onBack}>
        ← Back to Blogs
      </button>

      <span className="category">{post.category}</span>

      <h1>{post.title}</h1>

      <div className="blog-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <hr />

      <p className="details-description">
        {post.description}
      </p>

      <div className="blog-content">
        {post.content}
      </div>
    </section>
  );
}

export default BlogDetails;
