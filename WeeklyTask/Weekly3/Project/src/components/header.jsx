import logo from "../assets/image/logo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img src={logo} alt="img" style={{ width: "100px" }} />
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donatur">
                Donatur
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
