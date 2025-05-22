import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaClipboardList, FaBriefcase } from 'react-icons/fa';
// Import the logo directly
import CetiJobLogo from '../../assets/images/CertiJob.png';
import boxRocket from '../../assets/images/boxRocket.png';
const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/'); // Navigate to homepage/dashboard
  };
  
  return (
    <div className="h-screen w-64 bg-sidebar fixed left-0 top-0 text-white flex flex-col z-10">
      <div className="px-6 py-4 flex items-center border-b border-gray-700">
        <img 
          src={CetiJobLogo} 
          alt="CetiJob Logo" 
          className="w-40 h-12 mr-2 cursor-pointer" 
          onClick={handleLogoClick}
        />
        {/* <span className="text-xl font-semibold">CetiJob</span> */}
      </div>
      
      <div className="mt-8 flex-1">
        <div className="px-4">
          <div className="flex items-center px-4 py-3 rounded  text-white mb-2">
            <FaBriefcase className="mr-3" />
            <span className="sf-ui-text">My Recruitment</span>
          </div>
          
        </div>
      </div>
      
      <div className="px-4 py-6 border-t border-gray-700">
  <div className="text-center">
    <div className="flex flex-col items-center mb-2">
      <img src={boxRocket} alt="John Doe" className="h-24 w-24 mb-2" />
      <p className="text-center text-[#9A9A9A] text-[0.75rem] max-w-xs leading-snug rubik-font">
        Lorem ipsum dolor sit amet, consec<br />
        <span className="block text-center">tetur adipiscing elit.</span>
      </p>
    </div>
  </div>
</div>


    </div>
  );
};

export default Sidebar;
