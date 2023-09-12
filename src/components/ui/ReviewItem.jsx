import React from 'react';

export default function ReviewItem({ review }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{review.id}</div>
        {review.body}
      </div>
      <span className="badge bg-primary rounded-pill">1</span>
    </li>
  );
}
