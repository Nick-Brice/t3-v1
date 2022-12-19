import React, { useState } from 'react';
import Form from '../components/form';

const FormModal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      {isFormOpen ? (
        <div className="form-modal-overlay">
          <div className="form-modal-content">
            <Form/>
            <button onClick={closeForm}>Close</button>
          </div>
        </div>
      ) : (
        <button onClick={openForm}>Open Form</button>
      )}
    </div>
  );
};

export default FormModal;
