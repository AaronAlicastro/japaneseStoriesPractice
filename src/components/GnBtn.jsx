import "./styles/gnBtn.css";

export default function GnBtn({ children, click }) {
  return (
    <button className="gnBtn" onClick={click}>
      {children}
    </button>
  );
}
