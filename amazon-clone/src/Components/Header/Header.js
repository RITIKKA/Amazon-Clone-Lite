import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";


import './Header.css';

const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                      <AiOutlineShop class="bag" size="60px" />
                      <h1 class="eShop">eShop</h1>
                </div>

                <div className="header-search">
                    <input type="search" name="search" placeholder="Search"  />
                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">
                        <h1>sign in</h1>

                     </div>

                     <div className="header-nav-your-shop">
                        <h1>Your Shop</h1>

                     </div>

                    <div  className="header-nav-cart">
                        <MdOutlineShoppingCart size="70px"/>
                    </div>
                </div>
        </header>
    );
}

export default Header;
