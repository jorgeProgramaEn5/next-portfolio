import React from 'react'
import {whastapp, linkedin, twitter } from '@/Assets/indice';
import Image from 'next/image'





export function Footer() {
  return (
    <footer className='footer pt-4 '>
        <div className=' container m-auto flex justify-center pb-5'>
                <div className=' flex flex-col items-center w-[50%]'>
                    <div className='flex flex-row w-[120px] md:w-[150px]'>
                        <a className=' m-1 p-1 md:p-2 inline-flex justify-center items-center rounded-[50%] bg-primary-100 hover:bg-secondary-100' href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios' target='blank'><Image src={whastapp} alt="social_img" /></a>
                        <a className=' m-1 p-1 md:p-2 inline-flex justify-center items-center rounded-[50%] bg-primary-100 hover:bg-secondary-100' href='https://www.linkedin.com/in/jorge-estrada-machado-386bb121b' target='blank'><Image src={linkedin} alt="social_img" /></a>
                        <a className=' m-1 p-1 md:p-2 inline-flex justify-center items-center rounded-[50%] bg-primary-100 hover:bg-secondary-100' href='https://twitter.com/JorgitoEs2018' target='blank'><Image src={twitter} alt="social_img" /></a>
                    </div>
                    <p className=' text-center text-[10px] md:text-[15px] font-normal lg:text-[18px] italic mt-2'>CopyRight 2023. All Right Reserved</p>
                </div>
        </div>
    </footer>
  )
}

