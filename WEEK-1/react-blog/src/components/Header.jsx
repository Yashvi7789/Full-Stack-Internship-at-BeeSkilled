function Header({ onAddBlogClick, onHomeClick, onArticlesClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            onHomeClick?.();
          }}
        >
          MyBlog<span>.</span>
        </a>

        <nav className="navigation">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick?.();
            }}
          >
            Home
          </a>

          <a
            href="#articles"
            onClick={(e) => {
              e.preventDefault();
              onArticlesClick?.();
            }}
          >
            Articles
          </a>

          <button className="add-blog-btn" onClick={onAddBlogClick}>
            + Add New Blog
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
