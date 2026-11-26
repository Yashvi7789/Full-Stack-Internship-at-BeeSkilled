
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const students = [
    {
      id: 1,
      name: "Yashvi",
      course: "B.Tech CSE",
      college: "Darshan University",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      name: "Rutvi",
      course: "B.Tech IT",
      college: "Darshan University",
      role: "Web Developer",
    },
    {
      id: 3,
      name: "Preya",
      course: "B.Tech CSE",
      college: "Darshan University",
      role: "UI Designer",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <span className="tag">WEEK 1 • REACT PRACTICE</span>

          <h1>Welcome to My React Website</h1>

          <p>
            Learning React by building reusable components,
            understanding props, and managing state.
          </p>
        </section>

        <section className="counter-section">
          <h2>React Counter</h2>

          <div className="counter-box">
            <h3>{count}</h3>

            <div className="button-group">
              <Button
                text="Increase +"
                onClick={() => setCount(count + 1)}
              />

              <Button
                text="Decrease -"
                variant="secondary"
                onClick={() => setCount(count - 1)}
              />

              <Button
                text="Reset"
                variant="outline"
                onClick={() => setCount(0)}
              />
            </div>
          </div>
        </section>

        <section className="students-section" id="students">
          <h2>Our Students</h2>

          <p className="section-description">
            Student information displayed using reusable React Cards.
          </p>

          <div className="student-grid">
            {students.map((student) => (
              <Card
                key={student.id}
                name={student.name}
                course={student.course}
                college={student.college}
                role={student.role}
              />
            ))}
          </div>
        </section>

        <Form />
      </main>

      <Footer />
    </>
  );
}

export default App;
