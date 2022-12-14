import Footer from './footer';
import Header from './header.js';
import NavBar from './navbar';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();
    const sendEmail = (e) => {
    
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              alert("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div>
            <Header/>
            <NavBar/>
            <section className=' min-h-fit'>
               <div className=' flex justify-center items-center flex-col'>
                    <div>
                       <h1 className='text-center text-2xl font-bold lg:font-bold lg:text-3xl mb-4'>Contact Us</h1>  
                    </div>
                    <div className='w-4/5 p-6 mb-20 rounded-lg shadow-lg bg-slate-400'>
                        <form ref={form} onSubmit={sendEmail}  className='mx-auto'>
                            <div className='my-3 mx-auto'>
                                <input type='text' name="user_name" required minLength={5} className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder='Enter Your Name'/>
                            </div>
                            <div className='my-3 mx-auto'>
                                <input type='email' name="user_email" required minLength={10} className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder='Enter Your Email'/>
                            </div>
                            <div className='my-3 mx-auto'>
                                <textarea name="message" required minLength={10} maxLength={200} className='w-full h-40 mt-2 p-4 outline-none border-none rounded-lg' placeholder='Type Your Message'/>
                            </div>
                            <button type='submit' className='w-full bg-gradient-to-r from-red-500 to-slate-600 text-white mt-2 p-4 outline-none border-none rounded-lg'>
                                Submit
                            </button>
                        </form>
                    </div>
  
               </div>

            </section>
            <Footer/>
        </div>
    )
}