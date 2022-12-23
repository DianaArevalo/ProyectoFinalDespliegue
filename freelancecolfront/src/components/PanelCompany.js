import React from 'react';
import Header from './Header';
import Sidebar from "./Sidebar"

const PanelCompany = () => {

    return(
        <>
          <Header/>
         <div className='md: flex md:min-h-screen'>
         <Sidebar/>
         </div>

        </>
   
    );

}

export default PanelCompany;