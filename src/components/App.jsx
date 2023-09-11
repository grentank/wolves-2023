import React from 'react';
import CommentForm from './ui/CommentForm';
import CommentList from './ui/CommentList';

export default function App({ allComments }) {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-4">
          <CommentForm />
        </div>
      </div>
      <CommentList allComments={allComments} />
    </div>
  );
}
