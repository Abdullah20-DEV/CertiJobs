import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';
import JohnDoeImg from '../../assets/images/Johndoe.png';
import Americaflag from '../../assets/images/Americaflag.png';

const Header = ({ title }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      
      <h1
        className={`
          ${title === "My Recruitments" ? "text-[1.5rem] font-medium" : "text-2xl font-bold roboto-font"}
          md:ml-10 lg:ml-0  // Left margin on tablet (md) to avoid hamburger overlap
          order-2 md:order-1  // Moves title below on mobile (sm), keeps it first on tablet/laptop
          w-full md:w-auto  // Ensures full width on mobile for full display
          mt-16 md:mt-0  // Increased top margin to ~4rem on mobile to position below other elements
        `}
      >
        {title}
      </h1>
      
     
      <div className="flex items-center space-x-4 order-1 md:order-2 mt-16   md:mt-0">
     
        <div className="flex items-center bg-white rounded px-3 py-1 shadow-sm border border-gray-200">
          <div className="flex items-center w-[3.125rem] h-[1.375rem]">
            <img src={Americaflag} alt="American Flag" className="w-5 h-4 mr-2 object-cover" />
            <span className="text-[#908D8D] text-[0.75rem] font-medium sf-ui-text">EN</span>
          </div>
          <FaChevronDown className="ml-2 text-gray-400 text-xs" />
        </div>
        
       
        <div className="p-2 rounded-full">
          <FaBell className="text-[#BABABA] w-[1.313rem] h-[1.438rem]" />
        </div>
        
       
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