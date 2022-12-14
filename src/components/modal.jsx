import React, { useState } from 'react';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && <button onClick={() => setShowModal(true)}>Open Modal</button>}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>This is the modal content.</p>
            <button onClick={() => setShowModal(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
}
