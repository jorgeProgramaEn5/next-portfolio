import React from 'react';
import Image from 'next/image';



export function ProjectCard({title, description, imgUrl, link}) {
  return (
    <>
    <div className='mx-8' > {/* quita este w-[] en px y ponlo en % */}
        <div className='group relative rounded-lg overflow-hidden mb-8  before:bg-primary-100 before:opacity-[0.85] before:absolute before:w-[100%] before:h-[0] hover:before:h-[100%] hover:before:transition-all hover:before:duration-[0.5s] hover:before:ease-in-out'>
            <Image src={imgUrl} alt="img_project"/>
            <div className='absolute top-[65%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center flex items-center justify-center flex-col transition duration-500 ease-in-out opacity-0 group-hover:opacity-90 w-full'>
                <h4 className=' text-[20px] md:text-[25px] lg:text-[30px] font-semibold tracking-tight leading-normal'>{title}</h4>
                <span className='text-[10px] md:text-[15px] font-normal lg:text-[18px] italic'>{description}</span>
                <div className='text-[10px] md:text-[15px] font-normal lg:text-[18px] border-[1px] border-black py-[2px] px-[20px] md:px-[25px] mt-3 rounded-[10px] hover:border-transparent hover:text-white hover:bg-secondary-100'><a href={link} target='blank'>view more</a></div>
            </div>
        </div>
    </div>
    </>
  )
}
