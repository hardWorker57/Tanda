import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Rates = () => {

  const stars = [1, 2, 3, 4, 5];
  const rates = [
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
      "content": "Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима."
    }
  ];
  const title = useRef(null);
  gsap.fromTo(title.current, {skewX: -10, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true ,scrollTrigger: {trigger: title.current}});


  return (
    <div className="Rates" ref={title}>
      <div className="block_title rates">Отзывы</div>
      <div className="rates_info">
        <div className="title">4.9
          <div className="stars">{stars.map((star, i) => (
            < FaStar />
          ))}</div>
          <div className="rates_num">60 отзывов</div>
        </div>
        <div className="make_rate btn"><SlNote />Написать отзыв</div>
      </div>
      <div className="rates_block">
        <Swiper
          breakpoints={{
            390: {
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
      <button>Смотреть все отзывы</button>
    </div>
  );
};

export default Rates;
