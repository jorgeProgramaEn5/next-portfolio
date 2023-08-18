import React from 'react';
import Image from 'next/image';



export function ProjectCard({title, description, imgUrl, link}) {
  return (
    <>
    <div className='mx-1 md:mx-2 md:w-[100%]' > {/* quita este w-[] en px y ponlo en % */}
        <div className='group relative rounded-lg overflow-hidden mb-8  before:bg-primary-100 before:opacity-[0.85] before:absolute before:w-[100%] before:h-[0] hover:before:h-[100%] hover:before:transition-all hover:before:duration-[0.5s] hover:before:ease-in-out'>
            <Image src={imgUrl} alt="img_project"/>
            <div className='absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center flex items-center justify-center flex-col transition duration-500 ease-in-out opacity-0 group-hover:opacity-90 w-full'>
                <h4 className=' text-slate-200 text-3xl lg:text-4xl font-semibold tracking-tight leading-normal'>{title}</h4>
                <span className='text-slate-200 text-base lg:text-lg font-normal italic'>{description}</span>
                <a href={link} target='blank'><div className=' text-lg font-normal border-[1px] border-slate-200 py-[3px] px-[20px] md:px-[25px] mt-3 rounded-[2px] hover:border-transparent text-slate-50 bg-white bg-opacity-30 hover:bg-secondary-100'>view</div></a>
            </div>
        </div>
    </div>
    </>
  )
}
