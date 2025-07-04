import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import DesignerSignUp from './DesignerSignUp'; // مسیر را اصلاح کنید
import UserSignUp from './UserSignUp'; // مسیر را اصلاح کنید

const SignUpProcess = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleNextStep = (dataFromStep1) => {
        setFormData(prevData => ({ ...prevData, ...dataFromStep1 }));
        setStep(2);
    };

    const handleFinalSubmit = async (dataFromStep2) => {
        const finalData = { ...formData, ...dataFromStep2 };
        
        // تبدیل نام فیلدهای فرانت به فرمت بک‌اند
        const apiPayload = {
            first_name: finalData.fullName.split(' ')[0], // فرض می‌کنیم اسم اول، بخش اول است
            last_name: finalData.fullName.split(' ').slice(1).join(' '), // بقیه نام، نام خانوادگی
            username: finalData.email, // از ایمیل به عنوان نام کاربری استفاده می‌کنیم
            email: finalData.email,
            password: finalData.password,
            password2: finalData.password, // در فرم شما فیلد تکرار پسورد نبود، اینجا همان را می‌گذاریم
            account: {
                national_id: finalData.nationalId,
                education: finalData.education,
                occupation: finalData.occupation,
                birth_date: finalData.birthDate, // فرمت YYYY-MM-DD نیاز است
                mobile_phone_number: finalData.mobileNumber,
                phone_number: finalData.landlineNumber,
                province: finalData.province,
                city: finalData.city,
                postal_code: finalData.postalCode,
                full_address: finalData.fullAddress,
            }
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', apiPayload);
            console.log('Registration successful:', response.data);

            // ذخیره توکن‌ها برای لاگین خودکار
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            
            // تنظیم هدر پیش‌فرض برای درخواست‌های بعدی
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;

            // هدایت کاربر به داشبورد یا صفحه اصلی
            alert('ثبت‌نام با موفقیت انجام شد!');
            navigate('/accountinfo'); // یا هر مسیر دیگری

        } catch (error) {
            console.error('Registration failed:', error.response.data);
            // نمایش خطا به کاربر
            alert(`خطا در ثبت‌نام: ${JSON.stringify(error.response.data)}`);
        }
    };

    if (step === 1) {
        return <DesignerSignUp onNext={handleNextStep} />;
    }

    if (step === 2) {
        return <UserSignUp onFinalSubmit={handleFinalSubmit} />;
    }

    return null; // یا یک صفحه پیش‌فرض
};

export default SignUpProcess;