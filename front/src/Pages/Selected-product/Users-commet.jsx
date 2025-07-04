import React from "react";
import "./Styles/selected-product.css";
import { AddCircle, MinusCirlce, Like1, Dislike, Add, Minus } from "iconsax-reactjs"; // آیکون‌های قدیمی‌تر استفاده شده بودند، برای هماهنگی آیکون‌ها را با SubmitReview می‌توان یکسان کرد
import StarRating from "./StarScore";

const PositivePointIcon = () => <AddCircle size="20" color="#2ecc71" variant="Outline"/>;
const NegativePointIcon = () => <MinusCirlce size="20" color="#e74c3c" variant="Outline"/>;


function UsersComment({ author, date, rating, text, positivePoints, negativePoints, isBuyer }) {
    return (
        <div className="users-comment-item"> 
            <div className="SPRC-comment-header">
                <div className="SPRC-comment-header-person">
                    <div id="SPRC-comment-header-person-date">{date}</div>
                    <div id="SPRC-comment-header-person-name">{author}</div>
                    {isBuyer && <div id="SPRC-comment-header-person-type">خریدار</div>}
                </div>
                <div>
                    <StarRating
                        totalStars={5}
                        initialRating={rating}
                        starColor="#F4B740"
                        emptyStarColor="lightgray"
                        starSize={20}
                        isStatic={true}
                    />
                </div>
            </div>

            <div className="SPRC-lines"></div>

            <div className="SPRC-comment-section">
                {text && <div id="SPRC-comment-text">{text}</div>}
                {(positivePoints && positivePoints.length > 0 || negativePoints && negativePoints.length > 0) && (
                    <div className="SPRC-feature">
                        {positivePoints && positivePoints.length > 0 && (
                            <ul className="SPRC-feature-pos">
                                {positivePoints.map((point, index) => (
                                    <li key={`pos-${index}`} className="custom-list">
                                        <Add size="20" color="#37d67a"/>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {negativePoints && negativePoints.length > 0 && (
                            <ul className="SPRC-feature-nag">
                                {negativePoints.map((point, index) => (
                                    <li key={`neg-${index}`} className="custom-list">
                                        <Minus size="20" color="#e74c3c"/>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <div className="SPRC-lines"></div>

            <div className="SPRC-like">
                <span>آیا این دیدگاه مفید بود؟ </span>
                <button aria-label="مفید بود"><Like1 size="24" color="#00966D" /></button>
                <button aria-label="مفید نبود"><Dislike size="24" color="#C30000" /></button>
            </div>
        </div>
    );
}

export default UsersComment;