'use client'
import Image from 'next/image'
import Stikers from './Stikers';
import {header720x720, rocket, whastapp, hero, code, branch} from '@/Assets/indice';
// import { navLinks } from '@/Constant/indice';
import { useState, useEffect } from 'react';
import { FaReact, FaBootstrap, FaPlus } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';



export const Banner = ()=>{

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);  //- Math.random() * 100
  const period = 1000

  useEffect(() => {

    const toRotate = ["A Web Developer", "A Web Designer", "An Electrical Engineer"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((loopNum) => loopNum + 1);
        setDelta(80);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, setText, text.length]);

  return (
    <section id='home' className=' relative pt-[150px] md:pt-[200px] md:pb-24 flex flex-col justify-center items-center w-full'>

  {/* shadown */}
      {/* <div className=' absolute top-[300px] left-[300px] lg:-left-[300px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-2xl opacity-10 z-0'></div> */}
      <div className=' absolute top-[500px] -left-[200px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-2xl opacity-10 z-0'></div>
  {/* text + image */}
      <div className=' relative z-[100] flex w-full justify-center items-center px-4 sm:px-8 md:px-10 lg:px-24'>
        <div className='grid gap-20 md:gap-2 lg:gap-8 grid-cols-1 md:grid-cols-6 lg:grid-cols-12 '>
    {/* text */}
            <div className='col-span-1 md:col-span-3 lg:col-span-8 flex flex-col justify-start items-start'>
                <div className='text-start'>
                  {/* tag */}
                  <div className=' inline-flex items-center justify-center border-2 border-secondary-100 rounded-lg  mb-4 px-[10px] py-[10px] md:px-4 md:py-2'>
                    <div className='w-[15px] md:w-[20px] lg:w-[25px] mr-1 md:mr-2'>
                      <Image src={rocket} alt='rocket'/>
                    </div>
                    <p className='font-semibold md:font-bold tracking-[0.8px] text-secondary-100 text-sm md:text-base lg:text-lg'>
                      Welcome to my Portfolio
                    </p>
                  </div>
                  {/* text rotate */}
                  <h1 className='text-rotate block text-[22px] sm:text-3xl lg:text-[45px] font-bold text-colortext-100 tracking-[0.4px] mb-6 '>{`I'm `} <br className=' hidden md:block lg:hidden'/>
                    <span className='border-r-[2px] font-medium text-colortext-100'>{text}</span>
                  </h1>
                  {/* text about me */}
                  <div className=' w-full sm:w-[90%] lg:w-[80%] flex flex-col '>
                    <p className='text-left hidden md:block text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-colortext-100/90 px-[2px] md:px-[5px]'>
                      I am an electrician who decided to quit my job to follow the dream of becoming a good 
                      app developer.
                    </p>
                    <p className='text-left text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-colortext-100/90 px-[2px] md:px-[5px]'>
                      More than just writing code, what I like is creating new and clever 
                      solutions. I think my biggest strengths are my desire to keep learning and my determination 
                      to try new things, even if they are outside of my comfort zone.
                    </p>
                  </div>
                </div>
                {/* boton wwhatsapp */}
                <div className='w-full flex justify-start select-none'>
                  <a target='blank' href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios'>
                  <button className='flex flex-row justify-center items-center bg-primary-100/90 hover:bg-primary-100/60 text-2xl text-[16px] text-colortext-100 focus:ring-4 focus:outline-none focus:ring-primary-100/50 font-medium rounded-lg md:font-bold md:text-[20px] mt-[30px] md:mt-[60px] tracking-[0.8px] px-3 py-1 md:px-5 md:py-2.5'>
                    <div className='w-4 md:w-5 mr-2'>
                      <BsWhatsapp className='w-full h-full'/>
                    </div>
                      WhatsApp me
                  </button>
                  </a> 
                </div>
            </div>
    {/* image */}
            <div className='relative col-span-1 md:col-span-3 lg:col-span-4'>
              {/* shadown */}
                <div className=' absolute top-0 left-[300px] lg:-left-0 w-0 h-0 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-2xl opacity-10 z-0'></div>

              <div className=' flex flex-col sm:flex-row md:flex-col justify-around items-center'>
                  <div className='relative max-w-[380px] sm:max-w-[310px] md:max-w-[360px] lg:max-w-[420px]'>
                    <Image src={hero} alt="Headder"/>
                    <div className=' absolute flex justify-center items-center w-[45px] md:w-[55px] h-[45px] md:h-[55px] top-0 left-0 bg-primary-100 rounded-lg p-2.5'>
                        <Image src={code} alt="tools"/>
                    </div>
                    <div className=' absolute flex justify-center items-center w-[35px] md:w-[45px] h-[35px] md:h-[45px] top-[100px] -right-2 rotate-12 bg-secondary-100 rounded-lg p-2'>
                        <Image src={branch} alt="tools"/>
                    </div>
                    <div className=' absolute w-[15px] h-[15px] bottom-0 right-24  bg-primary-100 rounded-full'>
                    </div>
                  </div>
                  
    {/* stiker viejo */}
                  {/* <div className='flex w-[100%] h-[90px] relative bg-transparent  md:h-[110px] rounded-[15px] translate-y-[-40px] sm:translate-y-[-100px] lg:translate-y-[-50px]'>
                    <div className=' text-white flex flex-wrap relative flexjustify-start md:justify-center items-center pl-[15px] w-[100%] '>
                      <div className='z-[20] flex justify-center items-center rounded-full bg-primary-100  w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-primary-100'><FaReact size={30} /></div>
                      <div className='z-[19] translate-x-[-15px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandNextjs size={30} /></div>
                      <div className='z-[18] translate-x-[-30px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandTailwind size={30} /></div>
                      <div className='z-[17] translate-x-[-45px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><FaBootstrap size={30} /></div>
                      <div className=' invisible z-[16] translate-x-[-60px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><SiJavascript size={30} /></div>
                      <div className=' invisible z-[15] translate-x-[-75px] flex justify-center items-center rounded-full bg-primary-100 w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-primary-100'><FaPlus size={30} /></div>
                    </div>
                  </div> */}

    {/* stiker de skills */}
                  <div className='flex justify-start sm:justify-center md:justify-start w-full select-none'>
                    <Stikers/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
