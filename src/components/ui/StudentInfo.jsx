import React from 'react';

export default function StudentInfo({ oneStudent }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`${oneStudent.git}.png`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{oneStudent.name}</h5>
        <p className="card-text">
          Какой-то текст
        </p>
      </div>
    </div>
  );
}
