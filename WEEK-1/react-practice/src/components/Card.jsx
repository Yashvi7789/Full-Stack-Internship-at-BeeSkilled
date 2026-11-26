
function Card({ name, course, college, role }) {
  return (
    <div className="student-card">
      <div className="avatar">
        {name.charAt(0).toUpperCase()}
      </div>

      <h3>{name}</h3>
      <p>{course}</p>
      <p>{college}</p>

      <span className="student-role">{role}</span>
    </div>
  );
}

export default Card;
