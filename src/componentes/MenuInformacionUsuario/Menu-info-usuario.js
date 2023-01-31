import React from "react";
//css
import "./menuInfoUser.css";
//img
import perfil from "../../imagen/perfil.jpg"

function MenuInformacion({isMenuOpen}) {
    return(
        <div className="perfil">
            <img src={perfil} alt="avatar" className={isMenuOpen?"avatar":"avatar-none"} />
            <div>
                <p>Yaneth Lozano</p>
                <button className="boton">ver perfil</button>
            </div>
            <section className="linea"></section>
        </div>
    );

}
export default MenuInformacion