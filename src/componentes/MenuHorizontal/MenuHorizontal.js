import React from "react";
//css
import "./menuHorizontal.css";
//icon
import {BiMenu} from "react-icons/bi";

function MenuHorizontal({deplegarMenu}) {
    return (
        <nav className="menu-h">
            <aside>
                <button onClick={deplegarMenu} className="click"><BiMenu className="btn-menu" /></button>
            </aside>
            <ul className="items-horizontal">
                <li className="item-h">menu</li>
                <li className="item-h">menu</li>
                <li className="item-h">menu</li>
            </ul>
        </nav>
    );
}
export default MenuHorizontal