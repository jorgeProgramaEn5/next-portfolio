import React from 'react'
import Image from 'next/image'

export default function TargetSkills({num, image, name}) {
  return (
    <div className=' shadow-lg w-[200px] min-h-[100px] overflow-hidden flex flex-col justify-center items-center rounded-2xl bg-gradient-to-b  from-stone-700 to-stone-900 text-white pt-2 pb-4 px-4 mt-6'>
        <div className='flex w-full justify-end relative'>
            <p className=' text-[4rem] flex absolute -top-6 left-0'>{num}</p>
            <div className='w-[80px] h-[80px] rounded-2xl p-2 '>
                <div className=' absolute w-[160px] -top-12 left-12'>
                    <Image className='z-10 ' src={image} alt='logo' />
                </div>
            </div>
        </div>
        <div className=' flex flex-col pl-1 z-50'>
            <h2 className='my-1 text-2xl'>{name}</h2>
            <p className=' text-slate-300'>Estructura basica en cualquier web</p>
        </div>
    </div>
  )
}
