import {
  MapPin,
  MoveRight,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <a href="#" className="logo">
             Teaky 
            </a>

            <ul>
              <li className="footer-list-item">
                <MapPin strokeWidth={1} />

                <address className="address">Teaky, Port Louis, Mauritius 2025</address>
              </li>

              <li className="footer-list-item">
                <Phone strokeWidth={1} />

                <a href="tel:+230 5800 5847" className="footer-link">
                  +230 5800 5847
                </a>
              </li>

              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <Facebook strokeWidth={1} />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <Twitter strokeWidth={1} />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <Instagram strokeWidth={1} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Help & Information</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Help & Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Online Stores
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About Us</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                What We Do
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQ Page
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Newsletter</p>

            <form action="" className="footer-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                className="email-field"
              />

              <button type="submit" className="footer-form-btn">
                <MoveRight strokeWidth={1} />
              </button>
            </form>

            <div className="wrapper">
              <a href="#" className="footer-link">
                Term & Condition
              </a>
              <a href="#" className="footer-link">
                Policy
              </a>
              <a href="#" className="footer-link">
                Map
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
            <a href="#" className="copyright-link">
              nexstack
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
