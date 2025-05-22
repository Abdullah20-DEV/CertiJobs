import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaClipboardList, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';
// Import the logo directly
import CetiJobLogo from '../../assets/images/CertiJob.png';
import boxRocket from '../../assets/images/boxRocket.png';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/'); // Navigate to homepage/dashboard
    setIsMobileMenuOpen(false); // Close mobile menu when logo is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Mobile and Tablet Hamburger/Close Menu Button - Only visible on smaller screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="bg-sidebar text-white p-3 rounded-lg shadow-lg"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile and Tablet Overlay - Only visible when menu is open on smaller screens */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        h-screen w-64 bg-sidebar text-white flex flex-col z-40
        
        /* Desktop - Always visible and fixed */
        lg:fixed lg:left-0 lg:top-0
        
        /* Mobile and Tablet - Sliding sidebar */
        fixed top-0 transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        
        <div className="px-6 py-4 flex items-center border-b border-gray-700 mt-12 lg:mt-0">
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
            <div className="flex items-center px-4 py-3 rounded text-white mb-2 hover:bg-[#002b5b] cursor-pointer">
              <FaBriefcase className="mr-3" />
              <span className="sf-ui-text">My Recruitment</span>
            </div>
            <div className="flex items-center px-4 py-3 rounded text-white mb-2 hover:bg-[#002b5b] cursor-pointer">
              <FaHome className="mr-3" />
              <span className="sf-ui-text">Dashboard</span>
            </div>
            <div className="flex items-center px-4 py-3 rounded text-white mb-2 hover:bg-[#002b5b] cursor-pointer">
              <FaClipboardList className="mr-3" />
              <span className="sf-ui-text">Reports</span>
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
    </>
  );
};

export default Sidebar;