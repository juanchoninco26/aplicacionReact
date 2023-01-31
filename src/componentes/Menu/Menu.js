import React from "react";
import { Link } from "react-router-dom";
//componentes
import MenuInformacion from "../MenuInformacionUsuario/Menu-info-usuario";
//css
import "./menu.css";
//icon
import { CiHome, CiDollar, CiCreditCard1, CiShoppingCart, CiCircleInfo } from "react-icons/ci";

function Menu({isMenuOpen}) {

    return(
        <header className={isMenuOpen? "menu":"menu-none"}>
            <nav className="centro-menu">
                <section className={"seccion-menu"}>
                    <MenuInformacion isMenuOpen={isMenuOpen}/>
                </section>
                <div className="items">
                    <li  className="item"><Link className="link" to={'/pages/inicio'}><CiHome className="icon"/><a>Inicio</a></Link></li>
                    <li className="item"><Link className="link" to={'/pages/caja'}><CiDollar className="icon"/><a>Caja</a></Link></li>
                    <li className="item"><Link className="link" to={'/pages/ventas'}><CiCreditCard1 className="icon"/><a>Ventas</a></Link></li>
                    <li className="item"><Link className="link" to={'/pages/productos'}><CiShoppingCart className="icon"/><a>Productos</a></Link></li>
                    <li className="item"><Link className="link" to={'/pages/acerca'}><CiCircleInfo className="icon"/><a>Acerca de Nosotros</a></Link></li>
                </div>
            </nav>
        </header>
    );
}
export default Menu