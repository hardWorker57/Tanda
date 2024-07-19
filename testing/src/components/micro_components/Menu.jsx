import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
  return (
    <div className="menu">
      <RxHamburgerMenu />
      <ul>
        <li><a href="" className="menu_list">Все категории</a></li>
        <li><a href="" className="menu_list">Стать продавцом</a></li>
        <li><a href="" className="menu_list">О нас</a></li>
        <li><a href="" className="menu_list">Курьерам</a></li>
        <li><a href="" className="menu_list">Контакты</a></li>
        <li><a href="" className="menu_list">Доставка</a></li>
      </ul>
    </div>
  );
};

export default Menu;
