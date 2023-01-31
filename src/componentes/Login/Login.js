import React,{useState} from 'react';
import './login.css';
import user from "../../user.json";
import imgReact from "../../imagen/logo192.png";
import {CiUser,CiUnread} from "react-icons/ci";

function Login() {
  // const usuario=user.nombre;
  // const password=user.contraseña;

  const [teclado,setTeclado]= useState('');
  const [contraseña,setContraseña]=useState('')

  const handlerInput=({target})=>{
    setTeclado(target.value)
  }
  const handlerInputPassword=({target})=>{
    setContraseña(target.value)
  }
  const handlerSubmit=(e)=>{
    e.preventDefault();
    if (''===teclado && ''===contraseña) {
      window.location.href="../pages/inicio";
    }else{
      alert('usuario incorrecto');
    }
  }
  return (
    <section className='content'>
      <div className='sub-content'>
        <img src={imgReact} alt="logo" width="60px" height="60px"></img>
        <h1>Inicio de sesion</h1>
        <form className='formulario' onSubmit={handlerSubmit}>
          <div className='nombre'>
            <CiUser className='icono' /><input type="text" className='input' placeholder="Nombre" value={teclado} onChange={handlerInput}/>
          </div>
          <div className='apellido'>
            <CiUnread className='icono' /><input type="password" className='input' placeholder="Contraseña" value={contraseña} onChange={handlerInputPassword} />
          </div>
          <input type="submit" className='boton' value="INGRESAR"/>
        </form>
        <p>¿Olvidaste tu contraseña?</p>
      </div>      
    </section>
  );
}

export default Login;
