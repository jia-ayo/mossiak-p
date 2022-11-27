import Footer from './footer';
import Header from './header.js';
import NavBar from './navbar';

export default function Contact(){
    return(
        <div>
            <Header/>
            <NavBar/>
            <section className='min-h-screen'>
               <div className=' flex justify-center items-center flex-col'>
                    <div>
                       <h1 className='text-center text-2xl font-bold mb-4'>Contact Us</h1>  
                    </div>
                    <div className='w-4/5 p-6 rounded-lg shadow-lg bg-slate-400'>
                        <form  className='mx-auto'>
                            <div className='my-3 mx-auto'>
                                <input type='text' required minlength="5" className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder='Enter Your Name'/>
                            </div>
                            <div className='my-3 mx-auto'>
                                <input type='email' required minLength={10} className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder='Enter Your Email'/>
                            </div>
                            <div className='my-3 mx-auto'>
                                <textarea required minlength={30} maxlength={200} className='w-full h-40 mt-2 p-4 outline-none border-none rounded-lg' placeholder='Type Your Message'/>
                            </div>
                            <button type='submit' className='w-full bg-gradient-to-r from-red-400 to-slate-600 text-white mt-2 p-4 outline-none border-none rounded-lg'>
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