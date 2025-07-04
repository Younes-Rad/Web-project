import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountInfoUser.css';
import ProfileSidebar from '../Components/Profile-sidebar';
import arrowDownIcon1 from '../../assets/AccountInfo/vuesax-bold-arrow-down1.svg';
import arrowDownIcon3 from '../../assets/AccountInfo/vuesax-bold-arrow-down3.svg';
import calendarIcon from '../../assets/AccountInfo/vuesax-outline-calendar1.svg';

const AccountInfoUser = () => {
    const [profileData, setProfileData] = useState(null);
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        nationalId: '',
        education: '',
        job: '',
        birthDate: '',
        email: '',
        newPassword: '',
        repeatPassword: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    console.error("Authentication token not found. Please log in.");
                    setLoading(false);
                    return;
                }
                
                const response = await axios.get('http://127.0.0.1:8000/api/users/me/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const { data } = response;
                setProfileData(data);

                setUserInfo({
                    fullName: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
                    nationalId: data.account.national_id || '',
                    education: data.account.education || '',
                    job: data.account.occupation || '',
                    birthDate: data.account.birth_date || '',
                    email: data.email || '',
                    newPassword: '',
                    repeatPassword: '',
                });

            } catch (error) {
                console.error('Failed to fetch user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userInfo.newPassword && userInfo.newPassword !== userInfo.repeatPassword) {
            alert('کلمه عبور جدید و تکرار آن یکسان نیستند.');
            return;
        }

        const nameParts = userInfo.fullName.split(' ').filter(n => n);
        const apiPayload = {
            first_name: nameParts[0] || '',
            last_name: nameParts.slice(1).join(' ') || nameParts[0],
            email: userInfo.email,
            account: {
                national_id: userInfo.nationalId,
                education: userInfo.education,
                occupation: userInfo.job,
                birth_date: userInfo.birthDate,
            }
        };

        if (userInfo.newPassword) {
            apiPayload.password = userInfo.newPassword;
        }

        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.patch('http://127.0.0.1:8000/api/users/me/', apiPayload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProfileData(response.data);
            alert('اطلاعات با موفقیت به‌روز شد!');

        } catch (error) {
            console.error('Failed to update user info:', error.response?.data);
            alert(`خطا در به‌روزرسانی: ${JSON.stringify(error.response?.data)}`);
        }
    };
    
    if (loading) {
        return <div>در حال بارگذاری اطلاعات حساب کاربری شما...</div>;
    }

    return (
        <>
            <section className="AIF-containerr">
                <div>
                    {profileData && <ProfileSidebar userData={profileData} />}
                </div>
                <section className="AIF-account-info">
                    <h1 className="AIF-account-info__title">اطلاعات حساب کاربری</h1>
                    
                    <nav className="AIF-account-info__tabs">
                        <a href="#" className="AIF-tab-menu">اطلاعات تماس</a>
                        <a href="#" className="AIF-tab-menu AIF-tab-menu--active">اطلاعات کاربری</a>
                    </nav>

                    <hr className="AIF-account-info__divider" />

                    <form className="AIF-form-grid" onSubmit={handleSubmit}>
                        <div className="AIF-form-group">
                            <label htmlFor="fullName" className="AIF-form-label">نام و نام خانوادگی</label>
                            <input type="text" id="fullName" name="fullName" className="AIF-form-input" value={userInfo.fullName} onChange={handleChange} />
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="nationalId" className="AIF-form-label">کد ملی</label>
                            <input type="text" id="nationalId" name="nationalId" className="AIF-form-input" value={userInfo.nationalId} onChange={handleChange} />
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="education" className="AIF-form-label">تحصیلات (اختیاری)</label>
                            <div className="AIF-select-wrapper">
                                <select id="education" name="education" className="AIF-form-select" value={userInfo.education} onChange={handleChange}>
                                    <option value="">انتخاب کنید</option>
                                    <option value="bachelor">کارشناسی</option>
                                    <option value="master">کارشناسی ارشد</option>
                                    <option value="phd">دکتری</option>
                                </select>
                                <img src={arrowDownIcon1} alt="انتخاب" className="AIF-select-arrow" />
                            </div>
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="job" className="AIF-form-label">شغل (اختیاری)</label>
                            <div className="AIF-select-wrapper">
                                <select id="job" name="job" className="AIF-form-select" value={userInfo.job} onChange={handleChange}>
                                    <option value="">انتخاب کنید</option>
                                    <option value="employee">کارمند</option>
                                    <option value="student">دانشجو</option>
                                    <option value="freelancer">آزادکار</option>
                                </select>
                                <img src={arrowDownIcon3} alt="انتخاب" className="AIF-select-arrow" />
                            </div>
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="birthDate" className="AIF-form-label">تاریخ تولد</label>
                            <div className="AIF-input-with-icon">
                                <input type="text" id="birthDate" name="birthDate" className="AIF-form-input" placeholder="YYYY-MM-DD" value={userInfo.birthDate} onChange={handleChange} />
                                <img src={calendarIcon} alt="تقویم" className="AIF-input-icon" />
                            </div>
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="email" className="AIF-form-label">آدرس ایمیل</label>
                            <input type="email" id="email" name="email" className="AIF-form-input" value={userInfo.email} onChange={handleChange} />
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="newPassword" className="AIF-form-label">کلمه عبور جدید</label>
                            <input type="password" id="newPassword" name="newPassword" className="AIF-form-input" placeholder="در صورت عدم تغییر، خالی بگذارید" value={userInfo.newPassword} onChange={handleChange} />
                        </div>
                        <div className="AIF-form-group">
                            <label htmlFor="repeatPassword" className="AIF-form-label">تکرار کلمه عبور جدید</label>
                            <input type="password" id="repeatPassword" name="repeatPassword" className="AIF-form-input" placeholder="کلمه عبور جدید را تکرار کنید" value={userInfo.repeatPassword} onChange={handleChange} />
                        </div>
                        <button type="submit" className="AIF-button-submit">ثبت اطلاعات</button>
                    </form>
                </section>
            </section> 
        </>
    );
};

export default AccountInfoUser;