'use client'
import {contact_img} from '@/Assets/indice';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'

export function ContactEmailjs() {

    const form = useRef();
    const [buttonText, setButtonText] = useState("send");
    const [buttonTextDesable, setButtonTextDesable] = useState("flex");
    const [buttonTextEnable, setButtonTextEnable] = useState("hidden");


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m6g1ufi', 'template_bupwt18', form.current, 'PriAIdQ5OpabYNxw0')
        .then((result) => {
            console.log(result.text);
            setButtonText("Message sent successfully")
            setButtonTextDesable("hidden")
            setButtonTextEnable("flex")
        }, (error) => {
            console.log(error.text);
            setButtonText("Ups! Something went wrong")
            setButtonTextDesable("hidden")
            setButtonTextEnable("flex")
        });
    };
  
    return (
      <section className=' bg-primary-100 pt-[60px] pb-[20px] md:pb-[60px]' id='contact'>
        <div className=' container m-auto flex justify-center items-center'>
          <div className=' grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-center items-center pl-4 md:pl-0'>
              <div className='w-[92%] lg:w-[80%] md:h-[75%] lg:h-[92%]'>
                  <Image src={contact_img} alt="contact" />
              </div>
            </div>
            
            <div>
              <div className='flex flex-col justify-center items-center md:items-end'>
                  <h2 className='text-[18px] md:text-[35px] lg:text-[45px] md:mr-4 md:mb-4'>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                      <div className='grid grid-cols-1'>
                        
                        <div className='grid grid-cols-2 px-2 py-1'>
                          <div className='px-1'>
                              <input className=' focus:opacity-90 focus:bg-white focus:text-[#121212] w-[100%] text-white font-medium text-[14px] md:text-[18px] tracking-[0.8px] bg-white bg-opacity-10 border border-solid rounded-[20px] border-opacity-50 border-white py-[10px] md:py-[18px] px-[18px] md:px-[26px] transition-all duration-[0.5s] ease-in-out' type="text" name="from_name"  placeholder='First Name' required/>
                          </div>

                          <div className='px-1 '>
                              <input className='focus:opacity-90 focus:bg-white focus:text-[#121212] w-[100%] text-white font-medium text-[14px] md:text-[18px] tracking-[0.8px] bg-white bg-opacity-10 border border-solid rounded-[20px] border-opacity-50 border-white py-[10px] md:py-[18px] px-[18px] md:px-[26px] transition-all duration-[0.5s] ease-in-out' type="text" name="from_lastname" placeholder='Last Name'/>
                          </div>
                        </div>

                        <div className='grid grid-cols-2 px-2 py-1'>
                          <div className='px-1'>
                              <input  className='focus:opacity-90 focus:bg-white focus:text-[#121212] w-[100%] text-white font-medium text-[14px] md:text-[18px] tracking-[0.8px] bg-white bg-opacity-10 border border-solid rounded-[20px] border-opacity-50 border-white py-[10px] md:py-[18px] px-[18px] md:px-[26px] transition-all duration-[0.5s] ease-in-out' type="email" name="from_email" placeholder='Email Address' required/>
                          </div>

                          <div className='px-1'>
                              <input className='focus:opacity-90 focus:bg-white focus:text-[#121212] w-[100%] text-white font-medium text-[14px] md:text-[18px] tracking-[0.8px] bg-white bg-opacity-10 border border-solid rounded-[20px] border-opacity-50 border-white py-[10px] md:py-[18px] px-[18px] md:px-[26px] transition-all duration-[0.5s] ease-in-out' type="tel" name="phone" placeholder='Phone Number' required/>
                          </div>
                        </div>

                        <div className='flex flex-col px-3 py-1'>
                            <textarea className='focus:opacity-90 focus:bg-white focus:text-[#121212] w-[100%] text-white font-medium text-[14px] md:text-[18px] tracking-[0.8px] bg-white bg-opacity-10 border border-solid rounded-[20px] border-opacity-50 border-white py-[10px] md:py-[18px] px-[18px] md:px-[26px] transition-all duration-[0.5s] ease-in-out' style={{ resize: "none" }} name="message" row="6" placeholder='Message' required></textarea>
                            <input type="submit" value={buttonText} className={`${buttonTextDesable} font-bold text-[#ffffffcb] text-center hover:text-black bg-white  bg-opacity-40 hover:opacity-90 hover:bg-white border border-solid rounded-[20px] border-opacity-50 border-white mt-2 py-[14px] px-[48px]`} onClick={()=>setButtonText("Sending...")}/>
                            <input type="submit" value={buttonText} className={`${buttonTextEnable} font-bold text-[#ffffffcb] text-center hover:text-black bg-white  bg-opacity-10 hover:opacity-90 hover:bg-white border border-solid rounded-[20px] border-opacity-50 border-white mt-2 py-[14px] px-[48px]`} disabled/>
                        </div>
                      </div>
                  </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }