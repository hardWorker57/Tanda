import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { FaStar } from "react-icons/fa";

const Similar_goods = ({newData}) => {
  
  const stars = [1, 2, 3, 4, 5];
  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: -10, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true ,scrollTrigger: {trigger: title.current}});
    gsap.fromTo(dash.current, { x: 100, opacity: 0}, { x: 0, opacity: 1, duration: .8, delay: .6, ease: true ,scrollTrigger: {trigger: title.current}});
  }, [])

  return (
    <div className="Similar_goods">
      <div className='block_title' ref={title}>Похожие товары</div><br />
      <div className="cards" ref={dash}>
        {data.map((i, newData ) => (
          <div className="card" key={i}>
            <img src='md.png' alt="img" className='img'/>
            <div className='title'>{newData && newData.barcode ? newData.barcode.title : 'title'}{ console.log(newData && newData.barcode ? newData.barcode.title : 'title') }</div>
            <span>Швейная машина</span>
            <div className="rates">{stars.map((star, i) => (
              <div className="star" key={i}><FaStar/></div>
            ))} 0 отзывов</div>
            <div className="price">{ newData && newData.barcode ? newData.barcode.sellingPrice : '50 900 сом'}</div>
            <button className='dark_btn'>Купить сейчас</button>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Similar_goods