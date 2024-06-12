import './MainPage.css';

import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

const MainPage: React.FC = () => {
  const user1 = { id: 1, name: "Михаил", email: "artem@gmail.com", role: { "Ученик": true }, message: 2, image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
  const user2 = { id: 2, name: "Анна", email: "artem@gmail.com", role: { "Ученик": true }, message: 1, image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
  // Задаем дату окончания события (может быть любая дата в будущем)
const endDate: Date = new Date('2024-06-30T00:00:00');

// Функция для вычисления оставшегося времени
function getTimeRemaining(endTime: Date): { days: number, hours: number, minutes: number } {
  // Текущая дата и время
  const currentTime: Date = new Date();

  // Разница между текущим временем и временем окончания события
  let timeDiff: number = endTime.getTime() - currentTime.getTime();

  // Вычисляем дни, часы, минуты и секунды
  const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes: number = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
  // Возвращаем объект с полученными значениями
  return {
    days: days,
    hours: hours,
    minutes: minutes
  };
}

// Получаем оставшееся время до заданной даты
const remainingTime = getTimeRemaining(endDate);

  const [activeUser, setActiveUser] = useState("user1");

  return (
    <div className="main-page">
      <Sidebar/>
      <div className="content">
        <header className="header">
          <p>Добро пожаловать, 
              {activeUser === 'user1' && user1.message > 0 && (
                <span className="user-name">{user1.name}</span>
              )}
              {activeUser === 'user2' && user2.message > 0 && (
                <span className="user-name">{user2.name}</span>
              )}!
          </p>
          <div className="user-profile">
            <a className="chat" href="">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="24" r="20.5" fill="white" stroke="#7362BC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M27 33.5H23.5C22.5334 33.5 21.75 32.7166 21.75 31.75V27.0833C21.75 26.1167 22.5334 25.3333 23.5 25.3333H30.5C31.4666 25.3333 32.25 26.1167 32.25 27.0833V31.75C32.25 32.7166 31.4666 33.5 30.5 33.5H29.625V35.25L27 33.5Z" fill="#EEEEFF" stroke="#434B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 29H24C25.657 29 27 27.657 27 26V18C27 16.343 25.657 15 24 15H12C10.343 15 9 16.343 9 18V26C9 27.657 10.343 29 12 29H13.5V32L18 29Z" fill="#FFF1CB" stroke="#434B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.6768 22.3232C18.7744 22.4209 18.7744 22.5791 18.6768 22.6768C18.5791 22.7744 18.4209 22.7744 18.3232 22.6768C18.2256 22.5791 18.2256 22.4209 18.3232 22.3232C18.4209 22.2256 18.5791 22.2256 18.6768 22.3232" stroke="#434B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.6768 22.3232C22.7744 22.4209 22.7744 22.5791 22.6768 22.6768C22.5791 22.7744 22.4209 22.7744 22.3232 22.6768C22.2256 22.5791 22.2256 22.4209 22.3232 22.3232C22.4209 22.2256 22.5791 22.2256 22.6768 22.3232" stroke="#434B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6768 22.3232C14.7744 22.4209 14.7744 22.5791 14.6768 22.6768C14.5791 22.7744 14.4209 22.7744 14.3232 22.6768C14.2256 22.5791 14.2256 22.4209 14.3232 22.3232C14.4209 22.2256 14.5791 22.2256 14.6768 22.3232" stroke="#434B74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M39.1272 10.3V10.63C39.1272 10.83 38.9572 11 38.7572 11H35.0272C34.8272 11 34.6572 10.83 34.6572 10.63V10.42C34.6572 10.23 34.7672 10.02 34.9972 9.81C35.3572 9.47 35.6672 9.17 35.9172 8.91C36.1672 8.65 36.4372 8.34 36.7372 7.98C37.3272 7.26 37.6372 6.57 37.6372 5.98C37.6372 5.41 37.3172 5.07 36.7472 5.07C36.3772 5.07 36.0572 5.26 35.8072 5.64C35.7272 5.77 35.6172 5.84 35.4672 5.84C35.4072 5.84 35.3472 5.82 35.2772 5.79L35.0072 5.65C34.8772 5.58 34.8072 5.47 34.8072 5.32C34.8072 5.27 34.8172 5.22 34.8472 5.17C35.3172 4.29 35.8872 3.92 36.8772 3.92C37.5072 3.92 37.9872 4.1 38.3372 4.46C38.6872 4.82 38.8572 5.25 38.8572 5.75C38.8572 6.48 38.4972 7.34 38.0972 7.93C37.8972 8.22 37.6572 8.52 37.3772 8.83C37.0872 9.14 36.8672 9.36 36.7172 9.5C36.5572 9.65 36.3872 9.79 36.2172 9.93H38.7572C38.9572 9.93 39.1272 10.1 39.1272 10.3Z" fill="white"/>
              </svg>
              {activeUser === 'user1' && user1.message > 0 && (
                <div className='new-mess'>{user1.message}</div>
              )}
              {activeUser === 'user2' && user2.message > 0 && (
                <div className='new-mess'>{user2.message}</div>
              )}
            </a>
            <div className="dropdown">
              <button className="btn">
                {activeUser === 'user1' && user1.message > 0 && (
                <img className="btn-user" src={user1.image} alt="user" />
              )}
              {activeUser === 'user2' && user2.message > 0 && (
                <img className="btn-user" src={user2.image} alt="user" />
              )}
              </button>
              <div className="dropdown-content">
                <p>Смена пользователя</p>
                <div
                  className={`change-user ${activeUser === 'user1' ? 'change-user-active' : ''}`}
                  style={{ backgroundColor: activeUser === 'user1' ? '#EEEEFF' : '#FFF' }}
                  onClick={() => setActiveUser('user1')}
                >
                  <div>
                    <img className="btn-user" src={user1.image} alt="user" />
                  </div>
                  <div className="change-user-name">
                    <span>{user1.name}</span>
                    {activeUser === 'user1' && (
                      <>
                        <br />
                        <small>Это вы</small>
                      </>
                    )}
                  </div>
                </div>
                <div
                  className={`change-user ${activeUser === 'user2' ? 'change-user-active' : ''}`}
                  style={{ backgroundColor: activeUser === 'user2' ? '#EEEEFF' : '#FFF' }}
                  onClick={() => setActiveUser('user2')}
                >
                  <div>
                    <img className="btn-user" src={user2.image} alt="user" />
                  </div>
                  <div className="change-user-name">
                    <span>{user2.name}</span>
                    {activeUser === 'user2' && (
                      <>
                        <br />
                        <small>Это вы</small>
                      </>
                    )}
                  </div>
                </div>
                <hr/>
                <div className="logout">
                  <div>
                    <a className='logout-link' href="/">Выход</a>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4445 8.44253L20.0019 12L16.4445 15.5575" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.33191 12L20.0034 12" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.55432 3.99666C5.58958 3.99666 3.99684 5.5894 3.99684 7.55414L3.99684 16.4458C3.99684 18.4106 5.58958 20.0033 7.55432 20.0033" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className='promo'>
            <section className="promo-banner">
              <div>
                <p className="promo-banner-title">До 31 декабря любой курс со скидкой 20%</p>
                <p className="promo-banner-content">До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
              </div>
              <img className='promo-banner-img' src="/src/assets/SF_21.svg" alt="shop" />
            </section>
            <section className="upcoming-banner">
              <p className="upcoming-banner-title">Следующее занятие начнется через:</p>
              <p className='timer'>{remainingTime.days}<small className='small'>д</small> {remainingTime.hours}<small className='small'>ч</small> {remainingTime.minutes}<small className='small'>мин</small></p>
              <button className='upcoming-btn'>Button</button>
            </section>
            <section className="pink-banner">
              <h2>Title </h2>
              <p>content</p>
            </section>
          </div>
          <div className="content">
            <section className="lessons-balance">
              <h2>Баланс занятий</h2>
              <ul>
                <li>
                  <span>Ментальная Арифметика</span>
                  <span>32</span>
                </li>
                <li>
                  <span>Программирование</span>
                  <span>0</span>
                </li>
                <li>
                  <span>Скорочтение</span>
                  <span>4</span>
                </li>
              </ul>
              <button>Button</button>
            </section>
            <section className="upcoming-lessons">
              <h2>Ближайшие уроки</h2>
              <ul>
                <li>
                  <span>Ментальная Арифметика</span>
                  <span>14:00-14:25</span>
                  <span>Белкина Инна</span>
                  <button>Button</button>
                  <button>Button</button>
                </li>
                <li>
                  <span>Программирование</span>
                  <span>11:00-11:11</span>
                  <span>Животовская Оксана</span>
                  <button>Button</button>
                  <button>Button</button>
                </li>
                <li>
                  <span>Скорочтение</span>
                  <span>09:00-09:45</span>
                  <span>Мина Елена</span>
                  <button>Button</button>
                  <button>Button</button>
                </li>
              </ul>
              <button>Button</button>
            </section>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default MainPage;
