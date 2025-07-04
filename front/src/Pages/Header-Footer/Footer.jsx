import React from "react";
import "./Styles/Footer.css";
import {} from "iconsax-reactjs";

function Footer() {
    return (
        <>
           <footer className="site-footer">
            <div className="site-footer__upper-band">
            <section className="site-footer__social">
                <h4 className="site-footer__social-title">ما را در شبکه های اجتماعی دنبال کنید</h4>
                <ul className="site-footer__social-links">
                <li className="site-footer__social-item"><a href="#" aria-label="Instagram"><img className="site-footer__social-icon" src="./Header-Footer/Instagram.png" alt="Instagram" /></a></li>
                <li className="site-footer__social-item"><a href="#" aria-label="Facebook"><img className="site-footer__social-icon" src="./Header-Footer/Facebook.png" alt="Facebook" /></a></li>
                <li className="site-footer__social-item"><a href="#" aria-label="Pinterest"><img className="site-footer__social-icon" src="./Header-Footer/Pinterest.png" alt="Pinterest" /></a></li>
                <li className="site-footer__social-item"><a href="#" aria-label="YouTube"><img className="site-footer__social-icon site-footer__social-icon--youtube" src="./Header-Footer/youtube_icon.png" alt="YouTube" /></a></li>
                </ul>
            </section>
        
            <section className="site-footer__newsletter">
                <p className="site-footer__newsletter-prompt">برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد نمایید</p>
                <form className="site-footer__newsletter-form">
                <button type="submit" className="site-footer__newsletter-submit">ثبت</button>
                <input type="email" placeholder="ایمیل شما" className="site-footer__newsletter-input" required />
                </form>
            </section>
            </div>
        
            <div className="site-footer__main-content">
            <section className="site-footer__info">
                <h3 className="site-footer__brand-name">فروشگاه اینترنتی کاستومی</h3>
                <div className="site-footer__contact">
                <p className="site-footer__contact-text">پاسخگویی ۲۴ ساعته ، ۷ روز هفته</p>
                <p className="site-footer__contact-text">تماس با پشتیبانی : <span className="site-footer__phone-number">۰۲۱-۳۴۵۶۰۰۰</span></p>
                </div>
                <div className="site-footer__licenses">
                    <img className="site-footer__license-icon" src="./Header-Footer/Kasbokarmajazi.png" alt="License 1" />
                    <img className="site-footer__license-icon" src="./Header-Footer/Samandihi.png" alt="License 2" />
                    <img className="site-footer__license-icon" src="./Header-Footer/e-namad.png" alt="License 3" />
                </div>
            </section>
        
            <nav className="site-footer__nav">
                <div className="site-footer__nav-column">
                <h4 className="site-footer__nav-title">راهنمای خرید</h4>
                <ul className="site-footer__nav-list">
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">راهنمای ثبت سفارش</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">شیوه های پرداخت</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">نحوه ارسال سفارش ها</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">شرایط بازگرداندن محصول</a></li>
                </ul>
                </div>
        
                <div className="site-footer__nav-column">
                <h4 className="site-footer__nav-title">خدمات مشتریان</h4>
                <ul className="site-footer__nav-list">
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">سوالات متداول</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">حریم خصوصی</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">ثبت شکایت</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">ضمانت نامه محصولات</a></li>
                </ul>
                </div>
        
                <div className="site-footer__nav-column">
                <h4 className="site-footer__nav-title">همراه با کاستومی</h4>
                <ul className="site-footer__nav-list">
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">فروش محصولات</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">فرصت همکاری</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">تماس با ما</a></li>
                    <li className="site-footer__nav-item"><a href="#" className="site-footer__nav-link">نقشه سایت</a></li>
                </ul>
                </div>
            </nav>
            </div>
        
            <div className="site-footer__copyright">
            <p className="site-footer__copyright-text">تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد</p>
            </div>
      </footer>
        </>
    );
}
  
export default Footer;

 