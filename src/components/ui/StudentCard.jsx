import React from 'react';
import TrashIcon from './icons/TrashIcon';
import PencilIcon from './icons/PencilIcon';

export default function StudentCard({ oneStudent, deleteHandler }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${oneStudent.git}.png`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{oneStudent.name}</h5>
            <p className="card-text">Топовый волчара</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {new Date(oneStudent.createdAt).toLocaleString('ru-RU')}
              </small>
            </p>
          </div>
          <div className="card-footer">
            <div className="btn-group" role="group" aria-label="Basic example">
              <a
                className="btn btn-outline-info"
                href={`/students/${oneStudent.id}`}
              >
                Посмотреть ревью
              </a>
              <a
                // onClick={() => deleteHandler(oneStudent.id)}
                href={`/students/${oneStudent.id}/edit`}
                className="btn btn-outline-warning"
              >
                <PencilIcon />
              </a>
              <button
                onClick={() => deleteHandler(oneStudent.id)}
                type="button"
                className="btn btn-outline-danger"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
