import instagram from "../assets/image/ig.png";
import gcp from "../assets/image/gcp.png";
import linkedin from "../assets/image/li.png";
import "../assets/style.css"

export default function Footer() {
  return (
    <div className="bg-dark pt-4">
      <div className="container footer">
        <footer className="py-0">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-light">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="text-light">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="test" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3" style={{marginLeft: "160px"}}>
              <form>
                <h5 className="text-light">Subscribe to our newsletter</h5>
                <p className="text-light text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  consectetur diam quam, ut lacinia dolor imperdiet vitae.
                  Quisque vitae orci eros. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Nama
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Nama"
                  />
                  <button className="btn btn-primary" type="button">
                    Sung
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 py-2 border-top">
            <p className="text-light">© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-dark footer-logo"
                  href="https://www.linkedin.com/in/affan-h-336845140"
                >
                  <img
                    alt="LinkedIn icon"
                    src={linkedin}
                  ></img>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark footer-logo"
                  href="https://www.instagram.com/affannnn.ats/"
                >
                  <img
                    alt="Instagram icon"
                    src={instagram}
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark footer-logo"
                  href="https://www.cloudskillsboost.google/public_profiles/2461fcfb-f46c-49de-92ec-929c4297dd94"
                >
                  <img
                    alt="Google Cloud icon"
                    src={gcp}
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
