import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";
import BlogDetails from "./components/BlogDetails";
import AddBlogForm from "./components/AddBlogForm";

import initialPosts from "./data/posts.json";

import "./App.css";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Return to homepage
  function handleHome() {
    setSelectedPost(null);
    setShowForm(false);
    setSearch("");
    setCategory("All");
    window.location.hash = "home";
  }

  // Open articles section
  function handleArticles() {
    setSelectedPost(null);
    setShowForm(false);
    window.location.hash = "articles";

    setTimeout(() => {
      document.getElementById("articles")?.scrollIntoView({
        behavior: "smooth"
      });
    }, 0);
  }

  // Add a new blog
  function handleAddBlog(newBlog) {
    setPosts((previousPosts) => [newBlog, ...previousPosts]);
    setShowForm(false);
    setSelectedPost(null);
    window.location.hash = "home";
  }

  // Open or close blog form
  function handleAddBlogClick() {
    setSelectedPost(null);
    setShowForm((previous) => !previous);
    window.location.hash = "add-blog";
  }

  // Cancel blog form
  function handleCancel() {
    setShowForm(false);
    setSelectedPost(null);
    window.location.hash = "home";
  }

  // Filter blogs
  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.description.toLowerCase().includes(searchText) ||
      post.author.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header
        onAddBlogClick={handleAddBlogClick}
        onHomeClick={handleHome}
        onArticlesClick={handleArticles}
      />

      <main>
        {!selectedPost && !showForm && (
          <>
            <section className="hero" id="home">
              <span className="hero-label">WELCOME TO MYBLOG</span>

              <h1>
                Ideas Worth <span>Sharing.</span>
              </h1>

              <p>
                Explore articles, learn something new, and share
                your knowledge with the world.
              </p>

              <button
                className="hero-btn"
                onClick={handleAddBlogClick}
              >
                Start Writing →
              </button>
            </section>

            <section className="articles-section" id="articles">
              <div className="section-heading">
                <div>
                  <span className="small-heading">OUR CONTENT</span>
                  <h2>Latest Articles</h2>
                  <p>Explore our latest blog posts.</p>
                </div>

                <span className="post-count">
                  {filteredPosts.length} Articles
                </span>
              </div>

              <div className="filters">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="React">React</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="Technology">Technology</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="blog-grid">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onReadMore={(post) => {
                        setSelectedPost(post);
                        window.location.hash = `article-${post.id}`;
                                      }}
                    />
                  ))
                ) : (
                  <p className="no-posts">
                    No articles found. Try another search.
                  </p>
                )}
              </div>
            </section>
          </>
        )}

        {showForm && (
          <AddBlogForm
            onAddBlog={handleAddBlog}
            onCancel={handleCancel}
          />
        )}

        {selectedPost && (
          <BlogDetails
            post={selectedPost}
            onBack={handleArticles}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
