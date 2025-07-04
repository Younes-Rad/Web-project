import React from "react";
import "./Home.css";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";
import Navigation from "../Components/Navigation-bar/Navigation";

function Home() {
    return (
        <>
            <Header />
            <Navigation />
                <main>

<div className="hero">
  <div className="hero__bg-shape hero__bg-shape--outer-1"></div>
  <div className="hero__bg-shape hero__bg-shape--outer-2"></div>

  <div className="hero__visual-content">
    <div className="hero__bg-shape hero__bg-shape--inner-1"></div>
    <div className="hero__bg-shape hero__bg-shape--inner-2"></div>

    <img className="hero__image hero__image--flower-side" src="/Home/hero/goll-7-10.png" alt="Flower decoration" />
    <img className="hero__image hero__image--main" src="/Home/hero/_3-girls-10.png" alt="Promotional image" />
    <img className="hero__image hero__image--flower-corner" src="/Home/hero/goll-3-10.png" alt="Flower decoration" />

    <div className="hero__button button--secondary hero__button--secondary">
      <span className="hero__button__text">دیدن محصولات</span>
    </div>
  </div>

  <h2 className="hero__title">آنلاین شاپ کاستومی</h2>
  <p className="hero__description">
    آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده خودتون رنگ
    و طرح و نوشته ی روی محصولات رو انتخاب کنید
  </p>

  <div className="hero__button h_button--primary hero__button--primary">
    <span className="hero__button__text">شروع طراحی</span>
    <div className="hero__button__icon-wrapper">
      <img className="hero__button__icon-svg" src="/Home/hero/vuesax-outline-brush1.svg" alt="Brush Icon" />
    </div>
  </div>
</div>

<div className="categories-section__main-title-container">
  <div className="categories-section__main-title-wrapper">
    <div className="categories-section__main-title-text">دسته بندی محصولات</div>
    <div className="categories-section__main-title-icon-wrapper">
      <img className="categories-section__main-title-icon" src="/Home/main/vuesax-outline-medal-star1.svg" alt="" />
    </div>
  </div>
  <div className="categories-section__main-title-divider"></div>
</div>

<div className="categories-section__grid">
  <a href="/decor" className="categories-section__item-link" title="مشاهده دسته‌بندی دکور خانه">
    <div className="categories-section__item">
      <img className="categories-section__item-image" src="/Home/main/frame-260879660.png" alt="دکور خانه"/>
      <div className="categories-section__item-name">دکور خانه</div>
    </div>
  </a>
  <a href="/clothing" className="categories-section__item-link" title="مشاهده دسته‌بندی لباس">
    <div className="categories-section__item">
      <img className="categories-section__item-image" src="/Home/main/frame-260879661.png" alt="لباس"/>
      <div className="categories-section__item-name">لباس</div>
    </div>
  </a>
  <a href="/stationery" className="categories-section__item-link" title="مشاهده دسته‌بندی لوازم تحریر">
    <div className="categories-section__item">
      <img className="categories-section__item-image" src="/Home/main/frame-260879662.png" alt="لوازم تحریر"/>
      <div className="categories-section__item-name">لوازم تحریر</div>
    </div>
  </a>
  <a href="/accessories" className="categories-section__item-link" title="مشاهده دسته‌بندی اکسسوری">
    <div className="categories-section__item">
      <img className="categories-section__item-image" src="/Home/main/frame-260879663.png" alt="اکسسوری"/>
      <div className="categories-section__item-name">اکسسوری</div>
    </div>
  </a>
  <a href="/greeting-cards" className="categories-section__item-link" title="مشاهده دسته‌بندی کارت تبریک">
    <div className="categories-section__item">
      <img className="categories-section__item-image" src="/Home/main/frame-260879664.png" alt="کارت تبریک"/>
      <div className="categories-section__item-name">کارت تبریک</div>
    </div>
  </a>
  <a href="/phone-cases" className="categories-section__item-link" title="مشاهده دسته‌بندی قاب موبایل">
    <div className="categories-section__item">
      <img className="categories-section__item-image categories-section__item-image--alt-height" src="/Home/main/frame-260879665.png" alt="قاب موبایل"/>
      <div className="categories-section__item-name">قاب موبایل</div>
    </div>
  </a>
</div>



<section className="bestsellers-section">
  <header className="bestsellers-section__header">
     <div className="bestsellers-section__title-wrapper">
      <h2 className="bestsellers-section__title">پر فروش ترین ها</h2>
    </div>
    <hr className="bestsellers-section__divider" />
    <a href="#" className="bestsellers-section__view-more-button">
      <span className="bestsellers-section__view-more-text">مشاهده بیشتر</span>
    </a>
  </header>

  <div className="bestsellers-section__grid">
    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-0" className="bestsellers-product-card__image-container">
        <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart1.svg" alt=""/>
            </button>
            <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">کلاه مردانه</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-1" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart3.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">قاب موبایل آیفون</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
          <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
          <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-2" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --black"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart5.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">تیشرت مردانه</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
          <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
          <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

     <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-3" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart7.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">تیشرت زنانه</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-4" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart9.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">دفتر سیمی</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-5" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart11.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">ماگ سرامیکی</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

    <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-6" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --neutral-gray"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart13.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">باکس غذا</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

     <article className="bestsellers-product-card">
      <div id="bestsellers-product-img-7" className="bestsellers-product-card__image-container">
         <div className="bestsellers-product-card__color-swatches">
          <span className="bestsellers-product-card__color-swatch --white"></span>
          <span className="bestsellers-product-card__color-swatch --red"></span>
          <span className="bestsellers-product-card__color-swatch --yellow"></span>
          <span className="bestsellers-product-card__color-swatch --dark-green"></span>
          <span className="bestsellers-product-card__color-swatch --orange"></span>
        </div>
      </div>
      <div className="bestsellers-product-card__info">
        <div className="bestsellers-product-card__details">
          <div className="bestsellers-product-card__name-wrapper">
            <button className="bestsellers-product-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
              <img className="bestsellers-product-card__wishlist-icon" src="/Home/product_card/vuesax-outline-heart15.svg" alt=""/>
            </button>
             <h3 className="bestsellers-product-card__name">
                <a href="#" className="bestsellers-product-card__name-link">ماگ قابل طراحی</a>
            </h3>
          </div>
          <p className="bestsellers-product-card__short-desc">دارای رنگ بندی، قابل طراحی</p>
        </div>
        <div className="bestsellers-product-card__price-info">
           <span className="bestsellers-product-card__amount">۱۵۰,۰۰۰</span>
           <span className="bestsellers-product-card__currency">تومان</span>
        </div>
      </div>
    </article>

  </div>
</section>

 <section className="special-offers-section">
  <header className="special-offers-section__header">
    <div className="special-offers-section__title-wrapper">
       <img className="special-offers-section__title-icon" src="/Home/specialSell/vuesax-outline-discount-shape1.svg" alt="Discount Icon"/>
      <h2 className="special-offers-section__title">فروش ویژه</h2>
    </div>
    <hr className="special-offers-section__divider"/>
  </header>

  <div className="special-offers-section__grid">
    <article id="offer-card-home" className="offer-card offer-card--large">
      <div className="offer-card__badge">
        <img className="offer-card__badge-background" src="/Home/specialSell/rectangle-1740.svg" alt=""/>
        <div className="offer-card__badge-text-container">
          <span className="offer-card__badge-percentage">20%</span>
          <span className="offer-card__badge-label">OFF</span>
        </div>
      </div>
      <h3 className="offer-card__title">
          <a href="#" className="offer-card__title-link">لوازم خانه</a>
      </h3>
    </article>

    <article id="offer-card-school" className="offer-card offer-card--small">
       <div className="offer-card__badge">
        <img className="offer-card__badge-background" src="/Home/specialSell/rectangle-1744.svg" alt=""/>
        <div className="offer-card__badge-text-container">
          <span className="offer-card__badge-percentage">20%</span>
          <span className="offer-card__badge-label">OFF</span>
        </div>
      </div>
      <h3 className="offer-card__title">
        <a href="#" className="offer-card__title-link">مدرسه و اداره</a>
      </h3>
    </article>

    <article id="offer-card-clothing" className="offer-card offer-card--small">
       <div className="offer-card__badge">
        <img className="offer-card__badge-background" src="/Home/specialSell/rectangle-1741.svg" alt=""/>
        <div className="offer-card__badge-text-container">
          <span className="offer-card__badge-percentage">20%</span>
          <span className="offer-card__badge-label">OFF</span>
        </div>
      </div>
      <h3 className="offer-card__title">
        <a href="#" className="offer-card__title-link">پوشاک</a>
      </h3>
    </article>

    <article id="offer-card-digital" className="offer-card offer-card--small">
       <div className="offer-card__badge">
        <img className="offer-card__badge-background" src="/Home/specialSell/rectangle-1742.svg" alt=""/>
        <div className="offer-card__badge-text-container">
          <span className="offer-card__badge-percentage">20%</span>
          <span className="offer-card__badge-label">OFF</span>
        </div>
      </div>
      <h3 className="offer-card__title">
         <a href="#" className="offer-card__title-link">دیجیتال</a>
      </h3>
    </article>

    <article id="offer-card-sticker" className="offer-card offer-card--small">
       <div className="offer-card__badge">
        <img className="offer-card__badge-background" src="/Home/specialSell/rectangle-1743.svg" alt=""/>
        <div className="offer-card__badge-text-container">
          <span className="offer-card__badge-percentage">20%</span>
          <span className="offer-card__badge-label">OFF</span>
        </div>
      </div>
       <h3 className="offer-card__title">
         <a href="#" className="offer-card__title-link">استیکر</a>
      </h3>
    </article>
  </div>

  <div className="decorative-moon-icon"></div>

</section>

<section className="popular-designs-section">
  <header className="popular-designs-section__header">
    <a href="#" className="popular-designs-section__view-more-button">
      <span className="popular-designs-section__view-more-text">مشاهده بیشتر</span>
    </a>
    <div className="popular-designs-section__title-wrapper">
      <h2 className="popular-designs-section__title">طرح های پرطرفدار</h2>
      <img className="popular-designs-section__title-icon" src="/Home/Popular_purchases/vuesax-outline-like-shapes1.svg" alt="Popular Designs Icon"/>
    </div>
    <hr className="popular-designs-section__divider"/>
  </header>

  <div className="popular-designs-section__grid">
    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img0.png" alt="بک گراند قاب موبایل"/>
      <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">بک گراند قاب موبایل</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart1.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add1.svg" alt=""/>
      </button>
    </article>

    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img1.png" alt="استیکر"/>
      <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart3.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add3.svg" alt=""/>
      </button>
    </article>

    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img2.png" alt="استیکر"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart5.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add5.svg" alt=""/>
      </button>
    </article>

     <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img3.png" alt="استیکر"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart7.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add7.svg" alt=""/>
      </button>
    </article>

    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img4.png" alt="استیکر حروف"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر حروف</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart9.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add9.svg" alt=""/>
      </button>
    </article>

     <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img5.png" alt="استیکر"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart11.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add11.svg" alt=""/>
      </button>
    </article>

    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img6.png" alt="تصویر آفتابگردان"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">تصویر آفتابگردان</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart13.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add13.svg" alt=""/>
      </button>
    </article>

    <article className="design-card">
      <img className="design-card__image" src="/Home/Popular_purchases/img7.png" alt="استیکر"/>
       <div className="design-card__info">
        <div className="design-card__name-wrapper">
           <h3 className="design-card__name">
             <a href="#" className="design-card__name-link">استیکر</a>
           </h3>
           <button className="design-card__wishlist-button" aria-label="افزودن به علاقه‌مندی‌ها">
            <img className="design-card__wishlist-icon" src="/Home/Popular_purchases/vuesax-outline-heart15.svg" alt=""/>
          </button>
        </div>
        <p className="design-card__short-desc">قابل طراحی و چاپ بر روی انواع محصولات</p>
      </div>
      <button className="design-card__add-gallery-button">
        <span className="design-card__add-gallery-text">افزودن به گالری</span>
        <img className="design-card__add-gallery-icon" src="/Home/Popular_purchases/vuesax-outline-gallery-add15.svg" alt=""/>
      </button>
    </article>
  </div>
</section>

<div className="bestDesigners">
  <div className="designers-section__title">
    <div className="designers-section__title-wrapper">
      <div className="designers-section__title-content">
        <div className="designers-section__title-text">طراحان برتر</div>
        <div className="designers-section__title-icon-container">
          <img className="designers-section__title-icon" src="/Home/bestDesigners/vuesax-outline-star1.svg" alt="آیکون ستاره"/>
        </div>
      </div>
      <div className="designers-section__title-divider"></div>
    </div>
  </div>

  <div className="designers-grid">
    <div className="designer-card">
      <div className="designer-card__header">
        <div className="designer-card__header-background"></div>
        <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic1.png" alt="آرش نظری"/>
      </div>
      <div className="designer-card__name-wrapper">
         <a href="#" className="designer-card__name-link">آرش نظری</a>
      </div>
      <div className="designer-card__stats">
        <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
      </div>
      <div className="designer-card__previews">
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879650.png" alt="نمونه کار ۱"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879660.png" alt="نمونه کار ۲"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879670.png" alt="نمونه کار ۳"/>
      </div>
      <div className="designer-card__action-wrapper">
        <div className="designer-card__follow-button-container">
          <a href="#" className="designer-card__follow-button">
            <span className="designer-card__follow-button-text">دنبال کردن</span>
            <div className="designer-card__follow-button-icon-container">
              <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add1.svg" alt="آیکون دنبال کردن"/>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="designer-card">
      <div className="designer-card__header">
        <div className="designer-card__header-background"></div>
        <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic3.png" alt="سارا محمدی"/>
      </div>
      <div className="designer-card__name-wrapper">
        <a href="#" className="designer-card__name-link">سارا محمدی</a>
      </div>
      <div className="designer-card__stats">
        <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
      </div>
      <div className="designer-card__previews">
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879651.png" alt="نمونه کار ۱"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879661.png" alt="نمونه کار ۲"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879671.png" alt="نمونه کار ۳"/>
      </div>
      <div className="designer-card__action-wrapper">
        <div className="designer-card__follow-button-container">
          <a href="#" className="designer-card__follow-button">
            <span className="designer-card__follow-button-text">دنبال کردن</span>
            <div className="designer-card__follow-button-icon-container">
              <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add3.svg" alt="آیکون دنبال کردن"/>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="designer-card">
      <div className="designer-card__header">
        <div className="designer-card__header-background"></div>
        <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic5.png" alt="شهرام طالبی"/>
      </div>
      <div className="designer-card__name-wrapper">
        <a href="#" className="designer-card__name-link">شهرام طالبی</a>
      </div>
      <div className="designer-card__stats designer-card__stats--space-between">
        <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
        <div className="designer-card__stat-divider"></div>
        <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
      </div>
       <div className="designer-card__previews designer-card__previews--flex-start">
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879652.png" alt="نمونه کار ۱"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879662.png" alt="نمونه کار ۲"/>
        <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879672.png" alt="نمونه کار ۳"/>
      </div>
      <div className="designer-card__action-wrapper">
        <div className="designer-card__follow-button-container">
          <a href="#" className="designer-card__follow-button">
            <span className="designer-card__follow-button-text">دنبال کردن</span>
            <div className="designer-card__follow-button-icon-container">
              <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add5.svg" alt="آیکون دنبال کردن"/>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div className="designer-card">
        <div className="designer-card__header">
            <div className="designer-card__header-background"></div>
            <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic7.png" alt="نگار زمانی"/>
        </div>
        <div className="designer-card__name-wrapper">
            <a href="#" className="designer-card__name-link">نگار زمانی</a>
        </div>
        <div className="designer-card__stats">
            <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
        </div>
        <div className="designer-card__previews">
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879653.png" alt="نمونه کار ۱"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879663.png" alt="نمونه کار ۲"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879673.png" alt="نمونه کار ۳"/>
        </div>
        <div className="designer-card__action-wrapper">
            <div className="designer-card__follow-button-container">
                <a href="#" className="designer-card__follow-button">
                    <span className="designer-card__follow-button-text">دنبال کردن</span>
                    <div className="designer-card__follow-button-icon-container">
                        <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add7.svg" alt="آیکون دنبال کردن"/>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div className="designer-card">
        <div className="designer-card__header">
            <div className="designer-card__header-background"></div>
            <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic9.png" alt="نیلوفر کریمی"/>
        </div>
        <div className="designer-card__name-wrapper">
            <a href="#" className="designer-card__name-link">نیلوفر کریمی</a>
        </div>
        <div className="designer-card__stats">
            <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
        </div>
        <div className="designer-card__previews">
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879654.png" alt="نمونه کار ۱"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879664.png" alt="نمونه کار ۲"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879674.png" alt="نمونه کار ۳"/>
        </div>
        <div className="designer-card__action-wrapper">
            <div className="designer-card__follow-button-container">
                <a href="#" className="designer-card__follow-button">
                    <span className="designer-card__follow-button-text">دنبال کردن</span>
                    <div className="designer-card__follow-button-icon-container">
                        <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add9.svg" alt="آیکون دنبال کردن"/>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div className="designer-card">
        <div className="designer-card__header">
            <div className="designer-card__header-background"></div>
            <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic11.png" alt="مرجان جعفری"/>
        </div>
        <div className="designer-card__name-wrapper">
            <a href="#" className="designer-card__name-link">مرجان جعفری</a>
        </div>
        <div className="designer-card__stats">
            <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
        </div>
        <div className="designer-card__previews">
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879655.png" alt="نمونه کار ۱"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879665.png" alt="نمونه کار ۲"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879675.png" alt="نمونه کار ۳"/>
        </div>
        <div className="designer-card__action-wrapper">
            <div className="designer-card__follow-button-container">
                <a href="#" className="designer-card__follow-button">
                    <span className="designer-card__follow-button-text">دنبال کردن</span>
                    <div className="designer-card__follow-button-icon-container">
                        <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add11.svg" alt="آیکون دنبال کردن"/>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div className="designer-card">
        <div className="designer-card__header">
            <div className="designer-card__header-background"></div>
            <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic13.png" alt="سعید سلیمی"/>
        </div>
        <div className="designer-card__name-wrapper">
            <a href="#" className="designer-card__name-link">سعید سلیمی</a>
        </div>
        <div className="designer-card__stats">
            <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
        </div>
        <div className="designer-card__previews">
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879656.png" alt="نمونه کار ۱"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879666.png" alt="نمونه کار ۲"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879676.png" alt="نمونه کار ۳"/>
        </div>
        <div className="designer-card__action-wrapper">
            <div className="designer-card__follow-button-container">
                <a href="#" className="designer-card__follow-button">
                    <span className="designer-card__follow-button-text">دنبال کردن</span>
                    <div className="designer-card__follow-button-icon-container">
                        <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add13.svg" alt="آیکون دنبال کردن"/>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div className="designer-card">
        <div className="designer-card__header">
            <div className="designer-card__header-background"></div>
            <img className="designer-card__profile-image" src="/Home/bestDesigners/profile-pic15.png" alt="سمانه جوادی"/>
        </div>
        <div className="designer-card__name-wrapper">
            <a href="#" className="designer-card__name-link">سمانه جوادی</a>
        </div>
        <div className="designer-card__stats">
            <span className="designer-card__stat-item">آمار فروش : ۳۷۰</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">تعداد طرح ها : ۵۶</span>
            <div className="designer-card__stat-divider"></div>
            <span className="designer-card__stat-item">دنبال کنندگان : ۴۰۰</span>
        </div>
        <div className="designer-card__previews">
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879657.png" alt="نمونه کار ۱"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879667.png" alt="نمونه کار ۲"/>
            <img className="designer-card__preview-image" src="/Home/bestDesigners/frame-260879677.png" alt="نمونه کار ۳"/>
        </div>
        <div className="designer-card__action-wrapper">
            <div className="designer-card__follow-button-container">
                <a href="#" className="designer-card__follow-button">
                    <span className="designer-card__follow-button-text">دنبال کردن</span>
                    <div className="designer-card__follow-button-icon-container">
                        <img className="designer-card__follow-button-icon" src="/Home/bestDesigners/vuesax-outline-profile-add15.svg" alt="آیکون دنبال کردن"/>
                    </div>
                </a>
            </div>
        </div>
    </div>
  </div>
</div>

<div className="new-designs">
  <div className="new-designs-section__title">
    <div className="new-designs-section__title-wrapper">
      <div className="new-designs-section__title-content">
        <div className="new-designs-section__title-text">جدیدترین طرح های هفته</div>
        <div className="new-designs-section__title-icon-container">
          <img className="new-designs-section__title-icon" src="/Home/newWeekPlan/vuesax-outline-brush1.svg" alt="آیکون قلم‌مو"/>
        </div>
      </div>
      <div className="new-designs-section__title-divider"></div>
      <a href="#" className="new-designs-section__view-more-button">
        <span className="new-designs-section__view-more-text">مشاهده بیشتر</span>
      </a>
    </div>
  </div>

  <div className="new-designs-grid">
    <div className="new-designs-grid__row">
      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img0.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img0.png"
          alt="کیف زنانه"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart1.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">کیف زنانه</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img1.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img1.png"
          alt="ماگ قابل طراحی"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart3.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">ماگ قابل طراحی</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          className="product-card__image product-card__image--gradient"
          style={{
            backgroundImage: `url(./assets/newWeekPlan/img2.png)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img2.png"
          alt="آباژور"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart5.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">آباژور</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="new-designs-grid__promo-card">
        <div className="new-designs-grid__promo-text">
          محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید
        </div>
        <img className="new-designs-grid__promo-icon new-designs-grid__promo-icon--1" src="./assets/newWeekPlan/group0.svg" alt=""/>
        <img className="new-designs-grid__promo-icon new-designs-grid__promo-icon--2" src="./assets/newWeekPlan/group1.svg" alt=""/>
      </div>
    </div>

    <div className="new-designs-grid__row">
      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img3.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img3.png"
          alt="ساک هدیه"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart7.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">ساک هدیه</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img4.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img4.png"
          alt="کوسن"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart9.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">کوسن</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img5.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img5.png"
          alt="تیشرت زنانه"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart11.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">تیشرت زنانه</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          className="product-card__image"
          style={{
            background: `url(./assets/newWeekPlan/img6.png) center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          src="./assets/newWeekPlan/img6.png"
          alt="چمدان"
        />
        <div className="product-card__info">
          <div className="product-card__description">
            <div className="product-card__name-area">
              <a href="#" className="product-card__like-button" aria-label="Add to favorites">
                <div className="product-card__like-icon-container">
                  <img className="product-card__like-icon" src="./assets/newWeekPlan/vuesax-outline-heart13.svg" alt="آیکون قلب"/>
                </div>
              </a>
              <a href="#" className="product-card__name">چمدان</a>
            </div>
            <div className="product-card__short-desc">دارای رنگ بندی، قابل طراحی</div>
          </div>
          <div className="product-card__price-area">
            <span className="product-card__currency">تومان</span>
            <span className="product-card__amount">۱۵۰,۰۰۰</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="gift-banners">
    <div className="gift-banner gift-banner--mothers">
      <img className="gift-banner__image" src="./assets/newWeekPlan/mom-10.png" alt="بنر هدیه خانم‌ها"/>
      <div className="gift-banner__content">
        <div className="gift-banner__title">محصولات مناسب هدیه دادن به خانم ها</div>
        <a href="#" className="gift-banner__cta-button">
          <span className="gift-banner__cta-text">دیدن محصولات</span>
        </a>
      </div>
    </div>
    <div className="gift-banner gift-banner--fathers">
      <img className="gift-banner__image" src="./assets/newWeekPlan/dadi-10.png" alt="بنر هدیه آقایان"/>
      <div className="gift-banner__content">
        <div className="gift-banner__title">محصولات مناسب هدیه دادن به آقایان</div>
        <a href="#" className="gift-banner__cta-button">
          <span className="gift-banner__cta-text">دیدن محصولات</span>
        </a>
      </div>
    </div>
  </div>
</div>

<section className="favorites-section">

<aside className="wedding-invite-promo">
  <div className="wedding-invite-promo__images">
     <a href="#" className="wedding-invite-promo__image-link">
       <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--large">
          <img className="wedding-invite-promo__image" src="./assets/Favorites/wedding-red-table0.png" alt="میز قرمز عروسی" />
       </div>
     </a>
    <div className="wedding-invite-promo__image-group">
       <a href="#" className="wedding-invite-promo__image-link">
         <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--small">
            <img className="wedding-invite-promo__image" src="./assets/Favorites/wedding-flower0.png" alt="گل عروسی" />
         </div>
       </a>
       <a href="#" className="wedding-invite-promo__image-link">
         <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--small">
            <img className="wedding-invite-promo__image" src="./assets/Favorites/wedding-table0.png" alt="میز عروسی" />
         </div>
        </a>
    </div>
    <div className="wedding-invite-promo__image-group">
       <a href="#" className="wedding-invite-promo__image-link">
         <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--small">
           <img className="wedding-invite-promo__image" src="./assets/Favorites/cake-wedding0.png" alt="کیک عروسی" />
         </div>
       </a>
       <a href="#" className="wedding-invite-promo__image-link">
         <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--small">
           <img className="wedding-invite-promo__image" src="./assets/Favorites/wedding-stand0.png" alt="پایه کیک عروسی" />
         </div>
       </a>
    </div>
     <a href="#" className="wedding-invite-promo__image-link">
       <div className="wedding-invite-promo__image-wrapper wedding-invite-promo__image-wrapper--large">
         <img className="wedding-invite-promo__image" src="./assets/Favorites/bride0.png" alt="عروس" />
       </div>
     </a>
  </div>
  <p className="wedding-invite-promo__text">کارت دعوت عروسی رو خودتون طراحی کنید</p>
  <a href="#" className="wedding-invite-promo__button">
    <span className="wedding-invite-promo__button-text">شروع طراحی</span>
    <img className="wedding-invite-promo__button-icon" src="./assets/Favorites/vuesax-outline-brush1.svg" alt="آیکون قلمو" />
  </a>
</aside>

<div className="favorites-section__title-container">
  <div className="favorites-section__title-wrapper">
    <h2 className="favorites-section__title">علاقمندی ها</h2>
    <img className="favorites-section__title-icon" src="./assets/Favorites/vuesax-outline-like1.svg" alt="آیکون علاقمندی" />
  </div>
</div>

<div className="favorites-products-list">
  <article className="product-card">
    <a href="#" className="product-card__image-link">
      <div className="product-card__image" style={{backgroundImage: `url('./assets/Favorites/img0.png')`}}>
        <div className="product-card__colors">
          <span className="product-card__color-swatch product-card__color-swatch--white"></span>
          <span className="product-card__color-swatch product-card__color-swatch--black"></span>
          <span className="product-card__color-swatch product-card__color-swatch--yellow"></span>
          <span className="product-card__color-swatch product-card__color-swatch--green"></span>
          <span className="product-card__color-swatch product-card__color-swatch--orange"></span>
        </div>
      </div>
    </a>
    <div className="product-card__info">
      <div className="product-card__details">
        <div className="product-card__header">
           <a href="#" className="product-card__name-link">
             <h3 className="product-card__name">تیشرت مردانه</h3>
           </a>
          <button className="product-card__like-button" aria-label="افزودن به علاقمندی‌ها">
            <img className="product-card__like-icon" src="./assets/Favorites/heart-10.svg" alt="آیکون قلب" />
          </button>
        </div>
        <p className="product-card__description">دارای رنگ بندی، قابل طراحی</p>
      </div>
      <div className="product-card__price">
        <span className="product-card__price-amount">۱۵۰,۰۰۰</span>
        <span className="product-card__price-currency">تومان</span>
      </div>
    </div>
  </article>

  <article className="product-card">
     <a href="#" className="product-card__image-link">
      <div className="product-card__image" style={{backgroundImage: `url('./assets/Favorites/img1.png')`}}>
        <div className="product-card__colors">
          <span className="product-card__color-swatch product-card__color-swatch--white"></span>
          <span className="product-card__color-swatch product-card__color-swatch--black"></span>
          <span className="product-card__color-swatch product-card__color-swatch--yellow"></span>
          <span className="product-card__color-swatch product-card__color-swatch--green"></span>
          <span className="product-card__color-swatch product-card__color-swatch--orange"></span>
        </div>
      </div>
    </a>
    <div className="product-card__info">
      <div className="product-card__details">
        <div className="product-card__header">
           <a href="#" className="product-card__name-link">
            <h3 className="product-card__name">قاب موبایل آیفون</h3>
          </a>
          <button className="product-card__like-button" aria-label="افزودن به علاقمندی‌ها">
            <img className="product-card__like-icon" src="./assets/Favorites/heart-11.svg" alt="آیکون قلب" />
          </button>
        </div>
        <p className="product-card__description">دارای رنگ بندی، قابل طراحی</p>
      </div>
      <div className="product-card__price">
        <span className="product-card__price-amount">۱۵۰,۰۰۰</span>
        <span className="product-card__price-currency">تومان</span>
      </div>
    </div>
  </article>

  <article className="product-card">
     <a href="#" className="product-card__image-link">
      <div className="product-card__image" style={{backgroundImage: `url('./assets/Favorites/img2.png')`}}>
        <div className="product-card__colors">
           <span className="product-card__color-swatch product-card__color-swatch--white"></span>
          <span className="product-card__color-swatch product-card__color-swatch--red"></span>
          <span className="product-card__color-swatch product-card__color-swatch--yellow"></span>
          <span className="product-card__color-swatch product-card__color-swatch--green"></span>
          <span className="product-card__color-swatch product-card__color-swatch--orange"></span>
        </div>
      </div>
    </a>
    <div className="product-card__info">
      <div className="product-card__details">
        <div className="product-card__header">
          <a href="#" className="product-card__name-link">
            <h3 className="product-card__name">جوراب زنانه</h3>
           </a>
          <button className="product-card__like-button" aria-label="افزودن به علاقمندی‌ها">
            <img className="product-card__like-icon" src="./assets/Favorites/heart-12.svg" alt="آیکون قلب" />
          </button>
        </div>
        <p className="product-card__description">دارای رنگ بندی، قابل طراحی</p>
      </div>
      <div className="product-card__price">
        <span className="product-card__price-amount">۱۵۰,۰۰۰</span>
        <span className="product-card__price-currency">تومان</span>
      </div>
    </div>
  </article>

  <article className="product-card">
    <a href="#" className="product-card__image-link">
      <div className="product-card__image" style={{backgroundImage: `url('./assets/Favorites/img3.png')`}}>
        <div className="product-card__colors">
           <span className="product-card__color-swatch product-card__color-swatch--white"></span>
          <span className="product-card__color-swatch product-card__color-swatch--red"></span>
          <span className="product-card__color-swatch product-card__color-swatch--yellow"></span>
          <span className="product-card__color-swatch product-card__color-swatch--green"></span>
          <span className="product-card__color-swatch product-card__color-swatch--orange"></span>
        </div>
      </div>
    </a>
    <div className="product-card__info">
      <div className="product-card__details">
        <div className="product-card__header">
           <a href="#" className="product-card__name-link">
            <h3 className="product-card__name">کیف زنانه</h3>
          </a>
          <button className="product-card__like-button" aria-label="افزودن به علاقمندی‌ها">
            <img className="product-card__like-icon" src="./assets/Favorites/heart-13.svg" alt="آیکون قلب" />
          </button>
        </div>
        <p className="product-card__description">دارای رنگ بندی، قابل طراحی</p>
      </div>
      <div className="product-card__price">
        <span className="product-card__price-amount">۱۵۰,۰۰۰</span>
        <span className="product-card__price-currency">تومان</span>
      </div>
    </div>
  </article>
</div>

</section>

                </main>
            <Footer />
        </>
    );
}

export default Home;