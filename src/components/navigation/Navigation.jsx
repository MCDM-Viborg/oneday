import "./Navigation.css";
import BurgerMenu from "./burgermenu/Burgermenu.jsx";

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='logo'>
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
