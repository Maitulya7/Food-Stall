import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApproveButton = ({ ApproveRequest }) => {
  const handleApprove = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to approve this vendor!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!',
    }).then((result) => {
      if (result.isConfirmed) {
        ApproveRequest();
        toast.success('Vendor approved successfully!');
      }
    });
  };

  return (
    <button
      onClick={handleApprove}
      className="flex items-center bg-green-500 hover:bg-green-600  text-white px-2 py-2 rounded-md mr-2 transition-colors focus:outline-none focus:ring focus:border-blue-300"
    >
      <FontAwesomeIcon icon={faCheckCircle} className="" />
    </button>
  );
};

export default ApproveButton;
