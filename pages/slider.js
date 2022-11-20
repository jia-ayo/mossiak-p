// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import {Scrollbar} from 'swiper';
import Image from 'next/image';
import DocViewer from "react-doc-viewer";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

 
export default function Slider() {
    SwiperCore.use([Autoplay]);

  return (
    <div className='mx-10 md:mx-20 lg:mx-30'>
    <div className='shadow-lg text-center rounded-xl p-10 my-10 lg:flex lg:justify-evenly bg-slate-300 '>
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      Loop={true}
      autoplay= {{
        delay: 5000
      }}
    >
      <SwiperSlide className='flex justify-center'>
        <div >
            <div className='relative mx-auto w-40 h-40 lg:mx-auto lg:mt-20 '>
                   <Image className='lg:pr-1 lg:w-250 lg:h-250'  src="/mos3.png" alt="brand image" width={150} height={150}/>
            </div>
            <div>
                
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>

      ...
    </Swiper></div></div>
  )
};