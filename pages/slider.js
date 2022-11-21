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
    <div className='mx-10 md:mx-20 lg:mx-30'>
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
      <SwiperSlide className='flex justify-center pt-3 '>
        <div >
            <div className='relative mx-auto lg:mx-auto lg:mt-20 '>
            <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21410&amp;authkey=ABmssU5Yg5sSzl0&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="375px" height="250px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            </div>
            <div>
                
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center pt-3'>
      <div >
            <div className='relative mx-auto lg:mx-auto lg:mt-20 '>
            <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21415&amp;authkey=ACsRrrEW8OH4f4g&amp;em=2&amp;wdAr=1.7777777777777777" width="375px" height="250px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>           </div>
            <div>
                
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center pt-3'>Slide 3</SwiperSlide>

      ...
    </Swiper></div></div>
  )
};