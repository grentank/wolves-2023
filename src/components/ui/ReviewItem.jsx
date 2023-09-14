import React, { useState } from 'react';
import PencilIcon from './icons/PencilIcon';
import FloppyIcon from './icons/FloppyIcon';

export default function ReviewItem({ review }) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(review.body);

  const changeInputHandler = (e) => setInput(e.target.value);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  const editReviewHandler = async () => {
    const response = await fetch(`/api/reviews/${review.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: input }),
    });
    if (response.ok) {
      return toggleEdit();
    }
    alert('Something wrong');
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{review.id}</div>
        {isEditing ? (
          <input value={input} onChange={changeInputHandler} type="text" />
        ) : (
          <p>{input}</p>
        )}
      </div>

      {isEditing ? (
        <span className="badge bg-success rounded-pill">
          <button
            onClick={editReviewHandler}
            type="button"
            className="btn btn-success"
          >
            <FloppyIcon />
          </button>
        </span>
      ) : (
        <span className="badge bg-primary rounded-pill">
          <button
            onClick={toggleEdit}
            type="button"
            className="btn btn-primary"
          >
            <PencilIcon />
          </button>
        </span>
      )}
    </li>
  );
}
