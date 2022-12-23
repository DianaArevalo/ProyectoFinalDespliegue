import React from 'react';
import {Link} from "react-router-dom";

 
const RegisterProfessional = ()=> {

    return(
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div >
            <h2>Hola</h2>
            <Link 
            to={"/"}
            className="block text-center my-5 text-emerald-800 uppercase text-sm"
            >Siguiente</Link>
            </div>
        </main>

    )

}
export default RegisterProfessional;

