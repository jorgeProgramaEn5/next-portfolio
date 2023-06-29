'use client'
import Image from 'next/image'
import {logo, close, menu} from '@/Assets/indice';
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
      className={`flex justify-between w-full bg-primary-100 transition duration-[320] ease-in-out py-2 px-3 fixed z-50 ${scrolled ? 'py-0 px-4' : ''}`}     //varia el scrolled aqui
    >
      <div className=' w-1/6 md:w-1/5 lg:w-1/5'>
        <Image src={logo} alt='logo'/>
      </div>

      <ul className=' hidden md:flex md:justify-end md:items-center'>
          {navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className= {`${index === navLinks.length -1 ? "mr-4" : "mr-6"}`}
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
          className=' mt-1 sm:mt-3 mr-4 w-[20px] h-[20px] object-contain cursor-pointer'
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
