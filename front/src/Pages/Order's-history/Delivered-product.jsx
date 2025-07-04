import React from "react";
import "./Styles/orders-history.css";
import {TickCircle, Bill} from "iconsax-reactjs";

function DeliveredProduct() {
    
    return (
        <>
            <section className="DeliveredProduct-container">
                <div className="DeliveredProduct-delivered">
                    <TickCircle size="24" color="#00BA88" variant="Bold"/>
                    <span>تحویل شده</span>
                </div>
                <div className="DeliveredProduct-info">
                    <div className="DeliveredProduct-info-gray">
                        ۳ شهریور ۱۴۰۲
                    </div>
                    <div className="DeliveredProduct-info-containers">
                        <span className="DeliveredProduct-info-gray">کد سفارش</span>
                        <span className="DeliveredProduct-info-bold">۳۵۴۵۳۴۵۲۱</span>
                    </div>
                    <div className="DeliveredProduct-info-containers">
                        <span className="DeliveredProduct-info-gray">مبلغ</span>
                        <span className="DeliveredProduct-info-bold">۵۴۵,۰۰۰ تومان</span>
                    </div>
                    <div className="DeliveredProduct-info-containers">
                        <span className="DeliveredProduct-info-gray">تخفیف</span>
                        <span className="DeliveredProduct-info-bold">۵۴۵,۰۰۰ تومان</span>
                    </div>
                </div>
                <div className="DeliveredProduct-line"></div>
                <div className="DeliveredProduct-items">
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i1.png" alt="i1" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                    <img src="/Orders-history/i2.png" alt="i2" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i3.png" alt="i3" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i4.png" alt="i4" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i5.png" alt="i5" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i6.png" alt="i6" />
                    </div>
                    <div className="DeliveredProduct-items-i">
                        <img src="/Orders-history/i7.png" alt="i7" />
                    </div>
                </div>
                <div className="DeliveredProduct-line"></div>
                <div className="DeliveredProduct-button">
                    <Bill size="24" color="#A72F3B"/>
                    <button>مشاهده سفارش</button>
                </div>
            </section>
        </>
    );
}
  
export default DeliveredProduct;

 