import React, { useState } from "react";
//css
import "../css/inicio.css";
//componentes
import Menu from "../componentes/Menu/Menu";
import MenuHorizontal from "../componentes/MenuHorizontal/MenuHorizontal";
function Productos() {
    const [isMenuOpen, setMenu] = useState(false);

    const deplegarMenu=()=>{
        setMenu(!isMenuOpen); 
    }
    return (
        <main className="inicio">
            <Menu isMenuOpen={isMenuOpen} />
            <section className="seccion">
                <MenuHorizontal deplegarMenu={deplegarMenu} />
            </section>
        </main>
    );
}
export default Productos