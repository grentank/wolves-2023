import React from 'react';
import StudentInfo from '../ui/StudentInfo';
import ReviewForm from '../ui/ReviewForm';
import ReviewItem from '../ui/ReviewItem';

export default function OneStudentPage({ oneStudent }) {
  return (
    <div className="row">
      <div className="col-4">
        <StudentInfo oneStudent={oneStudent} />
      </div>
      <div className="col-8">
        <div className="row justify-content-center">
          <div className="col-8">
            <ReviewForm studentId={oneStudent.id} />
          </div>
        </div>
        <div className="row justify-content-center">
          {oneStudent.Reviews.map((review) => (
            <div className="col-8">
              <ReviewItem review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
