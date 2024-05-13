import "./Navigation.css"
import BurgerMenu from "./burgermenu/Burgermenu.jsx";

const Navigation = () => {

    return <div className="container">
        <a href="/" className="logo">ONE DAY VIBORG</a>
        <BurgerMenu></BurgerMenu>
    </div>
};

export default Navigation;