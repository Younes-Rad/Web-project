import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import {Magicpen} from "iconsax-reactjs";
import MobileCase from "./Mobile-case";

function Navigation() {
    const [isMobileCaseVisible, setIsMobileCaseVisible] = useState(false);
    const mobileCaseRef = useRef(null);

    const toggleMobileCase = () => {
        setIsMobileCaseVisible(prevState => !prevState);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (mobileCaseRef.current && !mobileCaseRef.current.contains(event.target)) {
                setIsMobileCaseVisible(false);
            }
        }

        if (isMobileCaseVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileCaseVisible]);

    return (
        <>
            <section className="Navigation-container">
                <button className="Navigation-redbutton">
                    <span><Magicpen size="24px" color="#FFFFFF"/></span>
                    <span id="Navigation-redbutton-text">خودت طراحیش کن!</span>
                </button>
                <div className="Navigation-otherbutton">
                    <button className="Navigation-otherbutton-item">پوشاک</button>
                    <button className="Navigation-otherbutton-item">لوازم خانگی</button>
                    <div ref={mobileCaseRef} className="Navigation-mobilecase-wrapper">
                        <button
                            className="Navigation-otherbutton-item"
                            onClick={toggleMobileCase}
                        >
                            قاب موبایل
                        </button>
                        {isMobileCaseVisible && <MobileCase />}
                    </div>
                    <button className="Navigation-otherbutton-item">اکسسوری</button>
                    <button className="Navigation-otherbutton-item">مدرسه و اداره</button>
                    <button className="Navigation-otherbutton-item">کارت و پوستر</button>
                    <button className="Navigation-otherbutton-item">جشن و مهمانی</button>
                </div>
            </section>
        </>
    );
}
  
export default Navigation;

 