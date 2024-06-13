import './LessonsList.css';

import React from 'react';

interface LessonData {
    dates: Date[];
    duration: number;
    teacher: string;
}

const lessons: Record<string, LessonData> = {
    "Ментальная Арифметика": {
        dates: [
            new Date('2024-07-01T14:00:00'),
        ],
        duration: 25,
        teacher: "Белкина Инна",
    },
    "Программирование": {
        dates: [
            new Date('2024-10-30T11:00:00'),
        ],
        duration: 45,
        teacher: "Животовская Оксана",
    },
    "Скорочтение": {
        dates: [
            new Date('2024-11-16T09:00:00'),
        ],
        duration: 45,
        teacher: "Мина Елена",
    },
};

const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    const formattedTime = date.toLocaleTimeString('ru-RU', timeOptions);
    return { date: formattedDate, time: formattedTime };
};

const LessonsList: React.FC = () => {
    return (
        <div className="lessons-list">
            <h2>Ближайшие уроки</h2>
            {Object.entries(lessons).map(([lessonName, lessonData]) => (
                lessonData.dates.map((date, index) => {
                    const { date: formattedDate, time } = formatDateTime(date);
                    return (
                        <div key={`${lessonName}-${index}`} className="lesson-item">
                            <div className="lesson-date">
                                <span className="lesson-day">{date.getDate()}</span>
                                <span className="lesson-month">{formattedDate.split(' ')[1]}</span>
                            </div>
                            <div className="lesson-info">
                                <p className="lesson-title">{lessonName}</p>
                                <p className="lesson-time">{`${time}-${new Date(date.getTime() + lessonData.duration * 60000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`}</p>
                                <div className="lesson-icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.3893C4.046 10.3726 5.46133 9.74731 7.01533 9.74731C8.554 9.74731 9.954 10.36 11 11.358C9.954 12.3746 8.53867 13 6.98467 13C5.446 13 4.046 12.3873 3 11.3893Z" stroke="#79747F" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.65 9.68333C1.24333 8.874 1 7.968 1 7C1 3.684 3.684 1 7 1C10.316 1 13 3.684 13 7C13 7.96667 12.758 8.87333 12.3487 9.682" stroke="#79747F" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.41421 4.25247C9.19526 5.03352 9.19526 6.29985 8.41421 7.0809C7.63316 7.86195 6.36683 7.86195 5.58579 7.0809C4.80474 6.29985 4.80474 5.03352 5.58579 4.25247C6.36683 3.47143 7.63316 3.47143 8.41421 4.25247" stroke="#79747F" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className="lesson-teacher">{lessonData.teacher}</p>
                            </div>
                            <div className="lesson-actions">
                                <button>Button</button>
                                <button>Button</button>
                            </div>
                        </div>
                    );
                })
            ))}
            <button className="main-button">Button</button>
        </div>
    );
};

export default LessonsList;
