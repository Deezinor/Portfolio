import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";

const Header: React.FC = () => {

  const linkClasses = "text-base md:text-2xl"

    return (
        <header className="[ Nav ] [ container mx-auto ]">
        <nav className="p-8 flex justify-between items-center ">
          <div className="[ logo ] [  ]">
            <h1 className="text-[2.5rem] text-nowrap">Jake Boulton</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="[ nav--buttons ] [ hidden md:flex gap-5 text-base]">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            <Link to="/about" className={linkClasses}>
              About
            </Link>
            <Link to="/cv" className={linkClasses}>
              CV
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </nav>
      </header>
    );
};

export default Header;