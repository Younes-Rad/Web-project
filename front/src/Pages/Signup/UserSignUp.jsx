import React, { useState } from 'react';

import './UserSignUp.css';


import illustrationImg from '../../assets/UserSignUp/group0.svg';
import callIcon from '../../assets/UserSignUp/vuesax-bold-call1.svg';
import lineSeparator from '../../assets/UserSignUp/line0.svg';
import userIcon from '../../assets/UserSignUp/vuesax-outline-user1.svg';
import arrowDownIcon1 from '../../assets/UserSignUp/vuesax-bold-arrow-down1.svg';
import arrowDownIcon3 from '../../assets/UserSignUp/vuesax-bold-arrow-down3.svg';
import mapImage from '../../assets/UserSignUp/thumbnail-20.png';
import mapMarker from '../../assets/UserSignUp/untitled-1-no-bg0.png';


const UserSignUpForm = ({ onFinalSubmit }) => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    landlineNumber: '',
    province: 'tehran',
    city: 'tehran',
    postalCode: '',
    fullAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        onFinalSubmit(formData);
    };

  return (
    <main className="USU-page-container">
      <aside className="USU-illustration-column">
        <img className="USU-illustration-img" src={illustrationImg} alt="Illustration" />
      </aside>

      <section className="USU-form-column">
        <div className="USU-stepper">
          <div className="USU-stepper-step USU-stepper-step--active">
            <div className="USU-stepper-icon"><img src={callIcon} alt="اطلاعات تماس" /></div>
            <span className="USU-stepper-text">اطلاعات تماس</span>
          </div>
          <img className="USU-stepper-line" src={lineSeparator} alt="جداکننده" />
          <div className="USU-stepper-step">
            <div className="USU-stepper-icon"><img src={userIcon} alt="اطلاعات کاربر" /></div>
            <span className="USU-stepper-text USU-stepper-text--inactive">اطلاعات کاربر</span>
          </div>
        </div>

        <h1 className="USU-form-title">فرم ثبت اطلاعات</h1>

        <form className="USU-form-grid" onSubmit={handleSubmit}>
          {/* ... بقیه فرم ... */}
          <div className="USU-form-group">
            <label htmlFor="mobileNumber" className="USU-form-label">شماره موبایل</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" className="USU-form-input" placeholder="مثلا: ۰۹۱۲۳۴۵۶۷۸۹" value={formData.mobileNumber} onChange={handleChange} />
          </div>

          <div className="USU-form-group">
            <label htmlFor="landlineNumber" className="USU-form-label">شماره تلفن (همراه با کد شهر)</label>
            <input type="tel" id="landlineNumber" name="landlineNumber" className="USU-form-input" placeholder="مثلا: ۰۲۱۵۵۵۵۵۵۵۵" value={formData.landlineNumber} onChange={handleChange} />
          </div>

          <div className="USU-form-group">
            <label htmlFor="province" className="USU-form-label">استان</label>
            <div className="USU-select-wrapper">
              <select id="province" name="province" className="USU-form-select" value={formData.province} onChange={handleChange}>
                <option value="tehran">تهران</option>
                <option value="isfahan">اصفهان</option>
              </select>
              <img className="USU-select-arrow" src={arrowDownIcon1} alt="انتخاب" />
            </div>
          </div>

          <div className="USU-form-group">
            <label htmlFor="city" className="USU-form-label">شهر</label>
            <div className="USU-select-wrapper">
              <select id="city" name="city" className="USU-form-select" value={formData.city} onChange={handleChange}>
                <option value="tehran">تهران</option>
                <option value="shahriar">شهریار</option>
              </select>
              <img className="USU-select-arrow" src={arrowDownIcon3} alt="انتخاب" />
            </div>
          </div>

          <div className="USU-form-group">
            <label htmlFor="postalCode" className="USU-form-label">کد پستی</label>
            <input type="text" id="postalCode" name="postalCode" className="USU-form-input" placeholder="کد پستی ۱۰ رقمی" value={formData.postalCode} onChange={handleChange} />
          </div>

          <div className="USU-form-group USU-form-group--full-width">
            <label htmlFor="fullAddress" className="USU-form-label">آدرس کامل پستی (می‌توانید از نقشه استفاده کنید)</label>
            <textarea id="fullAddress" name="fullAddress" className="USU-form-textarea" placeholder="خیابان، کوچه، پلاک..." rows="3" value={formData.fullAddress} onChange={handleChange}></textarea>
          </div>

          <div className="USU-form-group USU-form-group--full-width">
            <div className="USU-map-container">
              <img className="USU-map-image" src={mapImage} alt="نقشه" />
              <img className="USU-map-marker" src={mapMarker} alt="نشانگر" />
            </div>
          </div>
          
          <button type="submit" className="USU-button-submit">ثبت اطلاعات</button>
        </form>
      </section>
    </main>
  );
};

export default UserSignUpForm;