import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import crud from "../utilities/crud";




const Login = () => {
 
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email:"",
    password:""

  });

  const {email, password} = usuario;

 

  const onChange = (e) =>{
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
      
    })
    
     };
/*
     const autenticarUsuario = async () =>{
      const data = {
        email: usuario.email,
        password: usuario.password
      }
     }*/

     const onSubmit =(e)=>{
      e.preventDefault();
      //autenticarUsuario();
     }


     const iniciarSesion = async () =>{
      //validacion password iguales
        if(password !== password){
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
        
      /*
        if (seleccion === "1") {
          navigate("/registerProfessional")
        }else{
         navigate("/")
        }*/
         };
        }

        
        
  

  
        
            return(
                <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center' >
                    <div className='md:w-2/3 lg:w-2/5' >
                   

                  <form 
                  onSubmit={onSubmit}
                  className='my-10 bg-white shadow rounded-lg p-10' >
                   <div className='my-5'>
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

                <input 

                type="submit"
                value="Iniciar Sesión"
                className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors"
                />

            <Link 
            to={"/registro"}
            className="block text-center my-5 text-emerald-800 uppercase text-sm"
            >Crear Cuenta</Link>

                   </div>
                  </form>
                    </div>
                   
                </main>
              );
          
}

export default Login;