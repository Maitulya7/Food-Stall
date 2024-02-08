// RejectButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RejectButton = ({ RejectRequest }) => {
  return (
    <button
      onClick={RejectRequest}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors"
    >
      <FontAwesomeIcon icon={faTimes} className="mr-1" />
    </button>
  );
};

export default RejectButton;
