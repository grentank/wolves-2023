import React, { useState } from 'react';

export default function StudentForm({ editStudent }) {
  const initForm = editStudent
    ? { name: editStudent.name, git: editStudent.git }
    : {
        name: '',
        git: '',
      };
  const [formInputs, setFormInputs] = useState(initForm);

  const changeHandler = (e) =>
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submitHandler = async (event) => {
    event.preventDefault();
    // Если мы на странице редактирования
    if (editStudent) {
      const response = await fetch(`/api/students/${editStudent.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInputs),
      });
      if (response.ok) window.location.href = '/students';
      return;
    }
    // если не на странице редактирования
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputs),
    });
    if (response.status !== 201) {
      const data = await response.json();
      alert(data.message);
      return;
    }
    window.location.href = '/students';
  };

  // console.log(formInputs);

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="studentsnameform" className="form-label">
          Student&apos;s name
        </label>
        <input
          value={formInputs.name}
          onChange={changeHandler}
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
          value={formInputs.git}
          onChange={changeHandler}
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
