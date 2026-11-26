
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(`Thank you, ${name.trim()}! Your form was submitted.`);
    setName("");
    setEmail("");
  }

  return (
    <section className="form-section" id="contact">
      <h2>Contact Us</h2>
      <p className="section-description">
        Enter your details in the form below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-primary" type="submit">
          Submit Form
        </button>

        {message && (
          <p className="form-message" role="status">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Form;
