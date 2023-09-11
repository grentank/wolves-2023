import React from 'react';

export default function CommentCard({ comment }) {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">{comment.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{comment.createdAt.toLocaleString()}</h6>
        <p className="card-text">{comment.message}</p>
        <a className="btn btn-danger" href="#">Delete</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  );
}
