
import { FaHome, FaCog, FaUser } from 'react-icons/fa';

const AdminSideNavbar = () => {
  return (
    <div className="bg-gray-800 h-screen w-1/5 text-white p-4">
      <div className="flex items-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-xl font-semibold">My App</span>
      </div>
      <ul>
        <li className="mb-4">
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaHome className="mr-2" />
            Home
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaCog className="mr-2" />
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaUser className="mr-2" />
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideNavbar;
