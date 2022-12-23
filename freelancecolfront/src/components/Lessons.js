import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';




const Lessons = () => {
return(
  <>
  <Header/>
  <div className='md: flex md:min-h-screen'>
    <Sidebar/>
    
    <main className='flex-1'>    
    <h2 className='my-10 inline bg-gradient-to-r from-cyan-500 via-cyan-900 to-cyan-400 bg-clip-text font-display text-3xl tracking-tight text-transparent '  >Bienvenido a las lecciones</h2>
    <section className="px-8">
        <article className="p-8 mt-10 justify-center ">
          <h2>Curso Java</h2>
          <p>En este curso aprenderemos los fundamentos de Java</p>
          <p>curso 
            <Link className='onClick' to={"https://youtu.be/L1oMLsiMusQ"}></Link>
          </p>
        </article>

        <article className="p-8">
          <h2>Curso Python</h2>
          <p>En este curso aprenderemos los fundamentos de Java</p>
          <p>Profesor __________________</p>
        </article>

        <article className="p-8">
          <h2>Curso Mern</h2>
          <p>En este curso aprenderemos los fundamentos de Java</p>
          <p>Profesor __________________</p>
        </article>
      </section>
      </main>
    </div>
    </>
)

    
}

export default Lessons;