'use client'
import React from 'react';
import { useState} from 'react';




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
    <section>
        <div className="mx-auto flex w-[85%] md:w-[85%] lg:w-[90%] flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">

            <div className=" flex justify-center items-center flex-col md:items-start p-3">
                <h1 className="text-[18px] md:text-[45px] font-medium text-gray-700 pb-2">My Skills</h1>
                <p className='text-center md:text-left text-[18px] tracking-[0.8px] leading-6 text-secondary-400 px-[2px]'>
                  I am a front-end developer with experience in various tools and technologies. 
                  My specialization lies in Next.js, React, and Figma technologies, although 
                  I also have experience in other essential tools such as HTML, CSS, JavaScript, 
                  Git, Bootstrap, and Tailwind. <span className={`${view}`}>
                  I handle these tools with ease and use them to create attractive, responsive, 
                  and functional websites and applications. As a developer, my goal is always to 
                  provide high-quality solutions that exceed the expectations of my clients and 
                  end-users.
                  </span>
                </p>

              <div className=" md:hidden mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <div
                onClick={()=> button()}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm md:text-base lg:text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
              >
                {botonText}
              </div>
            </div>
            </div>
        </div>

    </section>
  )
}
