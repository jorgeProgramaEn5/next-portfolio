'use client'
import React from 'react';
import { projects, projectsPersonales, projectsBussiness } from '@/Constant/indice';
import GalleryPojects from './GalleryPojects';
import { BiMoneyWithdraw, BiBriefcaseAlt2 } from 'react-icons/bi';
import { useState } from 'react';

export function Projects() {

    const [project, setProject] = useState(projects);

    return (
    <section className='flex justify-center items-center w-full' id='projects'>
        <div className='  flex flex-col justify-center items-center py-[60px] md:py-24' id='projects'>
            {/* text */}
            <div className=' container flex justify-center items-center flex-col m-auto pb-6 px-7 md:px-24'>
                <h2 className="text-[22px] sm:text-3xl lg:text-[45px] font-bold text-colortext-100 tracking-[0.4px] pb-4 md:pb-6">Projects</h2>
                <p className='text-start md:text-center text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-colortext-100/90 pb-4 lg:w-[75%]'>
                    I have split my projects into two main categories: personal projects and contracted projects. My personal projects are where I get to explore 
                    my own ideas and creative solutions without any restrictions. 
                    
                    <span className=' hidden md:inline'>They come from my curiosity and passion for technology.</span> On the other hand, my 
                    contracted projects are the result of working with external clients and collaborators. 
                    
                    <span className=' hidden md:inline'>In these projects, I have to adapt to their needs and 
                    expectations while keeping my focus on quality and effectiveness.</span>
                </p>
            </div>

            {/* tab */}
            <div className='flex justify-center w-[90%] h-full pt-8 pb-12 lg:pb-16 border-b-2'>
                <div className=" grid grid-cols-3 gap-1 md:gap-2 rounded-md shadow-sm w-[70%] lg:w-[50%]" >
                    <button onClick={()=> setProject(projects)} type="button" className="flex justify-center items-center px-4 py-2 text-lg font-medium text-white bg-primary-100 border border-gray-200 rounded-l-lg hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span>All</span>
                    </button>
                    <button onClick={()=> setProject(projectsPersonales)} type="button" className="flex justify-center items-center px-4 py-2 text-lg font-medium text-white bg-primary-100 border-t border-b border-gray-200 hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span className=' hidden md:block'>Personal</span><span className=' block md:hidden'><BiMoneyWithdraw/></span>
                    </button>
                    <button onClick={()=> setProject(projectsBussiness)} type="button" className="flex justify-center items-center px-4 py-2 text-lg font-medium text-white bg-primary-100 border border-gray-200 rounded-r-md hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span className=' hidden md:block'>Contracting</span><span className=' block md:hidden'><BiBriefcaseAlt2/></span>
                    </button>
                </div>
            </div>

            {/* projects */}
            <div className='flex justify-center items-center w-full pt-6 '>
                <div className={`grid gap-2 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7 px-4 md:px-10`}>
                    <GalleryPojects projects={project}/>    
                </div>
            </div>
        </div>
    </section>
  )
}



