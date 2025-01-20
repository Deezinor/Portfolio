import HamburgerMenu from "./hamburgerMenu";

const Header: React.FC = () => {

    return (
        <header className="[ Nav ] [ container mx-auto ]">
        <nav className="p-4 flex justify-between ">
          <div className="[ logo ] [  ]">
            <h1 className="text-2xl">Jake Boulton</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="[ nav--buttons ] [ hidden md:flex gap-5 items-center ]">
            <a href="/" className="text-base">
              Home
            </a>
            <a href="/about" className="text-base">
              About
            </a>
            <a href="/contact" className="text-base">
              Contact
            </a>
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