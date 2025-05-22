import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import JohnDoeImg from '../../assets/images/Johndoe.png';
import Americaflag from '../../assets/images/Americaflag.png';

const Header = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className={title === "My Recruitments" ? "text-[1.5rem] font-medium" : "text-2xl font-bold roboto-font"}>
        {title}
      </h1>
      
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="flex items-center bg-white rounded px-3 py-1 shadow-sm border border-gray-200">
          <div className="flex items-center w-[3.125rem] h-[1.375rem]">
            <img src={Americaflag} alt="American Flag" className="w-5 h-4 mr-2 object-cover" />
            <span className="text-[#908D8D] text-[0.75rem] font-medium sf-ui-text">EN</span>
          </div>
          <FaChevronDown className="ml-2 text-gray-400 text-xs" />
        </div>
        
        {/* Notification Bell */}
        <div className="p-2 rounded-full">
          <FaBell className="text-[#BABABA] w-[1.313rem] h-[1.438rem]" />
        </div>
        
        {/* User Profile */}
        <div className="flex items-center rounded-full pl-1 pr-2 py-1">
          <img src={JohnDoeImg} alt="John Doe" className="h-8 w-8 rounded-full mr-2" />
          <span className="text-[#585858] text-[0.75rem] font-normal helvetica-font">John Doe</span>
          <FaChevronDown className="ml-2 text-gray-400 text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Header;
