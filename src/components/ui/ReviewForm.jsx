import React, { useState } from 'react';

export default function ReviewForm({ studentId, submitHandler }) {
  const [input, setInput] = useState('');
  const changeHandler = (event) => setInput(event.target.value);
  console.log(input);

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <textarea
          value={input}
          onChange={changeHandler}
          name="review"
          className={
            input.length <= 3 ? 'form-control is-invalid' : 'form-control'
          }
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
