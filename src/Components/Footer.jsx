import React from 'react'
import {whastapp, linkedin, twitter } from '@/Assets/indice';
import Image from 'next/image'
import { navLinks, socialMedia } from '@/Constant/indice';
import Link from 'next/link';





export function Footer() {
  return (
    <footer className="bg-black flex justify-center items-center w-full py-16 px-4 sm:px-8 md:px-10 lg:px-24">
      {/* name + frase */}
      <div className=' grid grid-cols-1 md:grid-cols-2 bg-black w-full'>
        <div className='flex justify-start items-center md:items-start w-full flex-col'>
          <div className="flex justify-center text-secondary-100 text-[22px] sm:text-3xl lg:text-4xl">
              Jorge Estrada Machado
          </div>

          <p
            className=" mt-6 w-[95%] sm:w-[70%] md:w-[90%] lg:w-[50%] text-center md:text-left leading-relaxed text-gray-400"
          >
            {`"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque."`}
          </p>
        </div>
{/* link + social media */}
        <div className=" mt-10 md:mt-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
{/* link  */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {
              navLinks.map( link => (
                <li key={link.id}>
                  <Link
                    className="transition  text-white hover:text-white/75"
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
            
          </ul>
{/* social-media  */}
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {
              socialMedia.map( item => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  >
                    <span className="sr-only">{item.title}</span>
                    <div
                      className="h-6 w-6"
                      // fill="currentColor"
                      // viewBox="0 0 24 24"
                      // aria-hidden="true"
                    >
                      <Image src={item.icon} alt={item.title}/>
                    </div>
                  </Link>
                </li>
              ))
            }
            
          </ul>
        </div>
      </div>
    </footer>

  )
}

