import React, { useState } from 'react';

import './DesignerSignUp.css';

import background from '../../assets/images/background.svg';
import shadow from '../../assets/images/shadow.svg';
import character2 from '../../assets/images/character-2.svg';
import screen from '../../assets/images/screen.svg';
import character1 from '../../assets/images/character-1.svg';
import callIcon from '../../assets/icons/call.svg';
import lineIcon from '../../assets/icons/line.svg';
import userIcon from '../../assets/icons/user.svg';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';

const DesignerSignUp = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    education: '',
    occupation: '',
    email: '',
    password: '',
    birthDate: '',
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
    onNext(formData); 
    };

  return (
    <main className="DSU-page-container">
      <div className="DSU-illustration-column">
        <div className="DSU-illustration">
          <img className="DSU-illustration__background" src={background} alt="تصویر پس زمینه" />
          <img className="DSU-illustration__shadow" src={shadow} alt="سایه" />
          <img className="DSU-illustration__character-2" src={character2} alt="شخصیت 2" />
          <img className="DSU-illustration__screen" src={screen} alt="صفحه نمایش" />
          <img className="DSU-illustration__character-1" src={character1} alt="شخصیت 1" />
        </div>
      </div>

      <div className="DSU-form-column">
        <div className="DSU-stepper">
          <div className="DSU-stepper__step">
            <div className="DSU-stepper__icon"><img src={callIcon} alt="اطلاعات تماس" /></div>
            <span className="DSU-stepper__text">اطلاعات تماس</span>
          </div>
          <img className="DSU-stepper__line" src={lineIcon} alt="خط جداکننده" />
          <div className="DSU-stepper__step DSU-stepper__step--active">
            <div className="DSU-stepper__icon"><img src={userIcon} alt="اطلاعات کاربر" /></div>
            <span className="DSU-stepper__text">اطلاعات کاربر</span>
          </div>
        </div>

        <h1 className="DSU-form-title">فرم ثبت اطلاعات</h1>

        <form className="DSU-form-grid" onSubmit={handleSubmit}>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="fullName">نام و نام خانوادگی</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="DSU-form-group__input"
              placeholder="مثلا: نگار زمانی"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="nationalId">کد ملی</label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              className="DSU-form-group__input"
              placeholder="کد ملی ۱۰ رقمی"
              value={formData.nationalId}
              onChange={handleChange}
            />
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="education">تحصیلات (اختیاری)</label>
            <div className="DSU-form-group__select-wrapper">
              <select
                id="education"
                name="education"
                className="DSU-form-group__select"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="" disabled>انتخاب کنید</option>
                <option value="bachelor">کارشناسی</option>
                <option value="master">کارشناسی ارشد</option>
                <option value="phd">دکتری</option>
              </select>
              <div className="DSU-form-group__select-icon"><img src={arrowDownIcon} alt="انتخاب" /></div>
            </div>
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="occupation">شغل (اختیاری)</label>
            <div className="DSU-form-group__select-wrapper">
              <select
                id="occupation"
                name="occupation"
                className="DSU-form-group__select"
                value={formData.occupation}
                onChange={handleChange}
              >
                <option value="" disabled>انتخاب کنید</option>
                <option value="employee">کارمند</option>
                <option value="student">دانشجو</option>
                <option value="freelancer">آزادکار</option>
              </select>
              <div className="DSU-form-group__select-icon"><img src={arrowDownIcon} alt="انتخاب" /></div>
            </div>
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="email">آدرس ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              className="DSU-form-group__input"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="password">کلمه عبور</label>
            <input
              type="password"
              id="password"
              name="password"
              className="DSU-form-group__input"
              placeholder="حداقل ۸ کاراکتر"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="DSU-form-group">
            <label className="DSU-form-group__label" htmlFor="birthDate">تاریخ تولد</label>
            <div className="DSU-form-group__input-wrapper">
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                className="DSU-form-group__input"
                placeholder="مثلا: ۱۳۷۰/۰۱/۰۱"
                value={formData.birthDate}
                onChange={handleChange}
              />
              <div className="DSU-form-group__calendar-icon"><img src={calendarIcon} alt="تقویم" /></div>
            </div>
          </div>
          <button type="submit" className="DSU-button DSU-button--primary">
            <div className="DSU-button__icon"><img src={arrowLeftIcon} alt="مرحله بعدی" /></div>
            <span className="DSU-button__text">مرحله بعدی</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default DesignerSignUp;