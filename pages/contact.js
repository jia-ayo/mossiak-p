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
                       <h1 className='text-center text-2xl font-medium'>Contact Us</h1>  
                    </div>
                    <div className='w-2/5'>
                        <form>
                            <div className='my-3 mx-auto'>
                                <input type='text'/>
                            </div>
                        </form>
                    </div>
  
               </div>

            </section>
            <Footer/>
        </div>
    )
}