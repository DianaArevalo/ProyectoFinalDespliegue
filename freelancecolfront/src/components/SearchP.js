import React from 'react';
import Header from './Header';
import Sidebar from "./Sidebar"



const SearchP = () => {

    

    return(
        <>
         <Header/>
         <div className='md: flex md:min-h-screen'>
         <Sidebar/>
         </div>
         

        </>
   
    );


}


export default SearchP;