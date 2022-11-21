// Import Swiper React components
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import {Scrollbar} from 'swiper';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

 
export default function Slider() {

    SwiperCore.use([Autoplay]);

  return (
    <div className='mx-7 md:mx-20 lg:mx-30'>
    <div className=' '>
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      Loop={true}
      autoplay= {{
        delay: 5000
      }}
    >
      <SwiperSlide >
      <div className='shadow-lg text-center rounded-xl lg:flex lg:justify-evenly bg-slate-300 '>
            <div className='flex justify-center pt-10 pb-5 lg:px-5'>
            <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21410&amp;authkey=ABmssU5Yg5sSzl0&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="375px" height="250px" frameborder="0">This is an embedded 
            <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
            <a target="_blank" rel="noreferrer"  href="https://office.com/webapps">Office</a>.</iframe>
            </div>
            <div className='px-10 lg:mt-10 lg:mx-30 lg:justify-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl' >Architectural Design</h1>
                <p  className='text-md py-5 leading-8 text-gray-800 md:text-l lg:text-xl max-w-xl mx-auto dark:text-slate-100'>
                  Architectural Design PowerPoint Template 
                  Showing the beauty of your finished work or renderings has just gotten easier.  
                  Display the interiors and the exteriors of your masterpiece using a modern style
                  PowerPoint template guaranteed to give the feel of luxury and homeliness in one.
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className='shadow-lg text-center rounded-xl lg:flex lg:justify-evenly bg-slate-300 '>
            <div className='flex justify-center pt-10 pb-5 lg:px-5'>
               <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21415&amp;authkey=ACsRrrEW8OH4f4g&amp;em=2&amp;wdAr=1.7777777777777777" width="375px" height="250px" frameborder="0">This is an embedded 
               <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
               <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>           
            </div>
            <div className='px-10 lg:mt-10 lg:mx-30 lg:justify-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl' >Mental Health</h1>
                <p  className='text-md py-5 leading-8 text-gray-800 md:text-l lg:text-xl max-w-xl mx-auto dark:text-slate-100'>
                The Mental Health PowerPoint template is a simple eye-friendly
                 template that makes use of soft colours and fonts to pass on the message 
                 of safety, trust, and comfort. 
                 This could be used for a lecture or an awareness talk.
                </p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='shadow-lg text-center rounded-xl lg:flex lg:justify-evenly bg-slate-300 '>
            <div className='flex justify-center pt-10 pb-5 lg:px-5'>
            <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21414&amp;authkey=AAKn4868xhnxuhA&amp;em=2&amp;wdAr=1.7777777777777777" width="375px" height="250px" frameborder="0">This is an embedded 
            <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
            <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>          
            </div>
            <div className='px-10 lg:mt-10 lg:mx-30 lg:justify-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl'>Business Pitch</h1>
                <p  className='text-md py-5 leading-8 text-gray-800 md:text-l lg:text-xl max-w-xl mx-auto dark:text-slate-100'>
                  Business Pitch Power-Pont Template 
                   This uses a formal yet engaging style to impress investors and
                    leave them more interested in your business idea than when you started off. 
                    This template is used to bring in the desired investments.
                </p>
            </div>
        </div>
      </SwiperSlide>

      ...
    </Swiper></div></div>
  )
};
