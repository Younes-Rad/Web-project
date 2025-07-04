import React from "react";
// import React, { useState } from "react";
import "./Styles/Orders-history.css";

function CurrentProducts() {

    return (
        <>

            <section className="current-product-container">
                <div>سفارش جاری وجود ندارد.</div>
                <div>
                    <img src="/Orders-history/Illustration.png" alt="not exist photo" />
                </div>
            </section>
        </>
    );
}
  
export default CurrentProducts;
