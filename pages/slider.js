// Import Swiper React components
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import {Scrollbar} from 'swiper';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

function Slide(props){
  return(
    
    <div className='shadow-lg text-center rounded-xl lg:flex lg:justify-evenly lg:bg-slate-400 md:bg-slate-400'>
          <div className='flex justify-center pt-10 pb-5 lg:px-5'>
          {props.presentation}
          </div>
          <div className='px-10 lg:mt-10 lg:mx-30 lg:justify-center'>
              <h1 className='text-xl md:text-2xl font-medium lg:text-3xl lg:text-slate-100 md:text-slate-100 dark:text-slate-100' >{props.Topic}</h1>
              <p  className='text-md py-5 leading-8  md:text-l lg:text-xl max-w-xl mx-auto lg:text-slate-100 md:text-slate-100 dark:text-slate-100'>
                {props.detail}
              </p>
          </div>
      </div>
    

  )
}

 
export default function Slider() {

    SwiperCore.use([Autoplay]);

  return (
    <div className='mx-5 md:mx-20 lg:mx-30'>
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
      <Slide 
          presentation = {<iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21410&amp;authkey=ABmssU5Yg5sSzl0&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="375px" height="250px" frameborder="0">This is an embedded 
            <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
            <a target="_blank" rel="noreferrer"  href="https://office.com/webapps">Office</a>.</iframe>}
              Topic="Architectural Design"
              detail="                  Architectural Design PowerPoint Template 
                  Showing the beauty of your finished work or renderings has just gotten easier.  
                  Display the interiors and the exteriors of your masterpiece using a modern style
                  PowerPoint template guaranteed to give the feel of luxury and homeliness in one."
      />
      </SwiperSlide>
      <SwiperSlide >
      <Slide
        presentation={
          <iframe src="https://onedrive.live.com/embed?cid=BBF5E1DD97802BDD&amp;resid=BBF5E1DD97802BDD%21415&amp;authkey=ACsRrrEW8OH4f4g&amp;em=2&amp;wdAr=1.7777777777777777" width="375px" height="250px" frameborder="0">This is an embedded 
               <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
               <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe> 
        }
        Topic="Mental Health"
        detail="
                The Mental Health PowerPoint template is a simple eye-friendly
                 template that makes use of soft colours and fonts to pass on the message 
                 of safety, trust, and comfort. 
                 This could be used for a lecture or an awareness talk.
        "
      />
      </SwiperSlide>
      <SwiperSlide >
           <Slide
                 presentation={
                  <iframe src="https://onedrive.live.com/embed?resid=BBF5E1DD97802BDD%21418&amp;authkey=%21AJwlPb5FkkuIioI&amp;em=2&amp;wdAr=1.7777777777777777" width="375px" height="250px" frameborder="0">This is an embedded 
                   <a target="_blank"  rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by 
                   <a target="_blank"  rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe> 
                 }
                 Topic="Business Pitch"
                 detail="
                    Business Pitch Power-Pont Template 
                   This uses a formal yet engaging style to impress investors and
                    leave them more interested in your business idea than when you started off. 
                    This template is used to bring in the desired investments.
                 "
           />
      </SwiperSlide>...
    </Swiper></div></div>
  )
};
