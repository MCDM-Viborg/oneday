import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import BurgerMenu from "./burgermenu/Burgermenu.jsx";

const Navigation = () => {
  const location = useLocation();
  const [showLogo, setShowLogo] = useState(false);

  // Opdater 'showLogo' baseret på scroll position og kun på forsiden ('/')
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        const currentScrollPos = window.scrollY;
        setShowLogo(currentScrollPos > 50);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav className='container'>
      <div className={showLogo ? "logo logo-visible" : "logo"}>
        <a href='/'>
          <img
            src='./logo-oneday-2-lines-fff.svg'
            alt=''
            className='nav-logo'
          />
        </a>
      </div>
      <BurgerMenu></BurgerMenu>
    </nav>
  );
};

export default Navigation;
