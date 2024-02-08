// ApproveButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ApproveButton = ({ ApproveRequest }) => {
  return (
    <button
      onClick={ApproveRequest}
      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg mr-2 transition-colors"
    >
      <FontAwesomeIcon icon={faCheck} className="mr-1" />
    </button>
  );
};

export default ApproveButton;
