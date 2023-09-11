import React from 'react';
import CommentCard from './CommentCard';

export default function CommentList({ allComments }) {
//   console.log(allComments.map((comment) => comment.toJSON()));
  return (
    <div className="row">
      {allComments.map((comment) => (
        <div key={comment.id} className="col-4">
          <CommentCard comment={comment} />
        </div>
      ))}
    </div>
  );
}
