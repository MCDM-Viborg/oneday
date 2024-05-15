import "./Navigation.css"
import BurgerMenu from "./burgermenu/Burgermenu.jsx";

const Navigation = () => {

    return <div className="container">
        <a href="/" className="logo">
        <img src="./logo-oneday-2-lines-fff.svg" alt="" className="nav-logo"/>
        </a>
        <BurgerMenu></BurgerMenu>
    </div>
};

export default Navigation;