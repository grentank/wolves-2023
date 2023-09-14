import React, { useState } from 'react';
import StudentInfo from '../ui/StudentInfo';
import ReviewForm from '../ui/ReviewForm';
import ReviewItem from '../ui/ReviewItem';

export default function OneStudentPage({ oneStudent }) {
  const [reviews, setReviews] = useState(oneStudent.Reviews);

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const response = await fetch(`/api/students/${oneStudent.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const newPost = await response.json();
    setReviews((prev) => [...prev, newPost]);
  };

  return (
    <div className="row">
      <div className="col-4">
        <StudentInfo oneStudent={oneStudent} />
      </div>
      <div className="col-8">
        <div className="row justify-content-center">
          <div className="col-8">
            <ReviewForm
              submitHandler={submitHandler}
              studentId={oneStudent.id}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          {reviews.map((review) => (
            <div key={review.id} className="col-8">
              <ReviewItem review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
