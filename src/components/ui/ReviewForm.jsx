import React from 'react';

export default function ReviewForm({ studentId }) {
  return (
    <form action={`/students/${studentId}/reviews`} method="POST">
      <div className="input-group">
        <textarea
          name="review"
          className="form-control"
          aria-label="With textarea"
        />
        <span className="input-group-text">
          <button type="submit" className="btn btn-outline-secondary">
            Запостить
          </button>
        </span>
      </div>
    </form>
  );
}
