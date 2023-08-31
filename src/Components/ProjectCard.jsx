import React from 'react';
import Image from 'next/image';



export function ProjectCard({title, description, imgUrl, link}) {
  return (
    <>
    <div className='mx-1 md:mx-2 md:w-[100%]' > {/* quita este w-[] en px y ponlo en % */}
        <div className='group relative rounded-3xl overflow-hidden mb-8  before:bg-gradient-to-r from-indigo-500 to-purple-500 before:opacity-[0.90] before:absolute before:w-[100%] before:h-[0] hover:before:h-[100%] hover:before:transition-all hover:before:duration-[0.5s] hover:before:ease-in-out'>
            <Image src={imgUrl} alt="img_project"/>
            <div className='absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center flex items-center justify-center flex-col transition duration-500 ease-in-out opacity-0 group-hover:opacity-90 w-full'>
                <h4 style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}} className=' text-white text-2xl lg:text-3xl font-[700] tracking-wide leading-normal lg:pb-2'>{title}</h4>
                <span style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}} className='text-white text-base lg:text-lg font-normal italic'>{description}</span>

                
                  
                  <a href={link} target='blank' className='inline-flex items-center hover:underline mt-1 lg:mt-3'>
                  <p className='text-xl font-normal text-white hover:text-secondary-100'>
                  view
                  </p>
                  <svg className="w-3 h-3 ml-2.5 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                  </svg>
                  </a>
            </div>
        </div>
    </div>
    </>
  )
}
