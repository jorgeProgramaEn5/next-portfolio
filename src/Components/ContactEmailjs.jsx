'use client'
import {contact_img} from '@/Assets/indice';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image'

export function ContactEmailjs() {

    const form = useRef();
    const [buttonText, setButtonText] = useState("send");
    const [buttonTextDesable, setButtonTextDesable] = useState("text-enable");
    const [buttonTextEnable, setButtonTextEnable] = useState("text-desable");


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m6g1ufi', 'template_bupwt18', form.current, 'PriAIdQ5OpabYNxw0')
        .then((result) => {
            console.log(result.text);
            setButtonText("Message sent successfully")
            setButtonTextDesable("text-desable")
            setButtonTextEnable("text-enable")
        }, (error) => {
            console.log(error.text);
            setButtonText("Ups! Something went wrong")
            setButtonTextDesable("text-desable")
            setButtonTextEnable("text-enable")
        });
    };
  
    return (
      <section className='contact' id='contact'>
              <div className='aling-items-center'>
                  <div md={6} className='imgContact'>
                      <Image src={contact_img} alt="contact" />
                  </div>

                    <div md={6} className='contact-form'>
                        <h2>Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <div sm={6} xs={6} className='px-1'>
                                    <input type="text" name="from_name"  placeholder='First Name' required/>
                                </div>
    
                                <div sm={6} xs={6} className='px-1'>
                                    <input type="text" name="from_lastname" placeholder='Last Name'/>
                                </div>
    
                                <div sm={6} xs={6} className='px-1'>
                                    <input type="email" name="from_email" placeholder='Email Address' required/>
                                </div>
    
                                <div sm={6} xs={6} className='px-1'>
                                    <input type="tel" name="phone" placeholder='Phone Number' required/>
                                </div>
    
                                <div className='col-text-area'>
                                    <textarea style={{ resize: "none" }} name="message" row="6" placeholder='Message' required></textarea>
                                    <input type="submit" value={buttonText} className={buttonTextDesable} onClick={()=>setButtonText("Sending...")}/>
                                    <input type="submit" value={buttonText} className={buttonTextEnable} disabled/>
                                </div>
                            </div>
                        </form>
                    </div>
              </div>
      </section>
    )
  }