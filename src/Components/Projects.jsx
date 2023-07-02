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
    <section className='' id='projects'>
        <div className='  flex flex-col justify-center items-center pt-7' id='projects'>
            <div className="inline-flex rounded-md shadow-sm" >
                <button onClick={()=> clickStep1()} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <span>All</span>
                </button>
                <button onClick={()=> clickStep2()} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <span className=' hidden md:block'>Profile</span><span className=' block md:hidden'><BiMoneyWithdraw/></span>
                </button>
                <button onClick={()=> clickStep3()} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <span className=' hidden md:block'>Profile</span><span className=' block md:hidden'><BiBriefcaseAlt2/></span>
                </button>
            </div>
            <div>

                <div className={`${step1} grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7`}>
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

                <div className={`${step2} grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7`}>
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

                <div className={`${step3} grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-[90%] pt-7`}>
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



