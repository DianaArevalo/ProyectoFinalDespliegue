import React from 'react'
import { Navigate } from 'react-router-dom';

const  Header = () => {

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        Navigate("/")
    }

    return (
        <header className='px-4 py-5 bg-lime-50 border-b'>
            <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-cyan-900 font-black text-center mb-5 md:mb-0'>
                Bienvenido a tu plataforma!
            </h2>

            <div className='flex flex-col md:flex-row items-center gap-4'>
            <input 

             type="submit"
             value="Cerrar Sesion"
             className="my-5 bg-emerald-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-lime-300 transition-colors"
             onClick={cerrarSesion}
             />

             <div className='block lg:hidden'>
                


             </div>


            </div>
            </div>
        </header>
        
        
    );
}

export default Header;