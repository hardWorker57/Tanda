import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Rates = () => {

  const stars = [1, 2, 3, 4, 5];
  const [rates, setRates] = useState([
    {
      "title": "Saikal",
      "time": "17 мая 2023, 20:46",
      "content": "Отлично шьёт, покупкой довольна."
    },
    {
      "title": "Saikal",
      "time": "17 мая 2023, 20:46",
      "content": "Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима."
    },
    {
      "title": "Saikal",
      "time": "17 мая 2023, 20:46",
      "content": "Отлично шьёт, покупкой довольна."
    },
    {
      "title": "saikal",
      "time": "17 мая 2023, 20:46",
      "content": "Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима. "
    }
  ]);
  const [newReview, setNewReview] = useState({ title: '', time: '', content: '' });
  const [showAll, setShowAll] = useState(false);

  const handleAddReview = () => {
    const currentTime = new Date().toLocaleString();
    setRates([...rates, { ...newReview, time: currentTime }]);
    setNewReview({ title: '', time: '', content: '' });
  };
  const handleShowAllReviews = () => {
    setShowAll(!showAll);
  };

  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: -10, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true ,scrollTrigger: {trigger: title.current}});
    gsap.fromTo(dash.current, { x: 100, opacity: 0}, { x: 0, opacity: 1, duration: .8, delay: .6, ease: true ,scrollTrigger: {trigger: title.current}});
    gsap.fromTo(block.current, { x: 40, opacity: 0}, { x: 0, opacity: 1, duration: .7, delay: .5, ease: true ,scrollTrigger: {trigger: title.current}});
  }, [])
  
  return (
    <div className="Rates" >
      <div className="block_title rates" ref={title}>Отзывы</div>
      <div className="rates_info" ref={block}>
        <div className="title">4.9
          <div className="stars" >{stars.map((star, i) => (
            < FaStar />
          ))}</div>
          <div className="rates_num">{rates.length} отзывов</div>
        </div>
        <div className="make_rate btn" onClick={handleAddReview}><SlNote />Написать отзыв</div>
      </div>
      <div className="rates_block" ref={dash}>
        <div>
          <div className="rate_wrap">
            {rates.slice(0, showAll ? rates.length : '').map((rate, index) => (
              <div className="rate list" key={index}>
                <div className="">
                  <h3>{rate.title}</h3>
                  <p>{rate.time}</p>
                  <p>{rate.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={showAll ? 'hide' : ''}>
             <Swiper
               breakpoints={{
                 490: {
                   slidesPerView: 2,
                 },
                 768: {
                   slidesPerView: 3,
                 },
               }}
               modules={[Navigation]}
               spaceBetween={10}
               loop={true}
               slidesPerView={1}
               navigation
             >
               {rates.map((rate, i) => (
                 <SwiperSlide >
                   <div className="rate" key={i}>
                     <div className="content_wrap">
                       <div className="title">
                         <div className="user_block">
                           <div className="user_img"></div>
                           <div className="user_data">
                             <div className="user_name">{rate.title}</div>
                             <div className="time">{rate.time}</div>
                           </div>
                         </div>
                         <div className="user_rate">
                           <div className="stars">
                             {stars.map((star, i) => (
                               <div className="star" key={i}>< FaStar /></div>
                             ))}
                           </div>
                         </div>
                       </div>
                       <div className="content">
                         {rate.content}
                       </div>
                     </div>
                     <div className="blame"><span>Пожаловаться на отзыв</span></div>
                   </div>
                 </SwiperSlide>
               ))}
            </Swiper>
            </div>
           </div>
      </div>
      <button onClick={handleShowAllReviews}>{showAll ? 'Скрыть отзывы' : 'Смотреть все отзывы'}</button>
    </div>
  );
};

export default Rates;
