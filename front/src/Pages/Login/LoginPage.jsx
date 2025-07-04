import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './LoginPage.css';

import background from '../../assets/images/background.svg';
import character1 from '../../assets/images/character-1.svg';
import screen from '../../assets/images/screen.svg';
import shadow from '../../assets/images/shadow.svg';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: formData.username,
                password: formData.password
            });

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;

            navigate('/user-profile');

        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('نام کاربری یا رمز عبور اشتباه است.');
            } else {
                setError('خطایی در ارتباط با سرور رخ داد. لطفاً دوباره تلاش کنید.');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="LP-page-container">
            <div className="LP-form-column">
                <div className="LP-form-wrapper">
                    <h1 className="LP-title">ورود به حساب کاربری</h1>
                    <p className="LP-subtitle">برای دسترسی به پنل کاربری خود وارد شوید.</p>

                    <form onSubmit={handleSubmit} className="LP-form">
                        <div className="LP-form-group">
                            <label htmlFor="username">ایمیل</label>
                            <input
                                type="email"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="LP-form-group">
                            <label htmlFor="password">کلمه عبور</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="کلمه عبور خود را وارد کنید"
                            />
                        </div>
                        
                        {error && <p className="LP-error-message">{error}</p>}

                        <div className="LP-form-actions">
                            <div className="LP-remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">مرا به خاطر بسپار</label>
                            </div>
                            <a href="#" className="LP-forgot-password">فراموشی رمز عبور</a>
                        </div>

                        <button type="submit" className="LP-submit-button" disabled={loading}>
                            {loading ? 'در حال ورود...' : 'ورود'}
                        </button>
                    </form>

                    <p className="LP-signup-link">
                        حساب کاربری ندارید؟ <Link to="/signup">ثبت نام کنید</Link>
                    </p>
                </div>
            </div>
            <div className="LP-illustration-column">
                {/* <div className="LP-illustration">
                    <img className="LP-illustration-background" src={background} alt="Background" />
                    <img className="LP-illustration-shadow" src={shadow} alt="Shadow" />
                    <img className="LP-illustration-screen" src={screen} alt="Screen" />
                    <img className="LP-illustration-character" src={character1} alt="Character" />
                </div> */}
            </div>
        </main>
    );
};

export default LoginPage;