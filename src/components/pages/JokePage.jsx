import React, { useState } from 'react';

export default function JokePage() {
  const [joke, setJoke] = useState(null);
  const clickHandler = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setJoke(data);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5 text-center">
        <div className="col-md-6 offset-md-3">
          <h1>Joke Page</h1>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5 text-center">
        <div className="col-md-6 offset-md-3">
          <button
            onClick={clickHandler}
            className="btn btn-primary"
            type="button"
          >
            Get Joke
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-5 mb-5 text-center">
        <div className="col-md-6 offset-md-3">
          {joke ? joke.value : 'Click the button for a joke'}
        </div>
      </div>
    </div>
  );
}
