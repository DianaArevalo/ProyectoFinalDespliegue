import React from 'react';
import Header from './Header';
import Sidebar from "./Sidebar"



const SearchC = () => {

    

    return(
        <>
         <Header/>
         <div className='md: flex md:min-h-screen'>
         <Sidebar/>
         </div>
         

        </>
   
    );


}


export default SearchC;