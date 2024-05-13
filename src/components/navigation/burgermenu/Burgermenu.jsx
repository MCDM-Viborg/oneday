"use client"
import "./Burgermenu.css"
import { useState } from "react"

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
   

    const onClickHandler = () => {
        setOpen(!open)
    }

    return (

        <nav className="mainnav">
        <button className={`${"burgerbtn"} ${open ? "show" : ""}`} onClick={onClickHandler}>
            <div className={`${"bar"} ${open ? "barWhite" : ""}`}></div>
            <div className={`${"bar"} ${open ? "barWhite" : ""}`}></div>
            <div className={`${"bar"} ${open ? "barWhite" : ""}`}></div>
        </button>

        <ul className={`${"navul"} ${open ? "show" : ""}`} onClick={onClickHandler}>
            <li className={"navitem"}><a className={"navlink"} href="/">Hjem</a></li>
            <li className={"navitem"}><a className={"navlink"} href="/om">Om One Day Viborg</a></li>
            <li className={"navitem"}><a className={"navlink"} href="/credits">Fotografer, webudviklere og lærere</a></li>
            <li className={"navitem"}><a className={"navlink"} href="/historie">Viborg for 100 år siden</a></li>
        </ul>
    </nav>

    );
}

export default BurgerMenu;