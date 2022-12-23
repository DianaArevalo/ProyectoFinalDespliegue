import React from 'react';
import Header from './Header';
import Sidebar from "./Sidebar"

const PanelProfessional = () => {

    return(
        <>
          <Header/>
         <div className='md: flex md:min-h-screen'>
         <Sidebar/>
         <h2 className='my-10 inline bg-gradient-to-r from-cyan-500 via-cyan-900 to-cyan-400 bg-clip-text font-display text-3xl tracking-tight text-transparent '  >Publicaciones</h2>
         
         
         <main>
         <table className='hover:table-fixed'>
         <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>

         </table>
         </main>
         </div>
         

        </>
   
    );

}

export default PanelProfessional;