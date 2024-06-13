import './Timetable.css';

import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

const Timetable: React.FC = () => {

    return (
        <div className="timetable-container">
            <Sidebar/>
            <h1>Timetable</h1>
        </div>
    );
};

export default Timetable;
