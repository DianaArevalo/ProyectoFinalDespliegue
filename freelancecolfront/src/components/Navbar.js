import React from 'react';
import { Link } from 'react-router-dom';

 
const navbar = () => {



 return(
    <div>
        <nav className='navbar navbar-expand-lg-navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="#">Menu</Link>
                <button className='nabvar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNab" aria-controls='navbarNav' aria-expanded="false" aria-label='Toogle navigation'>
                    <span className='navbar-toogler-icon'></span>
                </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current="page" to={"/"}>perfil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current="page" to={"/"}>Busca Desarrolladores</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current="page" to={"/"}>Busca Proyectos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current="page" to={"/"}>Cerrar Sesion</Link>
                    </li>

                </ul>

            </div>

                
    
            </div>
        </nav>
    </div>
 )
}

export default navbar;