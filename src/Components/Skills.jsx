'use client'
import React from 'react';
import { useState} from 'react';
import { Carrusel } from '@/Components/Carrusel';

export function Skills() {
  const [view, setView] = useState('hidden');
  const [botonText, setBotonText] = useState('Read more');

  const button = () => {
    if (view === 'hidden') {
      setView('')
      setBotonText('Read less')
    } else {
      setView('hidden')
      setBotonText('Read more')
    }
  }

  return (
    <section className='flex justify-center items-center w-full pt-[100px] md:pt-[50px] px-4 sm:px-8 md:px-10 lg:px-24' id='skills'>
      <div className="flex w-[100%] md:w-[85%] lg:w-[80%] flex-col justify-center items-center bg-slate-100/20 rounded-3xl shadow-lg shadow-gray-400/10 pb-10 md:pb-16 md:pt-4 px-2 md:px-6">
      {/* texto */}
        <div className=" flex justify-center items-center flex-col pt-3 pb-5">
            <h1 className="text-[22px] sm:text-3xl lg:text-[45px] font-bold text-colortext-100 tracking-[0.4px] pb-4 md:pb-6">My Skills</h1>
            <p className=' text-center text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-colortext-100/90 pb-4'>
              I am a front-end developer with experience in various <br className=' hidden sm:block'/> tools and technologies. 
              <span className={`${view}`}>
              I handle these tools with ease and use them to create attractive, responsive, 
              and functional websites and applications. As a developer, my goal is always to 
              provide high-quality solutions that exceed the expectations of my clients and 
              end-users.
              </span>
            </p>
{/* boton container */}
          {/* <div className="mt-5 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <div
              onClick={()=> button()}
              className="rounded-md px-3.5 py-2.5 text-sm md:text-base lg:text-lg font-semibold text-gray-900 shadow-sm bg-white hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
            >
              {botonText}
            </div>
          </div> */}
          
        </div>
          {/* carrusel */}
        <div className='flex w-full'>
            <Carrusel/>
          </div>
      </div>

      

    </section>
  )
}
