import React,{ useState } from "react";
//componentes
import MenuInformacion from "../MenuInformacionUsuario/Menu-info-usuario";
//css
import "./menu.css";
//icon
import {BiMenu} from "react-icons/bi";
import { CiHome, CiDollar, CiCreditCard1, CiShoppingCart, CiCircleInfo } from "react-icons/ci";

function Menu({isMenuOpen}) {

    return(
        <header className={isMenuOpen? "menu":"menu-none"}>
            <nav className="centro-menu">
                <section className={"seccion-menu"}>
                    <MenuInformacion isMenuOpen={isMenuOpen}/>
                </section>
                <div className="items">
                    <li className="item"><CiHome className="icon"/><a>Inicio</a></li>
                    <li className="item"><CiDollar className="icon"/><a>Caja</a></li>
                    <li className="item"><CiCreditCard1 className="icon"/><a>Ventas</a></li>
                    <li className="item"><CiShoppingCart className="icon"/><a>Productos</a></li>
                    <li className="item"><CiCircleInfo className="icon"/><a>Acerca de Nosotros</a></li>
                </div>
            </nav>
        </header>
    );
}
export default Menu