import React from 'react';

export default function CommentForm() {
  return (
    <form action="/comments" method="POST">
      <div className="mb-3">
        <label htmlFor="commenttitle" className="form-label">Title</label>
        <input name="title" type="text" className="form-control" id="commenttitle" />
      </div>
      <div className="mb-3">
        <label htmlFor="commentmessage" className="form-label">Message</label>
        <input name="messagepost" type="text" className="form-control" id="commentmessage" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
