import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2>Side bar </h2>
      <Link to="/"> home </Link>

      <Link to="/contact"> contact </Link>
      <Link to="/about"> about </Link>
    </div>
  );
}
