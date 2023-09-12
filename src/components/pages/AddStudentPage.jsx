import React from 'react';

export default function AddStudentPage() {
  return (
    <form action="/students" method="POST">
      <div className="mb-3">
        <label htmlFor="studentsnameform" className="form-label">
          Student&apos;s name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="studentsnameform"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="githublinkinput" className="form-label">
          Github link
        </label>
        <input
          name="git"
          type="text"
          className="form-control"
          id="githublinkinput"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
