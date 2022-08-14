import React from "react";
import { MdShoppingBag, MdOutlineShoppingCart } from "react-icons/md";

import './Header.css';

const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                      <MdShoppingBag size="40px" />
                      <h1 class="eShop">eShop</h1>
                </div>

                <div className="header-search">
                    <input type="text" name= "search" placeholder="Search" />

                </div>

                <div className="header-nav"> 
                     <div className="header-nav-signin">
                        <h1>sign in</h1>

                     </div>

                     <div className="header-nav-your-shop">
                        <h1>Your Shop</h1>

                     </div>

                    <div  className="header-nav-cart">
                        <MdOutlineShoppingCart size="40px"/>
                    </div>
                </div>
        </header>
    );
}

export default Header;