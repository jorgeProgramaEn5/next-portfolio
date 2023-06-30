'use client'
import Image from 'next/image'
import {header720x720} from '@/Assets/indice';
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

    const toRotate = ['A Web Developer', 'A Web Designer', 'An Electrical Engineer'];

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
      } else if (isDeleting && updatedText === '') {
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
    <section id='home' className='pt-[150px] md:pt-[200px] w-full'>
      <div className=' w-full px-[30px] md:px-[37px]'>
        <div className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 '>

            <div className='col-span-2 flex flex-col justify-center items-start pl-2 md:pr-[140px]'>
                <div className='text-center md:text-start'>
                  <span className='inline-block font-semibold md:font-bold tracking-[0.8px] hover:tracking-[0.9px] text-secondary-100 border border-secondary-100 rounded-lg text-lg mb-4 px-[15px] py-[10px] md:px-4 md:py-2'>
                    Welcome to my Portfolio
                  </span>
                  <h1 className='text-rotate block text-[22px] md:text-[45px] font-bold tracking-[0.8px] mb-6 '>{`I'm `}
                    <span className='border-r-[2px] border-gray-600'>{text}</span>
                  </h1>
                  <p className=' text-justify md:text-left hidden md:block text-[18px] tracking-[0.8px] leading-6 text-secondary-400 px-[2px] md:px-[5px]'>
                    I'm an electrician who decided to quit my job to follow the dream of becoming a good 
                    app developer.
                  </p>
                  <p className='text-justify md:text-left text-[18px] tracking-[0.8px] leading-6 text-secondary-400 px-[2px] md:px-[5px]'>
                    More than just writing code, what I like is creating new and clever 
                    solutions. I think my biggest strengths are my desire to keep learning and my determination 
                    to try new things, even if they're outside of my comfort zone.
                  </p>
                </div>
                <div className='w-full flex justify-center md:justify-start'>
                  <button className='flex flex-row font-medium md:font-bold text-[18px] md:text-[20px] mt-[30px] md:mt-[60px] tracking-[0.8px] '>
                      <span className='flex flex-row'>
                        <BsWhatsapp size={25} className='animate-pinggg text-secondary-300 mr-[10px]' />
                        <a href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios'>WhatsApp me</a> 
                      </span>
                  </button>
                </div>
            </div>

            <div className='col-span-1'>
              <div>
                  <div className=''>
                    <Image src={header720x720} alt="Headder"/>
                  </div>

                  <div className='m-w-[150px] h-[90px] absolute bg-transparent max-w-[200px] md:h-[110px] rounded-[15px] translate-y-[-50px]'>
                    <div className=' text-white relative flex justify-center items-center pl-[15px] w-[300px] h-[110px]'>
                      <div className='z-[20] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><FaReact size={30} /></div>
                      <div className='z-[19] translate-x-[-15px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandNextjs size={30} /></div>
                      <div className='z-[18] translate-x-[-30px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandTailwind size={30} /></div>
                      <div className='z-[17] translate-x-[-45px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><FaBootstrap size={30} /></div>
                      <div className=' invisible z-[16] translate-x-[-60px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><SiJavascript size={30} /></div>
                      <div className=' invisible z-[15] translate-x-[-75px] flex justify-center items-center rounded-full bg-primary-100 w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-primary-100'><FaPlus size={30} /></div>
                    </div>
                  </div>
                </div>
            </div>

        
          {/* <div className='col-span-1 md:col-span-2 xl:col-span-7'>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1 className='text-rotate'>{`I'm `}<span className='wrap'>{text}</span></h1>
            <p className='p-text text-hidden-cell'>
              I'm an electrician who decided to quit my job to follow the dream of becoming a good 
              app developer.
            </p>
            <p className='p-text'>
              More than just writing code, what I like is creating new and clever 
              solutions. I think my biggest strengths are my desire to keep learning and my determination 
              to try new things, even if they're outside of my comfort zone.
            </p>
            <button className='btn-connect'><span><a href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios'>WhatsApp me</a> <BsArrowRightCircle size={25} /></span></button>
          </div> */}
          {/* <div className='col-span-1 md:col-span-2 xl:col-span-7'>
            <div className='w-[400px]'>
              <Image src={header720x720} alt="Headder"/>
            </div>
            <div className='target'>
              <div className='target-container'>
                <div><FaReact size={30} /></div>
                <div><TbBrandNextjs size={30} /></div>
                <div><TbBrandTailwind size={30} /></div>
                <div><FaBootstrap size={30} /></div>
                <div><SiJavascript size={30} /></div>
                <div><FaPlus size={35} /></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
