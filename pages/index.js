import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
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
          <nav className=' bg-slate-300 px-7 py-3  mb-12 flex justify-between'>
             <Image src="/mos1.png" alt="navimage" width={150} height={50}/>
             <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
                <li><a className=' bg-gradient-to-r from-red-500 to-slate-600 text-white px-4 py-2 border-none rounded-md ml-8' href="#contact_me">contact me</a></li>
             </ul> 
          </nav>
          <div className='mx-10'>
            <div className='shadow-lg text-center rounded-xl p-10 my-10 lg:flex '>
               <div className='relative mx-auto w-40 h-40 lg:mx-auto'>
                   <Image src="/mos3.png" alt="brand image" width={150} height={150}/>
               </div>
              <div>
                <Image className='relative mx-auto my-2'  src="/mos6.png" alt="brandName" width={150} height={30}/>
                 
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl lg:text-2xl max-w-xl mx-auto dark:text-slate-100'>Mossiak Designs is a company that empowers our customers through 
                  the influence of creative designs. We pride ourselves on working with 
                  different creatives who are talented in their own pursuits to provide the 
                  best design solutions.
                </p>
              </div>
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
