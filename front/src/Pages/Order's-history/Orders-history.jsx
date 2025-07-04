import React, { useState } from "react";
import "./Styles/Orders-history.css";
import DeliveredProduct from "./Delivered-product";
import CurrentProducts from "./Current-products";
import ReturnedProduct from "./Returned-product";
import ProfileSidebar from "../Components/Profile-sidebar";

import Header from "../Header-Footer/Header";
import Navigation from "../Components/Navigation-bar/Navigation";
import Footer from "../Header-Footer/Footer";

function OrdersHistory() {

    const [activeTab, setActiveTab] = useState("delivered");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    
    return (
        <>
            <Header />
            <Navigation />
            <section className="orders-history-container">
                <h1 id="orders-history-pageTitle">پروفایل</h1>
                <section className="orders-history-mainContent">
                    <ProfileSidebar />
                    <div className="orders-history-widnow">
                        <h2 className="orders-history-widnow-title">تاریخچه سفارشات</h2>
                        <div className="orders-history-widnow-tabsButton">
                        <button
                                className={`orders-history-widnow-tabsButton-current ${activeTab === "current" ? "active" : ""}`}
                                onClick={() => handleTabClick("current")}
                            >
                                جاری ۰
                            </button>
                            <button
                                className={`orders-history-widnow-tabsButton-delivered ${activeTab === "delivered" ? "active" : ""}`}
                                onClick={() => handleTabClick("delivered")}
                            >
                                تحویل شده ۲۶
                            </button>
                            <button
                                className={`orders-history-widnow-tabsButton-returned ${activeTab === "returned" ? "active" : ""}`}
                                onClick={() => handleTabClick("returned")}
                            >
                                مرجوع شده ۴
                            </button>
                            <button className="orders-history-widnow-tabsButton-nothin">لغو شده ۴</button>
                        </div>
                        <div className="orders-history-widnow-line"></div>

                        <div className="orders-history-productsContainer">
                            {activeTab === "current" && <CurrentProducts />}
                            {activeTab === "delivered" && (
                                <>
                                    <DeliveredProduct />
                                    <DeliveredProduct />
                                    <DeliveredProduct />
                                    <DeliveredProduct />
                                </>
                            )}
                            {activeTab === "returned" && (
                                <>
                                    <ReturnedProduct />
                                    <ReturnedProduct />
                                    <ReturnedProduct />
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}
  
export default OrdersHistory;
