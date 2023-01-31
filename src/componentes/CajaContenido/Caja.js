import React from 'react';
//css
import './caja.css'

function Caja(props) {
    return(
        <div className='cards'>
            <p>{props.title}</p>
        </div>
    );
}
export default Caja