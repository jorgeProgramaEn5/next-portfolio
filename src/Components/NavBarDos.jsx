'use client'
import Image from 'next/image'
import Link from 'next/link';
import {logo_portafolio, close, menu} from '@/Assets/indice';
import { navLinks } from '@/Constant/indice';
import { useState, useEffect } from 'react';



export function NavBarDos() {

  const [toggle, setToggle] = useState(false);

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50) {
        setScrolled(true)
      } else (
        setScrolled(false)
      )
    }

    window.addEventListener('scroll', onScroll);

    return ()=> window.addEventListener('scroll', onScroll)
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    
    <nav 
      className={` backdrop-blur-md bg-gray-900 bg-opacity-80 border-b border-gray-400 flex justify-between items-center w-full max-h-[50vh] transition-all duration-[0.5s] ease-in-out  px-4 sm:px-8 md:px-10 lg:px-24 fixed top-0 z-[9999] ${scrolled ? 'py-2 md:py-3' : 'py-6'}`}     //varia el scrolled aqui
    >
      <Link href={'/'}>
        <div className=' flex flex-row justify-center items-center'>
          <div className='w-[45px] md:w-[60px] lg:w-[75px]'>
            <Image src={logo_portafolio} alt='logo'/>
          </div>
          <div className='flex flex-col text-[18px] md:text-[24px] lg:text-[30px]'>
            <span className=' font-semibold text-primary-100'>Jorge</span>
            <span className=' text-secondary-100'>Estrada</span>
          </div>
        </div>
      </Link>

      <ul className=' hidden md:flex md:justify-end md:items-center md:pr-6'>
          {navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className= {`${index === navLinks.length -1 ? "mr-0" : "mr-6"}`}
            >
              <a 
                href={`#${nav.id}`}
                className={` text-xl ${activeLink === nav.id ? ' opacity-40' : ''}` } 
                onClick={()=>onUpdateActiveLink(`${nav.id}`)}
              >
                {nav.title}
              </a>
            </li>
          ))}
      </ul>

      <div className=' md:hidden'>
        <Image 
          src={toggle? close : menu} 
          alt="menu"
          className='mr-4 w-[20px] h-[20px] object-contain cursor-pointer'
          onClick={()=> setToggle((prev)=>!prev)}
        />

        <div className={`${toggle ? ' absolute flex items-center justify-center top-[120px] right-0 min-w-[140px] animate-wiggle rounded-2xl bg-primary-100 py-6' : 'hidden'}`}>
            <ul className='flex items-center justify-center flex-col pl-0 m-1'>
              {navLinks.map((nav, index)=>(
              <li
                key={nav.id}
                className= {`${index === navLinks.length -1 ? "mr-0" : "mb-4"} text-white text-base`}
              >
                <a 
                  href={`#${nav.id}`}
                  className={activeLink === nav.id ? 'opacity-40' : '' } 
                  onClick={()=>onUpdateActiveLink(`${nav.id}`)}
                >
                  {nav.title}
                </a>
              </li>
              ))}
            </ul>
        </div>
      </div>

    </nav>                
  )
}
