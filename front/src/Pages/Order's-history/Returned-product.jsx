import React from "react";
import "./Styles/Orders-history.css";
import {ArrowLeft2, CloseCircle, InfoCircle} from "iconsax-reactjs";

function ReturnedProduct() {

    return (
        <>
            <section className="returned-product-container">
                <div className="returned-product-title">
                    <div className="returned-product-title-text">
                        <span className="returned-product-title-text-gray">۳ شهریور ۱۴۰۲</span>
                        <div><span className="returned-product-title-text-gray">کد پیگیری مرجوعی</span> ۳۵۴۵۳۴۵۲۱</div>
                    </div>
                    <div className="returned-product-icon"><ArrowLeft2 size="24" color="#A72F3B"/></div>
                </div>
                <div className="returned-product-box">
                    <div className="returned-product-box-title">
                        <CloseCircle size="24" color="#ED2E2E" variant="Bold"/>
                        <span>درخواست رد شده است</span>
                    </div>
                    <div className="returned-product-box-item">
                        <div className="returned-product-box-image">
                            <img src="/Orders-history/i8.png" alt="" />
                        </div>
                        <div className="returned-product-box-info">
                            <div className="returned-product-box-info-name">
                                قاب گوشی گربه ای    
                            </div>
                            <div className="returned-product-box-info-exp">
                                <InfoCircle size="20" color="#d9e3f0" variant="Bold"/>
                                 محصول با طرح اشتباه ارسال شده است 
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    );
}
  
export default ReturnedProduct;
