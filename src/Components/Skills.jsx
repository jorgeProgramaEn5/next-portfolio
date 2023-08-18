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
    <section id='skills'>
        <div className="mx-auto flex w-[85%] md:w-[85%] lg:w-[90%] flex-col justify-center bg-slate-100 rounded-2xl shadow-xl shadow-gray-400/20 pb-10 md:pb-16">

            <div className=" flex justify-center items-center flex-col md:items-start p-3">
                <h1 className="text-[18px] md:text-[45px] font-medium text-gray-700 pb-2">My Skills</h1>
                <p className='text-justify md:text-left text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-secondary-400 px-[2px] md:pr-5'>
                  I am a front-end developer with experience in various tools and technologies. 
                  My specialization lies in Next.js, React, and Figma technologies, although 
                  I also have experience in other essential tools such as HTML, CSS, Git, JavaScript, 
                   Tailwind, and Bootstrap. <span className={`${view}`}>
                  I handle these tools with ease and use them to create attractive, responsive, 
                  and functional websites and applications. As a developer, my goal is always to 
                  provide high-quality solutions that exceed the expectations of my clients and 
                  end-users.
                  </span>
                </p>

              <div className="mt-5 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <div
                onClick={()=> button()}
                className="rounded-md px-3.5 py-2.5 text-sm md:text-base lg:text-lg font-semibold text-gray-900 shadow-sm bg-white hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
              >
                {botonText}
              </div>
            </div>
            </div>

            <div>
              <Carrusel/>
            </div>
        </div>

    </section>
  )
}
