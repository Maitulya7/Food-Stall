// RejectButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RejectButton = ({ RejectRequest }) => {
  return (
    <button
    onClick={RejectRequest}
    className="flex items-center bg-red-500 hover:bg-red-600  text-white px-2 py-2 rounded-md mr-2 transition-colors focus:outline-none focus:ring focus:border-blue-300"
  >
    <FontAwesomeIcon icon={faTimes} className="" />
  </button>
  );
};

export default RejectButton;
