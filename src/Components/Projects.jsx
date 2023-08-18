'use client'
import React from 'react';
import { projects, projectsPersonales, projectsBussiness } from '@/Constant/indice';
// import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from '@/Components/ProjectCard';
import { BiMoneyWithdraw, BiBriefcaseAlt2 } from 'react-icons/bi';
import { useState } from 'react';




export function Projects() {
    const [step1, setStep1] = useState('grid');
    const [step2, setStep2] = useState('hidden');
    const [step3, setStep3] = useState('hidden');
    
    const clickStep1 = ()=> {
        setStep1('grid')
        setStep2('hidden')
        setStep3('hidden')
    }
    
    const clickStep2 = ()=> {
        setStep1('hidden')
        setStep2('grid')
        setStep3('hidden')
    }
    
    const clickStep3 = ()=> {
        setStep1('hidden')
        setStep2('hidden')
        setStep3('grid')
    }

    return (
    <section className='flex justify-center items-center w-full' id='projects'>
        <div className='  flex flex-col justify-center items-center py-[60px] md:py-24' id='projects'>
            <div className=' container flex justify-center items-center flex-col md:items-start m-auto pb-6 px-7 md:px-24'>
                <h2 className="text-[18px] md:text-[45px] font-medium text-gray-700 pb-2">Projects</h2>
                <p className='text-justify md:text-left text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-secondary-400 px-[2px]'>
                    I have split my projects into two main categories: personal projects and contracted projects. My personal projects are where I get to explore 
                    my own ideas and creative solutions without any restrictions. 
                    
                    <span className=' hidden md:inline'>They come from my curiosity and passion for technology.</span> On the other hand, my 
                    contracted projects are the result of working with external clients and collaborators. 
                    
                    <span className=' hidden md:inline'>In these projects, I have to adapt to their needs and 
                    expectations while keeping my focus on quality and effectiveness.</span>
                </p>
            </div>

            <div className='flex justify-center  w-full py-8'>
                <div className="grid grid-cols-3 gap-1 md:gap-2 rounded-md shadow-sm w-[70%] md:w-[40%] " >
                    <button onClick={()=> clickStep1()} type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-primary-100 border border-gray-200 rounded-l-lg hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span>All</span>
                    </button>
                    <button onClick={()=> clickStep2()} type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-primary-100 border-t border-b border-gray-200 hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span className=' hidden md:block'>Personal</span><span className=' block md:hidden'><BiMoneyWithdraw/></span>
                    </button>
                    <button onClick={()=> clickStep3()} type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-primary-100 border border-gray-200 rounded-r-md hover:bg-opacity-90  focus:z-10 focus:ring-2 focus:ring-primary-100">
                        <span className=' hidden md:block'>Contracting</span><span className=' block md:hidden'><BiBriefcaseAlt2/></span>
                    </button>
                </div>
            </div>

            <div className='flex justify-center items-center w-full '>
                <div className={`${step1} grid gap-2 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7 px-4 md:px-10`}>
                {
                    projects.map((project, index)=>{
                        return (    
                        <ProjectCard  
                            key={index}
                            {...project}
                        />
                    )})
                }
                </div>

                <div className={`${step2} grid gap-2 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7 px-4 md:px-10`}>
                {
                    projectsPersonales.map((project, index)=>{
                        return (    
                        <ProjectCard  
                            key={index}
                            {...project}
                        />
                    )})
                }
                </div>

                <div className={`${step3} grid gap-2 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7 px-4 md:px-10`}>
                {
                    projectsBussiness.map((project, index)=>{
                        return (    
                        <ProjectCard  
                            key={index}
                            {...project}
                        />
                    )})
                }
                </div>
                
            </div>
        </div>
    </section>
  )
}



