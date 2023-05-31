import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCreateAccount = () => {
    handleOpenModal();
    // Additional logic for creating the account
  };

  return (
    <div className="app">
      <button onClick={handleCreateAccount}>Create Account</button>

      {showModal && (
        <Modal message="Account created successfully!" onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
