import React, { useState } from 'react'
import Menu from './micro_components/Menu'
import Rates from './Rates'
import Similar_goods from './Similar_goods'
import Detailed_page from './specials/Detailed_page'
import GetData from './specials/GetData2'

const Main = () => {
  const [newData, setData] = useState([])
  
  const getData = (data) => {
    setData(data);
  }

  return (
    <div className='Main'>
      <div className="single_container">
        <Menu />
        <div>Главная / Бытовая техника / Стиральные машины</div>
        <GetData getData={getData} />
        <Rates />
        <Similar_goods newData={newData} />
      </div>
    </div>
  )
}

export default Main