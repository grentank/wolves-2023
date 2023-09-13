import React, { useState } from 'react';
import StudentCard from '../ui/StudentCard';

export default function AllStudentsPage({ allStudents }) {
  const [students, setStudents] = useState(allStudents);

  const deleteHandler = async (studentId) => {
    const response = await fetch(`/api/students/${studentId}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setStudents((prev) => prev.filter((student) => student.id !== studentId));
    }
  };

  return (
    <div className="row">
      {students.map((student) => (
        <div
          key={student.id}
          className="col-12 justify-content-center align-items-center"
        >
          <StudentCard oneStudent={student} deleteHandler={deleteHandler} />
        </div>
      ))}
    </div>
  );
}
