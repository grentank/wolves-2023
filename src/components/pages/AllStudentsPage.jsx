import React from 'react';
import StudentCard from '../ui/StudentCard';

export default function AllStudentsPage({ allStudents }) {
  return (
    <div className="row">
      {allStudents.map((student) => (
        <div
          key={student.id}
          className="col-12 justify-content-center align-items-center"
        >
          <StudentCard oneStudent={student} />
        </div>
      ))}
    </div>
  );
}
