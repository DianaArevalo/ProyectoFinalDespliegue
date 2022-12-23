import React from 'react'
import { Link } from 'react-router-dom';

const  Sidebar = () => {

    return (
        <aside className='md:w-80 lg:w-96 px-5 py-10 bg-lime-100'>
           <div className='text-center py-10'>
            <Link
            className='py-2 bg-emerald-900 w-full p-3  text-white uppercase font-bold mt-5 text-center rounded-lg'
            to={"/perfil"}
            >
                PERFIL            
            </Link>
            </div>

            <div className='text-center py-10'>
            <Link
            className='py-2 bg-emerald-900 w-full p-3  text-white uppercase font-bold mt-5 text-center rounded-lg'
            to={"/reservation"}
            >
                Reservas           
            </Link>
            </div>

            

        </aside>
    )
}

export default Sidebar;