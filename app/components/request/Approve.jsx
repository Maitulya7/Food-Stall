
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ApproveButton = ({ ApproveRequest }) => {
  return (
    <button
    onClick={ApproveRequest}
    className="flex items-center bg-green-500 hover:bg-green-600  text-white px-2 py-2 rounded-md mr-2 transition-colors focus:outline-none focus:ring focus:border-blue-300"
  >
    <FontAwesomeIcon icon={faCheckCircle} className="" />
  </button>
  
  );
};

export default ApproveButton;
