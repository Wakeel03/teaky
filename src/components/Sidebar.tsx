import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const Sidebar = ({
  isNavbarOpen,
  setIsNavbarOpen,
}: {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div className={`sidebar ${isNavbarOpen && "active"}`}>
        <button
          className="nav-close-btn"
          aria-label="close menu"
          data-nav-toggler
        >
          <X strokeWidth={1} onClick={() => setIsNavbarOpen(false)} />
        </button>

        <div className="wrapper">
          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Language</p>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                English
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                French
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                Creole
              </a>
            </li>
          </ul>

          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Currency</p>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                MUR
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                USD
              </a>
            </li>

            <li>
              <a href="#" className="sidebar-link">
                Euro
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#product" className="navbar-link" data-nav-link>
                Product
              </a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link>
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        <ul className="contact-list">
          <li>
            <p className="contact-list-title">Contact Us</p>
          </li>

          <li className="contact-item">
            <address className="address">
              691 Royal St, Port Louis, Mauritius
            </address>
          </li>

          <li className="contact-item">
            <a href="mailto:support.center@woodex.co" className="contact-link">
              wbauboorally@gmail.com
            </a>
          </li>

          <li className="contact-item">
            <a href="tel:+230 5800 5847" className="contact-link">
              (+230) 5800 5847
            </a>
          </li>
        </ul>

        <div className="social-wrapper">
          <p className="social-list-title">Follow US On Socials</p>

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
        </div>
      </div>

      <div
        className={`overlay ${isNavbarOpen && "active"}`}
        onClick={() => setIsNavbarOpen(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
