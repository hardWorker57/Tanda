import React from 'react'
import { FaStar } from "react-icons/fa";

const Similar_goods = () => {
  
  const stars = [1, 2, 3, 4, 5];
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="Similar_goods">
      <div className='block_title'>Похожие товары</div><br />
      <div className="cards">
        {data.map((card, i) => (
          <div className="card" key={i}>
            <img src='md.png' alt="img" className='img'/>
            <div className='title'>title</div>
            <span>Швейная машина</span>
            <div className="rates">{stars.map((star, i) => (
              <div className="star" key={i}><FaStar/></div>
            ))} 0 отзывов</div>
            <div className="price">50 900 сом</div>
            <button className='dark_btn'>Купить сейчас</button>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Similar_goods