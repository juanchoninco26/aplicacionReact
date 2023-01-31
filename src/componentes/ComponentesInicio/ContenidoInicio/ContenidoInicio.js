import React from 'react';
//css
import '../ContenidoInicio/contenidoInicio.css'
//componente
import Caja from '../../CajaContenido/Caja';

function ContenidoInicio() {
    return(
        <div className='contenido'>
            <Caja title='Mes'/>
            <Caja title='Año'/>
        </div>
    );
}
export  default ContenidoInicio