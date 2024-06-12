import './Login.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<'ru' | 'en'>('ru');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLanguageChange = (language: 'ru' | 'en') => {
        setSelectedLanguage(language);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // логика для логина
        navigate('/main');
    };

    return (
        <div className="login-container">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.2069 49.5826C47.1065 47.8159 46.3611 46.1532 45.1033 44.8989C43.7415 43.53 41.9318 42.7774 40.0003 42.7774C36.5779 42.7774 33.3671 41.4443 30.9625 39.0254C29.4645 37.5275 28.3715 35.6891 27.7659 33.6859C17.3341 35.2985 12.7758 38.5595 12.7758 40.0001C12.7758 41.5554 18.0759 45.2286 30.321 46.662C31.7222 46.8269 32.7758 48.013 32.7758 49.4214V49.9983C32.7758 53.9797 36.0153 57.2193 39.9967 57.2193C41.9282 57.2193 43.738 56.4667 45.0925 55.105C46.4686 53.7396 47.2176 51.9299 47.2176 49.9948L47.2104 49.7224C47.214 49.6794 47.2104 49.6328 47.2069 49.5826Z" fill="url(#paint0_linear_1_714)"/>
                <path d="M49.6792 33.3386C48.278 33.1738 47.2244 31.9876 47.2244 30.5793V30.0023C47.2244 28.0707 46.4719 26.261 45.1101 24.9064C43.7448 23.5303 41.9351 22.7814 39.9999 22.7814C38.0684 22.7814 36.2587 23.5339 34.9041 24.8957C33.528 26.261 32.779 28.0707 32.779 30.0059L32.7862 30.4574C32.9044 32.2134 33.6534 33.8618 34.8969 35.1053C36.2587 36.4743 38.0684 37.2268 39.9999 37.2268C43.4222 37.2268 46.6331 38.5599 49.0377 40.9788C50.5392 42.4804 51.6287 44.3187 52.2307 46.3184C62.6661 44.7058 67.2208 41.4447 67.2208 40.0041C67.2244 38.4452 61.9243 34.7756 49.6792 33.3386Z" fill="url(#paint1_linear_1_714)"/>
                <path d="M40 0C17.9108 0 0 17.9108 0 40C0 62.0892 17.9108 80 40 80C62.0892 80 80 62.0892 80 40C80 17.9108 62.0928 0 40 0ZM60 17.2227C61.5338 17.2227 62.7773 18.4662 62.7773 20C62.7773 21.5338 61.5338 22.7773 60 22.7773C58.4662 22.7773 57.2227 21.5338 57.2227 20C57.2227 18.4662 58.4662 17.2227 60 17.2227ZM20 62.7809C18.4662 62.7809 17.2227 61.5374 17.2227 60.0036C17.2227 58.4698 18.4662 57.2263 20 57.2263C21.5338 57.2263 22.7773 58.4698 22.7773 60.0036C22.7773 61.5374 21.5338 62.7809 20 62.7809ZM52.6429 51.876C52.2487 54.5852 50.998 57.0794 49.0235 59.0396C46.6296 61.4478 43.4223 62.7809 40 62.7809C33.5925 62.7809 28.2673 58.0398 27.3607 51.8796C14.6999 50.0197 7.22451 45.6477 7.22451 40.0036C7.22451 34.363 14.6999 29.991 27.3607 28.1276C27.7549 25.4184 29.0056 22.9242 30.9801 20.964C33.3739 18.5558 36.5813 17.2227 40.0036 17.2227C43.4259 17.2227 46.6368 18.5558 49.0414 20.9747C51.0016 22.9242 52.2523 25.4148 52.6465 28.124C65.3073 29.9839 72.7827 34.3559 72.7827 40C72.7791 45.6406 65.3037 50.0125 52.6429 51.876Z" fill="url(#paint2_linear_1_714)"/>
                <defs>
                <linearGradient id="paint0_linear_1_714" x1="0.466493" y1="75.7757" x2="77.1862" y2="-0.943968" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stop-color="#DE1CFF"/>
                <stop offset="1" stop-color="#32D2FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_714" x1="4.22665" y1="79.5366" x2="80.9463" y2="2.81692" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stop-color="#DE1CFF"/>
                <stop offset="1" stop-color="#32D2FF"/>
                </linearGradient>
                <linearGradient id="paint2_linear_1_714" x1="2.34646" y1="77.6559" x2="79.0662" y2="0.93614" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stop-color="#DE1CFF"/>
                <stop offset="1" stop-color="#32D2FF"/>
                </linearGradient>
                </defs>
            </svg>
            <h1>Вход в Sirius Future</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="email" id="email" name="email" required placeholder='E-mail'/>
                </div>
                <div className="input-group password-group">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        required
                        placeholder='Пароль'
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="toggle-password"
                        aria-label={passwordVisible ? "Скрыть пароль" : "Показать пароль"}
                    >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2054 9.03845C9.77901 9.75736 8.95086 10.1357 8.12829 9.98734C7.30573 9.83899 6.66192 9.19518 6.51357 8.37262C6.36522 7.55005 6.74355 6.7219 7.46246 6.29553" stroke="#79747F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.4978 11.3309C11.348 12.2031 9.94332 12.6732 8.50011 12.6688C6.10871 12.7113 3.89914 11.3971 2.79507 9.27536C2.39847 8.47148 2.39847 7.52884 2.79507 6.72496C3.34723 5.62537 4.22743 4.72453 5.31393 4.14703" stroke="#79747F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.1178 9.42324C14.1445 9.37255 14.1793 9.32709 14.2046 9.27543C14.6012 8.47156 14.6012 7.52892 14.2046 6.72504C13.1006 4.60332 10.891 3.28904 8.49957 3.33163C8.34965 3.33163 8.20392 3.35164 8.05591 3.36139" stroke="#79747F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.5024 13.3354L3.16431 1.99731" stroke="#79747F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="input-group checkbox">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Запомнить меня</label>
                </div>
                <button type="submit">Войти</button>
            </form>
            <div className="links">
                <a className="link" href="/forgot-password">Я забыл пароль</a>
                <a className="link" href="/trainer-login">Войти как тренер</a>
            </div>
            <div className="register">
                <p className="akk">Нет аккаунта? </p><a className="link" href="/register">Зарегистрироваться</a>
            </div>
            <div className="language-switch">
                <label>
                    <input
                        type="radio"
                        name="language"
                        value="ru"
                        checked={selectedLanguage === 'ru'}
                        onChange={() => handleLanguageChange('ru')}
                    />
                    <span className={selectedLanguage === 'ru' ? 'selected' : ''}>RU</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="language"
                        value="en"
                        checked={selectedLanguage === 'en'}
                        onChange={() => handleLanguageChange('en')}
                    />
                    <span className={selectedLanguage === 'en' ? 'selected' : ''}>EN</span>
                </label>
            </div>
        </div>
    );
};

export default Login;
