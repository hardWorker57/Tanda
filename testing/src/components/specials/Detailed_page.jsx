import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import Popup from "./Popup";
import { gsap } from 'gsap';

const Detailed_page = ({ data }) => {

  const [showPopup, setShowPopup] = useState(false);
  const closePopup = (value) => {
    setShowPopup(value)
  }
  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: -10, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true});
    
    gsap.fromTo(dash.current, { opacity: 0, y: 100}, { opacity: 1, y: 0, duration: 1.3, delay: .6, ease: true });

    gsap.fromTo(block.current, {skewY: 10 ,y: -60, opacity: 0}, {skewY: 0 ,y: 0, opacity: 1, duration: .6, delay: .4, ease: true});
    
  }, [])

  return (
    <div>
      <div className="Detailed_page">
        <div ref={title} className="item_img item">
          {/* <img className="img" src={data ? data.barcode.images[0].url : '/lg.png'} alt="img" /> */}
          <img className="img" src={'/lg.png'} alt="img" />
        </div>
        <div ref={dash} className="item_data item">
          <div className="title">{data ? data.barcode.title : "title"}</div>
          <div className="store_info"><div className="store_title"><span><IoPersonOutline /></span>{data ? data.barcode.category.name : ''}</div><span>Бренд</span></div>
          <div className="rates"> <div className="star"><FaStar /></div> 4.9 <span className="btn">60 отзывов</span></div>
          <div className="desc_title">Описание</div>
          <div className="desc_content">{data ? data.barcode.description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, ut! Nulla, esse dignissimos eligendi rerum perspiciatis officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat accusantium, reiciendis aut quisquam cum eos rem minima modi harum totam vel, ducimus quam quod sequi ad repellat, est esse. Officia, quas architecto?"}</div>
          <div className="characteristics btn" onClick={() => {setShowPopup(true)}}>Смотреть характеристики</div>
        </div>
        <div ref={block} className="item_price item">
          <p className="price">{data ? data.barcode.sellingPrice : "59000"} сом <span>{data ? data.barcode.sellingPrice : "59000"} сом</span></p>
          <button className="dark_btn">Купить сейчас</button>
          <button>Оформить в кредит</button>
        </div>
      </div>
      {showPopup && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default Detailed_page;
