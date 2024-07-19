import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Menu from "../micro_components/Menu";

const BurgerMenu = ({ closeBurger }) => {
  return (
    <div className="Popup">
      <div className="block">
        <div className="container">
          <div className="title"> </div>
          <div
            className="btn"
            onClick={() => {
              closeBurger(false);
            }}
          >
            <RxCross1 />
          </div>
        </div>
        <hr />
        <div className="container">
          <Menu/>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
