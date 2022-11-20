import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link'
function NavBar(){
return(
    <div>
        <nav className=' bg-slate-300 py-3  mb-12 flex justify-between px-6 md:px-20 lg:px-30'>
            <Link href="/main"><Image className='cursor-pointer lg:w-200 lg:h-100'  src="/mos1.png" alt="navimage" width={150} height={50}/></Link>            <ul className='flex items-center'>
               <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
               <li><a className=' bg-gradient-to-r from-red-500 to-slate-600 text-white px-4 py-2 border-none rounded-md ml-8' href="/contact">contact me</a></li>
            </ul> 
        </nav>
    </div>
)
}
export default NavBar

