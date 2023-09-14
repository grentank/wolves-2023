import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllStudentsPage from './pages/AllStudentsPage';
import AddStudentPage from './pages/AddStudentPage';
import OneStudentPage from './pages/OneStudentPage';
import NavBar from './ui/NavBar';
import JokePage from './pages/JokePage';
import CounterPage from './pages/CounterPage';
import EditStudentPage from './pages/EditStudentPage';

export default function App({ allStudents, oneStudent, editStudent }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/students"
          element={<AllStudentsPage allStudents={allStudents} />}
        />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route
          path="/students/:id"
          element={<OneStudentPage oneStudent={oneStudent} />}
        />
        <Route
          path="/students/:id/edit"
          element={<EditStudentPage editStudent={editStudent} />}
        />
        <Route path="/joke" element={<JokePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </div>
  );
}
