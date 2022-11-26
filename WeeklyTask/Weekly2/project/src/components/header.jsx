import logo from "../assets/image/logo.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img
              src={logo}
              alt="img"
              style={{ width: "100px" }}
            />
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="test" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="test" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="test" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="test" className="nav-link">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="test" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}
