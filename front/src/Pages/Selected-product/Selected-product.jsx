import React, { useState, useEffect } from "react";
import "./Styles/selected-product.css"; 
import StarRating from "./StarScore";
import UsersComment from "./Users-commet";
import SubmitReview from "./Submit-review";

import Header from "../Header-Footer/Header";
import Navigation from "../Components/Navigation-bar/Navigation";
import Footer from "../Header-Footer/Footer";

import {
    ArrowCircleDown2, ArrowUp2, ArrowDown2, ShoppingCart,
    Magicpen, Like1, Dislike, AddCircle as PositiveIcon, MinusCirlce as NegativeIcon, CloseCircle
} from "iconsax-reactjs";

const initialCommentsData = [
    {
        id: 1,
        author: "نگار زمانی",
        date: "۱۶ آذر ۱۴۰۲",
        rating: 4,
        text: "بسیار عالی و با کیفیت",
        positivePoints: ["خنک", "با کیفیت"],
        negativePoints: ["گران"],
        isBuyer: true,
    },
    {
        id: 2,
        author: "علی رضایی",
        date: "۲۰ آذر ۱۴۰۲",
        rating: 5,
        text: "طراحی زیبایی دارد و جنس آن خوب است.",
        positivePoints: ["طراحی زیبا", "جنس خوب", "ارسال سریع"],
        negativePoints: [],
        isBuyer: true,
    },
];


function SelectedProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments, setComments] = useState(initialCommentsData);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddComment = (newComment) => {
        setComments(prevComments => [
            { ...newComment, id: prevComments.length + 1, date: new Date().toLocaleDateString('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' }) },
            ...prevComments
        ]);
        handleCloseModal();
    };
    
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open-blur');
        } else {
            document.body.classList.remove('modal-open-blur');
        }
        return () => {
            document.body.classList.remove('modal-open-blur');
        };
    }, [isModalOpen]);


    return (
        <>
            <Header />
            <Navigation />
            <section className={`selected-product-wrapper ${isModalOpen ? 'blurred' : ''}`}>
                <section className="selected-product-container">
                    {/* بخش اطلاعات محصول */}
                    <section className="selected-product-information">
                        <div className="selected-product-information-pic">
                            <div className="selected-product-information-pic-small">
                                <div className="SPIPS-pics">
                                    <div className="SPIPS-pics-i">
                                        <img src="./Selected-profile/img-1.png" alt="cloth 1" />
                                    </div>
                                    <div className="SPIPS-pics-i SPIPS-pics-i-lo">
                                        <img src="./Selected-profile/c2.png" alt="cloth 2" />
                                    </div>
                                    <div className="SPIPS-pics-i SPIPS-pics-i-lo">
                                        <img src="./Selected-profile/c3.png" alt="cloth 3" />
                                    </div>
                                    <div className="SPIPS-pics-i SPIPS-pics-i-lo">
                                        <img src="./Selected-profile/c4.png" alt="cloth 4" />
                                    </div>
                                </div>
                                <div id="SPIPS-icon">
                                    <button>
                                        <ArrowCircleDown2 size="2.5rem" color="#86262F" />
                                    </button>
                                </div>
                            </div>

                            <div className="selected-product-information-pic-big">
                                <div className="SPIPB-pic">
                                    <img src="./Selected-profile/big-cloth.png" alt="product pic" />
                                </div>
                                <div className="SPIPB-colors">
                                    <button className="SPIPB-colors-i" id="SPIPB-c1"></button>
                                    <button className="SPIPB-colors-i" id="SPIPB-c2"></button>
                                    <button className="SPIPB-colors-i" id="SPIPB-c3"><ArrowUp2 size="16" color="#ffffff" /></button>
                                    <button className="SPIPB-colors-i" id="SPIPB-c4"></button>
                                    <button className="SPIPB-colors-i" id="SPIPB-c5"></button>
                                </div>
                            </div>
                        </div>

                        <div className="selected-product-information-datail">
                            <span id="SPID-title">مشخصات محصول</span>
                            <div id="SPID-line"></div>
                            <div className="SPID-text">
                                <span id="SPID-text-j">جنس: نخ،پلی استر</span>
                                <span id="SPID-text-sh">شستشو: با دست</span>
                                <span id="SPID-text-s">سایز ها: S, M, L, XL, XXL, XXXL </span>
                                <span id="SPID-text-c">رنگ ها: مشکی، سفید، قرمز، سبز، نارنجی، زرشکی، بنفش</span>
                                <span id="SPID-text-h">قد: ۶۰ سانتی متر </span>
                            </div>
                            <button id="SPID-size">M <ArrowDown2 size="16" color="#A72F3B" /></button>
                            <span id="SPID-price"> ۱۲۷,۰۰۰ تومان</span>
                            <div className="SPID-addcart">
                                <button id="SPID-addcart-shakhs"><Magicpen size="32" color="#A72F3B" /> شخصی سازی محصول</button>
                                <button id="SPID-addcart-cart" ><ShoppingCart size="32" color="#ffffff" /> افزودن به سبد خرید </button>
                            </div>
                        </div>
                    </section>

                    <section className="selected-product-review">
                        <section className="selected-product-review-point">
                            <div className="SPRP-title">امتیاز و دیدگاه کاربران</div>
                            <div className="SPRP-score">
                                <span id="SPRP-score-bold">۴.۱</span>
                                <span id="SPRP-score-five">از ۵</span>
                            </div>
                            <div className="SPRP-star">
                                <span>
                                    <StarRating
                                        totalStars={5}
                                        initialRating={4.1}
                                        starColor="#F4B740"
                                        emptyStarColor="lightgray"
                                        starSize={24}
                                        isStatic={true} 
                                    />
                                </span>
                                <span id="SPRP-star-text">از مجموع {comments.length} امتیاز</span>
                            </div>
                            <div id="SPRP-text">نظر خود را ثبت کنید</div>
                            <button id="SPRP-button" onClick={handleOpenModal}>ثبت دیدگاه</button>
                        </section>

                        <section className="selected-product-review-comment">

                            <div id="SPRC-title">
                                <Like1 size="24" color="#00966D" />
                                <span>۷۰٪ ({comments.filter(c => c.rating >= 4).length} نفر)</span>
                                <span>از خرید این محصول رضایت داشته اند</span>
                            </div>
                            <button id="SPRC-images">
                                <img src="/Selected-profile/red-cloth.png" alt="red-cloth" />
                                <img src="/Selected-profile/black-cloth.png" alt="black-cloth" />
                                <img src="/Selected-profile/white-cloth.png" alt="white-cloth" />
                            </button>
                            <button id="SPRC-showmore">
                                مشاهده بیشتر
                            </button>
                            <div className="SPRC-lines"></div>

                            <div className="SPRC-comment">
                                {comments.map(comment => (
                                    <UsersComment
                                        key={comment.id}
                                        author={comment.author}
                                        date={comment.date}
                                        rating={comment.rating}
                                        text={comment.text}
                                        positivePoints={comment.positivePoints}
                                        negativePoints={comment.negativePoints}
                                        isBuyer={comment.isBuyer}
                                    />
                                ))}
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            <>
                {isModalOpen && (
                                <SubmitReview
                                    isOpen={isModalOpen}
                                    onClose={handleCloseModal}
                                    onSubmitReview={handleAddComment}
                                    productName="نام محصول شما اینجا" 
                                />
                )}
            </>
            <Footer />
        </>
    );
}

export default SelectedProduct;