import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Popup = ({ closePopup }) => {
  return (
    <div className="Popup">
      <div className="block">
        <div className="container">
          <div className="title">Характеристики</div>
          <div
            className="btn"
            onClick={() => {
              closePopup(false);
            }}
          >
            <RxCross1 />
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="content">
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Управление</p>
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Управление</p>
            <p>Управление</p>
          </div>
          <div className="content">
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Управление</p>
            <p>Способ установки</p>
            <p>Напряжение</p>
            <p>Цвет</p>
            <p>Материал</p>
            <p>Управление</p>
            <p>Управление</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="buy">
            <div className="block">
            100000 сом<span>99000 сом</span>
            </div>
            <button className="dark_btn">Купить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
