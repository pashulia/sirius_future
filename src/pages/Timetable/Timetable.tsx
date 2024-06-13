import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Timetable.css';

import React, {
  useEffect,
  useState,
} from 'react';

import moment from 'moment';
import {
  Calendar,
  Event,
  momentLocalizer,
} from 'react-big-calendar';
import Modal from 'react-modal';

import Sidebar from '../../components/Sidebar/Sidebar';

const localizer = momentLocalizer(moment);

const lessons = ["Ментальная Арифметика", "Программирование", "Скорочтение"];
const storageKey = 'calendarEvents';

const Timetable: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');

    useEffect(() => {
        const storedEvents = localStorage.getItem(storageKey);
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(events));
    }, [events]);

    const handleSelectSlot = ({ start }: { start: Date }) => {
        const today = moment().startOf('day');
        const selectedDay = moment(start).startOf('day');
        if (selectedDay.isAfter(today)) {
            setSelectedDate(start);
            setModalIsOpen(true);
        } else {
            alert('Вы можете выбрать только даты, начиная с завтрашнего дня.');
        }
    };

    const handleAddEvent = () => {
        if (selectedDate && selectedLesson && selectedTime) {
            const startTime = moment(selectedDate).set({
                hour: parseInt(selectedTime.split(':')[0], 10),
                minute: parseInt(selectedTime.split(':')[1], 10)
            }).toDate();

            const endTime = moment(startTime).add(45, 'minutes').toDate();

            const overlappingEvent = events.some(event => 
                (moment(event.start).isBefore(endTime) && moment(event.end).isAfter(startTime))
            );

            if (!overlappingEvent) {
                setEvents([...events, {
                    title: selectedLesson,
                    start: startTime,
                    end: endTime
                }]);

                setModalIsOpen(false);
                setSelectedLesson('');
                setSelectedTime('');
            } else {
                alert('На это время у вас уже запланирован урок.');
            }
        }
    };

    return (
        <div className="timetable-page">
            <Sidebar />
            <div className='container'>
                <header className="timetable-header">
                    <p className='timetable-title'>Расписание</p>
                </header>
                <hr />
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 700, width: 1300 }}
                    selectable
                    onSelectSlot={handleSelectSlot}
                    messages={{
                        today: 'Сегодня',
                        previous: 'Назад',
                        next: 'Вперед',
                        month: 'Месяц',
                        week: 'Неделя',
                        day: 'День',
                        agenda: 'Повестка дня',
                    }}
                />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    contentLabel="Select Lesson and Time"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <h2>Выберите урок и время</h2>
                    <div>
                        <label>
                            Урок:
                            <select value={selectedLesson} onChange={(e) => setSelectedLesson(e.target.value)}>
                                <option value="">Выберите урок</option>
                                {lessons.map((lesson, index) => (
                                    <option key={index} value={lesson}>{lesson}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Время:
                            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                                <option value="">Выберите время</option>
                                {Array.from({ length: 8 }, (_, i) => {
                                    const time = moment({ hour: 10 + i }).format('HH:mm');
                                    return <option key={i} value={time}>{time}</option>;
                                })}
                            </select>
                        </label>
                    </div>
                    <button onClick={handleAddEvent}>Добавить</button>
                </Modal>
            </div>
        </div>
    );
};

export default Timetable;
