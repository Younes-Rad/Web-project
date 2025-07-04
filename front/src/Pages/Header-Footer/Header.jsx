import React from "react";
import "./Styles/Header.css";
import {SearchNormal1, Login, ShoppingCart} from "iconsax-reactjs";

function Header() {
    return (
        <>
            <section className="header-container">

                <div className="header-logo">
                    <a href="#"><img src="/Header-Footer/logo.png" alt="site-logo"/></a>
                    <a href="#"><img src="/Header-Footer/site-name-logo.png" alt="site logo" /></a>
                </div>
                
                <div className="header-search">
                    <input type="text" className="header-search-textbox" placeholder="جستجو"/>
                    <button className="header-search-icon"><SearchNormal1 size="1.5rem" color="#A72F3B"/></button>
                </div>

                <div className="header-shoppingCart-login">
                    <div className="header-login">
                        <a href="#">
                            <Login size="1.5rem" color="#434343"/>
                        </a>
                        <a href="#">
                            ورود | ثبت نام  
                        </a>
                    </div>

                    <div className="header-shopping-card">

                        <div>
                            <a href="#">
                                <ShoppingCart size="1.5rem" color="#434343"/>
                            </a>
                            <div className="header-shopping-card-numner">0</div>
                        </div>
                        <a href="#">
                            سبد خرید
                        </a>
                    </div>
                </div> 

            </section>
            <div className="header-bellowline"></div>  
        </>
    );
}
  
export default Header;