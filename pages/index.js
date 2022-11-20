import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mossiak</title>
        <meta name="description" content="mossiak powerpoint creating content lead desiginer elvina" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main >
        <section className='min-h-screen'>
          <nav className=' bg-slate-300 py-3  mb-12 flex justify-between px-10 md:px-20 lg:px-30'>
             <Image src="/mos1.png" alt="navimage" width={150} height={50}/>
             <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
                <li><a className=' bg-gradient-to-r from-red-500 to-slate-600 text-white px-4 py-2 border-none rounded-md ml-8' href="#contact_me">contact me</a></li>
             </ul> 
          </nav>
          <div className='mx-10 md:mx-20 lg:mx-30'>
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
                   <a href="" target="_blank"><AiFillLinkedin/></a>
                   <a href="" target="_blank"><AiFillTwitterCircle/></a>
                   <a href="" target="_blank"><AiFillInstagram/></a>
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
        <div className="md:flex gap-10 lg:flex lg:relative lg:justify-center">
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100 dark:shadow-slate-600/40">
             <h3 className="text-lg font-medium pt-8 pb-2">SmartContract development</h3>
             <h4 className="py-4 text-teal-600 ">The Tools I Use</h4>
             <p className="text-gray-800 py-1">Rust</p>
             <p className="text-gray-800 py-1">Metaplex</p>
             <p className="text-gray-800 py-1">solidity</p>

          </div>
        </div>
        
      </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jia-ayo/mossiak-p"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by {' '}
          <span className={styles.logo}>
            <Image src="/jiaFav.png" alt="jia Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
