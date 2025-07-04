import React, { useState } from "react";
import "./Styles/submit-review.css";
import { AddCircle, MinusCirlce, CloseCircle, Star1 } from "iconsax-reactjs";
import StarRating from "./StarScore";

function SubmitReview({ isOpen, onClose, onSubmitReview, productName }) {
    const [rating, setRating] = useState(0);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [positivePointInput, setPositivePointInput] = useState("");
    const [positivePoints, setPositivePoints] = useState([]);
    const [negativePointInput, setNegativePointInput] = useState("");
    const [negativePoints, setNegativePoints] = useState([]);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleAddPositivePoint = () => {
        if (positivePointInput.trim() !== "") {
            setPositivePoints([...positivePoints, positivePointInput.trim()]);
            setPositivePointInput("");
        }
    };

    const handleRemovePositivePoint = (index) => {
        setPositivePoints(positivePoints.filter((_, i) => i !== index));
    };

    const handleAddNegativePoint = () => {
        if (negativePointInput.trim() !== "") {
            setNegativePoints([...negativePoints, negativePointInput.trim()]);
            setNegativePointInput("");
        }
    };

    const handleRemoveNegativePoint = (index) => {
        setNegativePoints(negativePoints.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert("لطفا به محصول امتیاز دهید.");
            return;
        }
        if (reviewText.trim() === "") {
            alert("لطفا متن دیدگاه خود را وارد کنید.");
            return;
        }

        const newReview = {

            author: "کاربر مهمان", 
            rating,
            title: reviewTitle,
            text: reviewText,
            positivePoints,
            negativePoints,
            isBuyer: true, 
        };
        onSubmitReview(newReview);
        setRating(0);
        setReviewTitle("");
        setReviewText("");
        setPositivePoints([]);
        setPositivePointInput("");
        setNegativePoints([]);
        setNegativePointInput("");
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="submit-review-modal-overlay">
            <div className="submitReview-container">
                <button onClick={onClose} id="submitReview-closePage" aria-label="بستن">
                    <CloseCircle size="24" color="#86262F" />
                </button>

                <div id="submitReview-title">ثبت دیدگاه جدید</div>
                <div id="submitReview-pName">برای محصول: {productName}</div>

                <form onSubmit={handleSubmit}>
                    <div className="submitReview-box submitReview-ratingArea">
                        <span>امتیاز شما به این محصول <span id="submitReview-mainText-star">*</span></span>
                        <StarRating
                            totalStars={5}
                            initialRating={rating}
                            onRatingChange={handleRatingChange}
                            starColor="#F4B740"
                            emptyStarColor="lightgray"
                            hoverStarColor="#F4B740" // یا رنگ دلخواه دیگر
                            starSize={28}
                        />
                    </div>

                    <div className="submitReview-box">
                        <label htmlFor="reviewTitle" className="submitReview-grayTitles">عنوان دیدگاه (اختیاری)</label>
                        <input
                            type="text"
                            id="reviewTitle"
                            className="submitReview-inputText"
                            value={reviewTitle}
                            onChange={(e) => setReviewTitle(e.target.value)}
                            placeholder="مثلا: کیفیت ساخت عالی"
                        />
                    </div>

                    <div className="submitReview-box">
                        <div className="submitReview-mainText-title">
                            <label htmlFor="positivePointInput" className="submitReview-grayTitles">نکات مثبت</label>
                        </div>
                        <div className="submitReview-add-feature-row">
                            <input
                                type="text"
                                id="positivePointInput"
                                className="submitReview-inputText submitReview-feature-input"
                                value={positivePointInput}
                                onChange={(e) => setPositivePointInput(e.target.value)}
                                placeholder="یک نکته مثبت بنویسید"
                            />
                            <button type="button" onClick={handleAddPositivePoint} className="submitReview-addtolist-button">
                                <AddCircle size="24" color="#2ecc71" variant="Bold" />
                            </button>
                        </div>
                        <ul className="submitReview-feature-list">
                            {positivePoints.map((point, index) => (
                                <li key={`pos-${index}`}>
                                    <span>{point}</span>
                                    <button type="button" onClick={() => handleRemovePositivePoint(index)} className="submitReview-remove-feature-button">
                                        <CloseCircle size="16" color="#e74c3c" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="submitReview-box">
                        <div className="submitReview-mainText-title">
                            <label htmlFor="negativePointInput" className="submitReview-grayTitles">نکات منفی</label>
                        </div>
                        <div className="submitReview-add-feature-row">
                            <input
                                type="text"
                                id="negativePointInput"
                                className="submitReview-inputText submitReview-feature-input"
                                value={negativePointInput}
                                onChange={(e) => setNegativePointInput(e.target.value)}
                                placeholder="یک نکته منفی بنویسید"
                            />
                            <button type="button" onClick={handleAddNegativePoint} className="submitReview-addtolist-button">
                                <MinusCirlce size="24" color="#e74c3c" variant="Bold" />
                            </button>
                        </div>
                        <ul className="submitReview-feature-list">
                            {negativePoints.map((point, index) => (
                                <li key={`neg-${index}`}>
                                    <span>{point}</span>
                                    <button type="button" onClick={() => handleRemoveNegativePoint(index)} className="submitReview-remove-feature-button">
                                        <CloseCircle size="16" color="#e74c3c" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="submitReview-box">
                        <div className="submitReview-mainText-title">
                            <label htmlFor="reviewText" className="submitReview-grayTitles">متن دیدگاه شما</label>
                            <span id="submitReview-mainText-star">*</span>
                        </div>
                        <textarea
                            id="reviewText"
                            className="submitReview-inputText"
                            rows="4"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="تجربه خود را از این محصول بنویسید..."
                            required
                        ></textarea>
                    </div>

                    <div className="submitReview-submitButton">
                        <button type="submit" className="submitReview-submitButton-button">ثبت دیدگاه</button>
                        <span className="submitReview-submitButton-text">پس از ثبت، دیدگاه شما مورد بررسی قرار خواهد گرفت.</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SubmitReview;