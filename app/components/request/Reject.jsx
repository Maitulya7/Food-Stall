import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const RejectButton = ({ RejectRequest }) => {
  const handleReject = () => {
    // Display SweetAlert for confirmation
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to reject this vendor!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#28a745',
      confirmButtonText: 'Yes, reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, call the RejectRequest function
        RejectRequest();
      }
    });
  };

  return (
    <button
      onClick={handleReject}
      className="flex items-center bg-red-500 hover:bg-red-600  text-white px-2 py-2 rounded-md mr-2 transition-colors focus:outline-none focus:ring focus:border-blue-300"
    >
      <FontAwesomeIcon icon={faTimes} className="" />
    </button>
  );
};

export default RejectButton;
