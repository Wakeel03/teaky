import { Heart, Menu, ShoppingBag, User } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const Header = ({
  setIsNavbarOpen,
}: {
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="input-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search Anything..."
            className="input-field text-2xl"
          />
        </div>

        <a href="#" className="logo">
          Teaky
        </a>

        <div className="header-action">
          <button className="header-action-btn" aria-label="user">
            <User strokeWidth={1} />
          </button>

          <button className="header-action-btn" aria-label="favorite list">
            <Heart strokeWidth={1} />

            <span className="btn-badge">0</span>
          </button>

          <button className="header-action-btn" aria-label="cart">
            <ShoppingBag strokeWidth={1} />

            <span className="btn-badge">0</span>
          </button>

          <button
            className="header-action-btn"
            aria-label="open menu"
            onClick={() => setIsNavbarOpen((isOpen) => !isOpen)}
          >
            <Menu strokeWidth={1} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
