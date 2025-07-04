import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import ProfileSidebar from '../Components/Profile-sidebar';

import tickCircleIcon from '../../assets/UserProfile/vuesax-outline-tick-circle0.svg';
import moreCircleIcon from '../../assets/UserProfile/vuesax-outline-more-circle0.svg';
import galleryFavoriteIcon from '../../assets/UserProfile/vuesax-outline-gallery-favorite0.svg';
import closeCircleIcon from '../../assets/UserProfile/vuesax-outline-close-circle0.svg';
import bagHappyIcon from '../../assets/UserProfile/vuesax-outline-bag-happy0.svg';
import messagesIcon from '../../assets/UserProfile/vuesax-outline-messages-20.svg';
import filledHeartIcon from '../../assets/UserProfile/heart-10.svg';
import outlineHeartIcon from '../../assets/UserProfile/vuesax-outline-heart1.svg';
import anotherHeartIcon from '../../assets/UserProfile/vuesax-outline-heart7.svg';
import finalHeartIcon from '../../assets/UserProfile/vuesax-outline-heart11.svg';
import arrowLeftIcon from '../../assets/UserProfile/vuesax-outline-arrow-left0.svg';
import galleryAddIcon from '../../assets/UserProfile/vuesax-outline-gallery-add1.svg';

import img0 from '../../assets/UserProfile/img0.png';
import img3 from '../../assets/UserProfile/img3.png';

const frequentProductsData = [
    { id: 3, name: 'قاب گوشی آیفون', subtitle: 'دارای رنگ بندی، قابل طراحی', price: '۱۵۰,۰۰۰', image: img0, isLiked: false, heartIcon: anotherHeartIcon },
];

const galleryData = [
    { id: 4, name: 'استیکر فرندز', subtitle: 'قابل طراحی و چاپ بر روی انواع محصولات', image: img3, isLiked: false, isGalleryItem: true, heartIcon: finalHeartIcon },
];

const ProductCard = ({ product, onToggleWishlist }) => {
    const handleLikeClick = () => {
        if (onToggleWishlist) {
            onToggleWishlist(product.id, product.isLiked);
        }
    };

    return (
        <article className={`UPS-product-card ${product.isGalleryItem ? 'UPS-product-card--gallery' : ''}`}>
            <div className="UPS-product-image-container">
                <img className="UPS-product-image" src={product.image || '/path/to/default/image.png'} alt={product.name} />
                {product.colors && (
                    <div className="UPS-product-colors">
                        {product.colors.map((color, index) => (
                            <span key={index} className="UPS-color-dot" style={{ backgroundColor: color.code, border: color.border ? `1px solid ${color.border}` : 'none' }}></span>
                        ))}
                    </div>
                )}
            </div>
            <div className="UPS-product-info">
                <div className="UPS-product-title-row">
                    <h3 className="UPS-product-name">{product.name}</h3>
                    <button className="UPS-like-button" aria-label="Toggle Wishlist" onClick={handleLikeClick}>
                        <img src={product.isLiked ? filledHeartIcon : (product.heartIcon || outlineHeartIcon)} alt="آیکون قلب" />
                    </button>
                </div>
                <p className="UPS-product-subtitle">{product.description || product.subtitle}</p>
                {product.price && (
                    <div className="UPS-product-price-row">
                        <span className="UPS-product-price">{typeof product.price === 'number' ? product.price.toLocaleString('fa-IR') : product.price}</span>
                        <span className="UPS-product-currency">تومان</span>
                    </div>
                )}
            </div>
            {product.isGalleryItem && (
                <button className="UPS-btn-outline">
                    <img src={galleryAddIcon} alt="" />افزودن به گالری
                </button>
            )}
        </article>
    );
};

