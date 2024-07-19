import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const Footer = () => {

  const companies = ['О нас', 'Способы оплаты', 'Доставка', 'Политика конфиденциальности', 'Персональные данные'];
  const partners = ['Продавайте на UNO', 'Курьерам'];
  const contacts = ['unokg@gmail.com', '+996 700 000 000', '+996 500 000 000'];

  return ( 
    <div className='footer'>
      <div className="container">
        <div className="links">
          <div className="logo prime_logo">
            <div className="item"><span><GiShoppingBag /></span>tanda</div>
            <div className="item"><a href="https://www.instagram.com/"><FaInstagram /></a><a href="https://web.whatsapp.com/"><FaWhatsapp /></a></div>
          </div>
        </div>
        <div className="company footer_item">
          <div className="title">Компания</div>
          {companies.map((el, i) => (
            <a href='' key={i}>{el}</a>
          ))}
        </div>
        <div className="partners footer_item">
          <div className="title">Партнерам</div>
          {partners.map((el, i) => (
            <a href='' key={i}>{el}</a>
          ))}
        </div>
        <div className="contacts footer_item">
          <div className="title">Контакты</div>
          {contacts.map((el, i) => (
            <a href='' key={i}>{el}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer