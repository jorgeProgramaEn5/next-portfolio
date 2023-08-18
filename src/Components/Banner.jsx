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
    <section id='home' className='pt-[150px] md:pt-[200px] md:pb-24 flex justify-center items-center w-full'>
      <div className=' container mx-auto px-7 md:px-24'>
        <div className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>

            <div className='col-span-2 flex flex-col justify-center items-start pl-2 md:pr-[140px]'>
                <div className='text-center md:text-start'>
                  <span className='inline-block font-semibold md:font-bold tracking-[0.8px] hover:tracking-[0.9px] text-secondary-100 border border-secondary-100 rounded-lg text-lg mb-4 px-[10px] py-[10px] md:px-4 md:py-2'>
                    Welcome to my Portfolio
                  </span>
                  <h1 className='text-rotate block text-[18px] md:text-[35px] lg:text-[45px] font-medium text-gray-700 tracking-[0.8px] mb-6 '>{`I'm `}
                    <span className='border-r-[2px] font-medium text-gray-700'>{text}</span>
                  </h1>
                  <p className=' text-justify md:text-left hidden md:block text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-secondary-400 px-[2px] md:px-[5px]'>
                    I am an electrician who decided to quit my job to follow the dream of becoming a good 
                    app developer.
                  </p>
                  <p className='text-justify md:text-left text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-secondary-400 px-[2px] md:px-[5px]'>
                    More than just writing code, what I like is creating new and clever 
                    solutions. I think my biggest strengths are my desire to keep learning and my determination 
                    to try new things, even if they are outside of my comfort zone.
                  </p>
                </div>
                <div className='w-full flex justify-center md:justify-start'>
                  <button className='flex flex-row text-2xl text-[18px] text-gray-700 md:font-bold md:text-[20px] mt-[30px] md:mt-[60px] tracking-[0.8px] '>
                  <a target='blank' href='https://wa.me/+5359106524?text=Hola%20Jorge!%20Necesitamos%20de%20tus%20servicios'>
                      <span className='flex flex-row'>
                      
                      WhatsApp me
                        <BsWhatsapp size={25} className='animate-pinggg text-secondary-300 md:ml-[10px]' />
                        
                      </span>
                      </a> 

                  </button>
                </div>
            </div>

            <div className='col-span-1'>
              <div>
                  <div className='md:p-14 lg:p-0'>
                    <Image src={header720x720} alt="Headder"/>
                  </div>

                  <div className='flex w-[100%] h-[90px] relative bg-transparent  md:h-[110px] rounded-[15px] translate-y-[-40px] sm:translate-y-[-100px] lg:translate-y-[-50px]'>
                    <div className=' text-white flex flex-wrap relative flexjustify-start md:justify-center items-center pl-[15px] w-[100%] '>
                      <div className='z-[20] flex justify-center items-center rounded-full bg-primary-100  w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-primary-100'><FaReact size={30} /></div>
                      <div className='z-[19] translate-x-[-15px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandNextjs size={30} /></div>
                      <div className='z-[18] translate-x-[-30px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><TbBrandTailwind size={30} /></div>
                      <div className='z-[17] translate-x-[-45px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><FaBootstrap size={30} /></div>
                      <div className=' invisible z-[16] translate-x-[-60px] flex justify-center items-center rounded-full bg-primary-100 md:w-[50px] w-[40px] h-[40px] md:h-[50px] border border-primary-100'><SiJavascript size={30} /></div>
                      <div className=' invisible z-[15] translate-x-[-75px] flex justify-center items-center rounded-full bg-primary-100 w-[40px] h-[40px] md:w-[50px] md:h-[50px] border border-primary-100'><FaPlus size={30} /></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
      </div>

    </section>
  )
}
