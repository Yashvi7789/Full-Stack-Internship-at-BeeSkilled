
function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
