import React from 'react';
import StudentForm from '../ui/StudentForm';

export default function AddStudentPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>Add a student</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <StudentForm />
        </div>
      </div>
    </div>
  );
}
