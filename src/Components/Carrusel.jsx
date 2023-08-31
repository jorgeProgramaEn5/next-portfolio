'use client';
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { meterSkills } from '@/Constant/indice';
import {meter1, meter2, meter3, meter4} from '@/Assets/indice';





export function Carrusel() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  return (
  <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={3000} className='skill-slider w-full'>
    {/* <div className='flex justify-center items-center flex-col'>
        <Image src={meter1} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5 className='text-[16px] md:text-[20px] pt-3 text-gray-700 font-medium'>Nextjs/React</h5>
    </div>
    <div className='text-[16px] md:text-[20px] flex justify-center items-center flex-col'>
        <Image src={meter2} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5 className='pt-3 text-gray-700 font-medium'>JavaScript</h5>
    </div>
    <div className='text-[16px] md:text-[20px] flex justify-center items-center flex-col'>
        <Image src={meter3} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5 className='pt-3 text-gray-700 font-medium'>HTML/CSS/Tailwind</h5>
    </div>
    <div className='text-[16px] md:text-[20px] flex justify-center items-center flex-col'>
        <Image src={meter4} alt="img_meter" className='w-[50%] md:w-[40%]'/>
        <h5 className='pt-3 text-gray-700 font-medium'>Enthusiasm For Learning</h5>
    </div> */}

    {/* <div className='w-10 h-10 bg-primary-100'>
      caja1
    </div>
    <div className='w-10 h-10 bg-primary-100'>
      caja2
    </div>
    <div className='w-10 h-10 bg-primary-100'>
      caja3
    </div> */}

    {
      meterSkills.map(skill => (
        <div key={skill.id} className='text-[16px] md:text-[20px] flex justify-center items-center flex-col'>
          <Image src={skill.image} alt="img_meter" className='w-[40%] sm:w-[30%] md:w-[20%]'/>
          <h5 className='pt-3 text-center text-[14px] sm:text-[18px] tracking-[0.8px] leading-6 md:leading-8 text-colortext-100/90'>{skill.title}</h5>
        </div>
      ))
    }
  </Carousel>
  )
}




