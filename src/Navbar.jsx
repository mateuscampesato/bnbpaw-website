import { business } from "./business.js"
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu (){
        setMenuOpen(false);
    }

    return (
    <header className="site-header">
        <a className="brand" href="/#home" aria-label={`${business.name} home`}>
          <img className="brand-logo" src="/images/bb-paw-logo.png" alt="" />
          {business.name}
        </a>
        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="/#about" onClick={closeMenu}>
            Our story
          </a>
          <a href="/#review" onClick={closeMenu}>
            Kind words
          </a>
          <a href="/#services" onClick={closeMenu}>
            Services
          </a>
          <a href="/#contact" onClick={closeMenu}>
            Get in touch
          </a>
        </nav>
        <a className="header-cta" href="/#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
    );
}

export default Navbar;