import Header from './header';
import Image from 'next/image';
import NavBar from './navbar.js';
import Footer from './footer';
import Slider from './slider';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
export default function Main() {
  return (
    <div>
      <Header/>
      <main >
        <section className='min-h-screen'>
          <NavBar/>
          <div className='mx-5 md:mx-20 lg:mx-30'>
            <div className='shadow-lg text-center rounded-xl p-10 my-10 lg:flex lg:justify-evenly bg-slate-300 '>
               <div className='relative mx-auto w-40 h-40 lg:mx-auto lg:mt-20 '>
                   <Image className='lg:pr-1 lg:w-250 lg:h-250'  src="/mos3.png" alt="brand image" width={150} height={150}/>
               </div>
              <div className='lg:mx-30'>
                <Image className='relative mx-auto my-2 lg:w-250 lg:h-100'  src="/mos6.png" alt="brandName" width={150} height={30}/>
                 
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl lg:text-2xl max-w-xl mx-auto dark:text-slate-100'>Mossiak Designs is a company that empowers our customers through 
                  the influence of creative designs. We pride ourselves on working with 
                  different creatives who are talented in their own pursuits to provide the 
                  best design solutions.
                </p>
                <div className="text-4xl flex justify-center gap-10 py-2 text-gray-600 dark:text-slate-100">
                   <a href="https://www.linkedin.com/company/mossaik-designs/" rel="noreferrer" target="_blank"><AiFillLinkedin/></a>
                   <a href="https://twitter.com/EIghoraye?t=WxdWD91R_zRysKKFs7rAYA&s=08" rel="noreferrer" target="_blank"><AiFillTwitterCircle/></a>
                   <a href="https://www.instagram.com/mossaik.designs?r=nametag" rel="noreferrer" target="_blank"><AiFillInstagram/></a>
               </div>
              </div>

            </div>
          </div>
        </section>
        <section className='mx-7 lg:mx-40'>
        <div className="text-center mt-2">
          <h3 className="text-3xl py-1 dark:text-slate-100">The Vision & Mission</h3>
          
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-100 md:text-l lg:text-xl">
            To provide design solutions and change the branding industry with the 
             use of creativity, technology and vast range of human talents within the 
             Africa atmosphere.
          </p>
          <p className="text-md mx-3 py-5 leading-8 text-gray-800 dark:text-slate-100 md:text-l lg:text-xl">
             To build a community of talents of different shades and talents to 
             pro-vide asthetically pleaseing, diverse and unique results.
          </p>
        </div>
      </section>
           <Slider/>
      <section>

      </section>
      </main>
      <Footer/>

    </div>
  )
}
