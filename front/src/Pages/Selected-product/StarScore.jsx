import React, { useState } from "react";
// import {AddCircle, CloseCircle} from "iconsax-reactjs"; // اینها در اینجا لازم نیستند

const Star = ({ filled, partiallyFilled, onClick, onMouseEnter, onMouseLeave, starColor, emptyStarColor, starSize, isStatic }) => {
    let starCharacter;
    let currentStarColor = emptyStarColor;

    if (filled) {
        starCharacter = '★'; // ستاره پر
        currentStarColor = starColor;
    } else if (partiallyFilled && !isStatic) { // در حالت استاتیک، نیازی به نمایش حاشیه دار نیست مگر اینکه بخواهید
        starCharacter = '☆';
        currentStarColor = starColor; // رنگ حاشیه زرد خواهد بود
    }
    else {
        starCharacter = '☆';
    }

    return (
        <span
            className={`star ${filled ? 'filled' : ''} ${partiallyFilled && !filled && !isStatic ? 'partially-filled-outline' : ''}`}
            onClick={!isStatic ? onClick : undefined}
            onMouseEnter={!isStatic ? onMouseEnter : undefined}
            onMouseLeave={!isStatic ? onMouseLeave : undefined}
            style={{
                color: currentStarColor,
                fontSize: `${starSize}px`,
                cursor: isStatic ? 'default' : 'pointer',
                margin: '0 2px',
            }}
        >
            {starCharacter}
        </span>
    );
};

const StarRating = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
    starColor = "#FFD700",
    emptyStarColor = "#E0E0E0",
    starSize = 30,
    isStatic = false // پراپرتی جدید
}) => {
    const [rating, setRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    // برای بروزرسانی ریتینگ داخلی اگر initialRating از بیرون تغییر کند (مثلا در فرم ریست شود)
    React.useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);


    const handleClick = (newRating) => {
        if (isStatic) return;
        setRating(newRating);
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    const handleMouseEnter = (newHoverRating) => {
        if (isStatic) return;
        setHoverRating(newHoverRating);
    };

    const handleMouseLeave = () => {
        if (isStatic) return;
        setHoverRating(0);
    };
    
    // محاسبه امتیاز برای نمایش (در نظر گرفتن اعشار برای حالت استاتیک)
    const displayRating = isStatic ? initialRating : (hoverRating || rating);

    return (
        <div className="star-rating-container" onMouseLeave={!isStatic ? handleMouseLeave : undefined}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                let isFilled = starValue <= displayRating;
                // برای حالت استاتیک و نمایش نیم ستاره (اگر بخواهید پیاده سازی کنید)
                // let isPartiallyFilled = isStatic && starValue - 0.5 === displayRating;
                // در این پیاده‌سازی ساده، ستاره یا پر است یا خالی (بر اساس گرد کردن به پایین)

                // برای نمایش صحیح در حالت استاتیک با اعشار:
                if (isStatic) {
                    isFilled = starValue <= initialRating; // ستاره های کامل
                     // اگر بخواهید ستاره ای که بخشی از آن پر است را متفاوت نشان دهید (مثلا ۴.۱ ستاره پنجم کمی پر)
                     // این بخش نیاز به منطق پیچیده‌تر یا استفاده از SVG دارد. فعلا ساده نگه میداریم.
                }


                return (
                    <Star
                        key={starValue}
                        filled={isFilled}
                        partiallyFilled={!isStatic && starValue > (hoverRating || rating) && starValue <= totalStars && (hoverRating === 0)}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => handleMouseEnter(starValue)}
                        starColor={starColor}
                        emptyStarColor={isStatic && initialRating > index && initialRating < starValue ? starColor : emptyStarColor} // برای ستاره نیمه پر یا outline
                        starSize={starSize}
                        isStatic={isStatic}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;