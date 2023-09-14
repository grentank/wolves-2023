import React from 'react'
import StudentForm from '../ui/StudentForm'

export default function EditStudentPage({ editStudent }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>Редактируем студента: {editStudent.name}</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <StudentForm editStudent={editStudent} />
        </div>
      </div>
    </div>
  )
}
