import React from 'react';

export default function Modal({ albums, closeModal }) {
  return (
    <div className="modal-window">
      <table className="albums-table">
        <thead className="albums-table__title">
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map(({ title, id }) => (
            <tr key={id}>
              <th>{title}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => closeModal()}>close</button>
    </div>
  );
}
