import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllStudentsPage from './pages/AllStudentsPage';
import AddStudentPage from './pages/AddStudentPage';
import OneStudentPage from './pages/OneStudentPage';
import NavBar from './ui/NavBar';

export default function App({ allStudents, oneStudent }) {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/students" element={<AllStudentsPage allStudents={allStudents} />} />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route path="/students/:id" element={<OneStudentPage oneStudent={oneStudent} />} />
      </Routes>
    </div>
  );
}
