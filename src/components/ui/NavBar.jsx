import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Wolves
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Main page
            </a>
            <a className="nav-link" href="/students">
              All students
            </a>
            <a className="nav-link" href="/students/add">
              Add student
            </a>
            <a className="nav-link" href="/joke">
              Joke
            </a>
            <a className="nav-link" href="/counter">
              Counter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
