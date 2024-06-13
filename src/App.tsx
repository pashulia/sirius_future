// src/App.tsx
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Login from './pages/Login/Login';
import MainPage from './pages/Main/MainPage';
import Timetable from './pages/Timetable/Timetable';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
};

export default App;
