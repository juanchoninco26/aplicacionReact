import React,{useState} from "react";
import Menu from "../componentes/Menu/Menu";
import "../css/inicio.css"
import MenuHorizontal  from "../componentes/MenuHorizontal/MenuHorizontal";
function Inicio() {
    const [isMenuOpen, setMenu] = useState(false);

    const deplegarMenu=()=>{
        setMenu(!isMenuOpen);  
    }
    return(
        <main className="inicio">
            <Menu isMenuOpen={isMenuOpen}/>
            <section className="seccion">
             <MenuHorizontal deplegarMenu={deplegarMenu}/>
             <h1>Inicio</h1>
            </section>
        </main>
    );
}
export default Inicio
