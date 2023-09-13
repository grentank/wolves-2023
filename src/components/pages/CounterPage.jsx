import React, { useState } from 'react';

export default function CounterPage() {
  //   let counter = 0;
  //   const clickHandler = () => {
  //     counter++;
  //     console.log(counter);
  //   };

  const [counter, setCounter] = useState(0);
  const clickHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const handleIncBy5 = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mb-5 text-center">
        <div className="col-md-6 offset-md-3">
          <h1>Counter</h1>
        </div>
      </div>

      <div className="row justify-content-center mt-5 mb-5 text-center">
        <div className="col-2 ">
          <p>Counter:{counter}</p>
        </div>
        <div className="col-2">
          <button
            onClick={clickHandler}
            type="button"
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={handleIncBy5}
            type="button"
            className="btn btn-primary"
          >
            Inc by 5
          </button>
        </div>
      </div>
    </div>
  );
}
