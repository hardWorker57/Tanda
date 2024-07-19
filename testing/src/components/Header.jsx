import React, { useEffect, useRef, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { gsap } from 'gsap';
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./specials/BurgerMenu";

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
  const closeBurger = (value) => {
    setShowBurger(value)
  }
  const title = useRef(null);
  const dash = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    gsap.fromTo(title.current, {skewX: 40, x: -100, opacity: 0}, {skewX: 0, x: 0, opacity: 1, duration: .6, delay: .4, ease: true});
    
    gsap.fromTo(dash.current, { opacity: 0}, { opacity: 1, duration: 1.3, delay: .6, ease: true });

    gsap.fromTo(block.current, {skewY: 10 ,y: 60, opacity: 0}, {skewY: 0 ,y: 0, opacity: 1, duration: .6, delay: .4, ease: true});
    
  }, [])

  return (
    <div className="header">
      <div className="container">
        <div className="logo" ref={title}><span><GiShoppingBag /></span>tanda</div>
        <div className="search" ref={dash}>
          <CiSearch /><input placeholder="Искать на UNO" type="search" name="" id="" />
        </div>
        <div className="profile" ref={block}>
          <div className="item btn hide"><CiSearch /></div>
          <div className="login item btn" ><IoPersonOutline /><span>Войти</span></div>
          <div className="cart item btn"><IoCartOutline /><span>Корзина</span></div>
          <div className="burger item btn hide" onClick={() => {setShowBurger(true)}}><RxHamburgerMenu /></div>
        </div>
      </div>
      {showBurger && <BurgerMenu closeBurger={closeBurger} />}
    </div>
  );
};

export default Header;
