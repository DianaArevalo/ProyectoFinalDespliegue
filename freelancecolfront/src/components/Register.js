import React, {useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import crud from "../utilities/crud";
// import {onChange, onSubmit} from "react"


const Register = () => {

const navigate = useNavigate();
 

 const [usuario, setUsuario] = useState({
  nombre:"",
  email:"",
  edad:" ",
  ciudad:" ",
  seleccion:" ",
  password:" ",
  confirmacion:" "
 });

 const {nombre, email, edad, ciudad, seleccion, password, confirmacion} = usuario;

 const onChange = (e) =>{
setUsuario({
  ...usuario,
  [e.target.name]: e.target.value
})

 };


 const crearCuenta = async () =>{
//validacion password iguales
  if(password !== confirmacion){
    console.log("diferente");
    const mensaje = "las contraseñas son diferentes.";
    swal({
      title: "Error",
      text: mensaje,
      icon: "error",
      buttons:{
        confirm:{
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-danger",
          closeModal: true
        }
      }
    });

  }else{
    const data = {
      nombre: usuario.nombre,
      email: usuario.email,
      edad: usuario.edad,
      ciudad: usuario.ciudad,
      seleccion: usuario.seleccion,
      password: usuario.password
  
  
    }
  console.log(data);
  const response = await crud.POST(`/api/usuarios`, data);
  const mensaje = response.msg;
  console.log(mensaje);
  

  if (seleccion === "1") {
    navigate("/registerProfessional")
  }else{
   navigate("/")
  }
   };
  }


 const onSubmit =(e)=>{
  e.preventDefault();
  crearCuenta();
 }

        
            return(
              <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
                <div className='md:w-2/3 lg:w-2/5'>
                  
                  <h2 className='my-10 inline bg-gradient-to-r from-cyan-500 via-cyan-900 to-cyan-400 bg-clip-text font-display text-3xl tracking-tight text-transparent ' >Todavia no tienes cuenta? Que esperas para crear una?</h2>
                  <p></p>
                  <h3 className='my-10 inline bg-gradient-to-r from-cyan-500 via-cyan-900 to-cyan-400 bg-clip-text font-display text-3xl tracking-tight text-transparent ' >Y disfruta de todos nuestros beneficios</h3>
                  
                  <form 
                  onSubmit={onSubmit}
                  className='my-10 bg-white shadow rounded-lg p-10'>

                    <div className='my-5'>
                      <label className='uppercase text-gray-600 block text-lx font-bold'>Nombres y Apellidos</label>
                    <input 
                    type="nombre"
                    id='nombre'
                    name='nombre'
                    placeholder='Nombre completo'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value={nombre}
                    onChange={onChange}
                    required
                    />

                     <label className='uppercase text-gray-600 block text-lx font-bold'>Correo</label>
                    <input 
                    type="email"
                    id = "email"
                    name='email'
                    placeholder='correo'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value={email}
                    onChange={onChange}
                    required 
                    />

                    <label className='uppercase text-gray-600 block text-lx font-bold'>Edad</label>
                    <input 
                    type="edad"
                    id = "edad"
                    name='edad'
                    placeholder='ingrese su edad'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value={edad}
                    onChange={onChange}
                    required  
                    />

                    <label className='uppercase text-gray-600 block text-lx font-bold'>Ciudad</label>
                    <input 
                    type="ciudad"
                    id='ciudad'
                    name='ciudad'
                    placeholder='ciudad'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value = {ciudad}
                    onChange={onChange}
                    required                                         
                    />

                    <label className='uppercase text-gray-600 block text-lx font-bold'>seleccione</label>
        <select 
        type="seleccion"
        id='seleccion'
        name='seleccion'
        className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors"
        value={seleccion}
        onChange={onChange}
        required>
         <option value="1" className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors" > Soy Programador</option> 
        <option value="2" className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors">Busco un servicio</option>   

        </select>

                    <label className='uppercase text-gray-600 block text-lx font-bold'>Password</label>
                    <input 
                    type="password"
                    id='password'
                    name='password'
                    placeholder='ingrese una contraseña'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value={password}
                    onChange={onChange}
                    required  
                    />

                    <label className='uppercase text-gray-600 block text-lx font-bold'>confirmacion</label>
                    <input 
                    type="confirmacion"
                    id="confirmacion"
                    name='confirmacion'
                    placeholder='confirme su contraseña'
                    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r from-lime-300 to-cyan-200'
                    value={confirmacion}
                    onChange={onChange}
                    required  
                    />

                   <input 

                    type="submit"
                    value="crear cuenta"
                    className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors"

                    />

                  {/* <button>Crear Cuenta</button> */}
                  <Link
                   to ={useNavigate}
                   className="block text-center my-5 text-emerald-800 uppercase text-sm"
                   
                   >Regresar</Link>
                    </div>
                  
                  </form>
                 
                </div>
              </main>
                
              );
          
}

export default Register;