const ProductSection = ({ title, products, onToggleWishlist }) => {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <section className="UPS-product-section">
            <header className="UPS-section-header">
                <h2 className="UPS-section-title">{title}</h2>
                <a href="#" className="UPS-section-view-all">مشاهده بیشتر</a>
            </header>
            <div className="UPS-product-carousel">
                <div className="UPS-product-scroller">
                    {products.map(product => <ProductCard key={product.id} product={product} onToggleWishlist={onToggleWishlist} />)}
                </div>
                <button className="UPS-carousel-arrow UPS-carousel-arrow--prev" aria-label="قبلی"><img src={arrowLeftIcon} alt="" /></button>
                <button className="UPS-carousel-arrow UPS-carousel-arrow--next" aria-label="بعدی"><img src={arrowLeftIcon} alt="" /></button>
            </div>
        </section>
    );
};

const UserProfileDashboard = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.error("Token not found");
                setLoading(false);
                return;
            }
            const response = await axios.get('http://127.0.0.1:8000/api/users/me/', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const { data } = response;

            console.log("Full data received from API:", data);
            console.log("Wishlist data specifically:", data.account.wishlist);
            const enhancedWishlist = response.data.account.wishlist.map(p => ({ ...p, isLiked: true }));
            
            setProfileData({
                ...response.data,
                account: {
                    ...response.data.account,
                    wishlist: enhancedWishlist,
                },
            });

        } catch (error) {
            console.error('Failed to fetch user data:', error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchUserData();
    }, []);

    const handleToggleWishlist = async (productId, isCurrentlyLiked) => {
        const token = localStorage.getItem('access_token');
        const method = isCurrentlyLiked ? 'delete' : 'post';
        const url = 'http://127.0.0.1:8000/api/wishlist/';

        try {
            await axios({
                method: method,
                url: url,
                data: { product_id: productId },
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchUserData();
        } catch (error) {
            console.error('Failed to toggle wishlist item:', error.response?.data);
            alert('خطا در تغییر وضعیت علاقه‌مندی');
        }
    };
    
    if (loading) {
        return <div>در حال بارگذاری پروفایل شما...</div>;
    }

    if (!profileData) {
        return <div>خطا در دریافت اطلاعات. لطفاً دوباره وارد شوید.</div>;
    }

    return (
        <>
            <section className='UP-container'>
                <div>
                    <ProfileSidebar userData={profileData} />
                </div>
                <main className="UPS-profile-dashboard">
                    <section className="UPS-stats-overview">
                        <h1 className="UPS-stats-title">سفارش های من</h1>
                        <div className="UPS-stats-row">
                            <div className="UPS-stat-item">
                                <img src={tickCircleIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">تحویل شده</span><span className="UPS-stat-count">{profileData.shipped_orders_count} سفارش</span></div>
                            </div>
                            <div className="UPS-stat-item">
                                <img src={moreCircleIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">جاری</span><span className="UPS-stat-count">{profileData.active_orders_count} سفارش</span></div>
                            </div>
                            <div className="UPS-stat-item">
                                <img src={galleryFavoriteIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">در گالری</span><span className="UPS-stat-count">{profileData.gallery_products_count} محصول</span></div>
                            </div>
                        </div>
                        <hr className="UPS-stats-divider" />
                        <div className="UPS-stats-row">
                            <div className="UPS-stat-item">
                                <img src={closeCircleIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">لغو شده</span><span className="UPS-stat-count">{profileData.canceled_orders_count} سفارش</span></div>
                            </div>
                            <div className="UPS-stat-item">
                                <img src={bagHappyIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">فیزیکی</span><span className="UPS-stat-count">{profileData.physical_products_count} محصول</span></div>
                            </div>
                            <div className="UPS-stat-item">
                                <img src={messagesIcon} alt="" className="UPS-stat-icon" />
                                <div className="UPS-stat-text"><span className="UPS-stat-label">ثبت شده</span><span className="UPS-stat-count">{profileData.comments_count} نظر</span></div>
                            </div>
                        </div>
                    </section>
                    
                    <ProductSection 
                        title="علاقه مندی های من" 
                        products={profileData.account.wishlist}
                        onToggleWishlist={handleToggleWishlist} 
                    />
                    <ProductSection 
                        title="خرید های پرتکرار من" 
                        products={frequentProductsData}
                    />
                    <ProductSection 
                        title="گالری من" 
                        products={galleryData}
                    />

                </main>
            </section>
        </>
    );
};

export default UserProfileDashboard;  