import { useState } from "react";

function AddBlogForm({ onAddBlog, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "React",
    author: "",
    description: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function calculateReadTime(content) {
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));

    return `${minutes} min read`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const cleanedData = {
      title: formData.title.trim(),
      category: formData.category,
      author: formData.author.trim(),
      description: formData.description.trim(),
      content: formData.content.trim(),
    };

    if (
      !cleanedData.title ||
      !cleanedData.author ||
      !cleanedData.description ||
      !cleanedData.content
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newBlog = {
      id: Date.now(),
      ...cleanedData,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: calculateReadTime(cleanedData.content),
    };

    onAddBlog(newBlog);

    setFormData({
      title: "",
      category: "React",
      author: "",
      description: "",
      content: "",
    });
  }

  return (
    <section className="add-blog-section">
      <div className="form-heading">
        <div>
          <span className="small-heading">CREATE CONTENT</span>
          <h2>Add a New Blog</h2>
          <p>Share your knowledge with the world.</p>
        </div>

        <button className="close-btn" onClick={onCancel} type="button">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter your blog title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Technology">Technology</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="author">Author Name</label>
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Enter your name"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Short Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Write a short description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
        />

        <label htmlFor="content">Full Blog Content</label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your complete blog here..."
          value={formData.content}
          onChange={handleChange}
          rows="7"
          required
        />

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>

          <button type="submit" className="publish-btn">
            Publish Blog →
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddBlogForm;
