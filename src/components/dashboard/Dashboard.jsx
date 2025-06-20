import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecruitmentTable from './RecruitmentTable';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { FaPlus, FaChevronDown, FaBars } from 'react-icons/fa';
import HeaderBg from '../../assets/images/HeaderBg.png';
import QuestionMark from '../../assets/images/QuestionMark.png';

const Dashboard = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  
  const handleCreateRecruitment = () => {
    navigate('/create-recruitment');
  };
  
  const handleEditRecruitment = (recruitmentData) => {
    navigate(`/edit-recruitment/${recruitmentData.id}`, { state: { isEdit: true, recruitmentData } });
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 bg-background">
      
      <div className="lg:hidden fixed top-4 left-4 z-10">
        <button
          onClick={toggleMobileMenu}
          className="bg-sidebar text-white p-3 rounded-lg shadow-lg"
          aria-label="Open menu"
        >
          <FaBars className="text-xl" />
        </button>
      </div>
      <Header title="My Recruitments" />

   
      <div className="hidden sm:block bg-white rounded-lg shadow-sm p-4 mt-4" style={{ 
        backgroundImage: `url(${HeaderBg})`,
        backgroundPosition: 'center', 
        backgroundSize: 'contain',
        backgroundRepeat: 'space'
      }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex space-x-4 md:space-x-10 border-b overflow-x-auto pb-2 w-full md:w-auto">
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'active' ? 'border-b-2 border-[#142D52] font-medium' : 'text-[#142D52]'}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'archive' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('archive')}
            >
              Archive
            </button>
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'draft' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('draft')}
            >
              Draft
            </button>
          </div>
          <button 
            className="bg-[#06BF97] hover:bg-[#06BF97]/90 text-white px-4 py-2 rounded-md flex items-center shadow-sm w-full md:w-auto justify-center md:justify-start"
            onClick={handleCreateRecruitment}
          >
            <FaPlus className="mr-2" />
            <span className="sf-ui-text">Create New Recruitment</span>
          </button>
        </div>
      </div>
      
      <div className="block sm:hidden bg-white rounded-lg shadow-sm p-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex space-x-4 md:space-x-10 border-b overflow-x-auto pb-2 w-full md:w-auto">
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'active' ? 'border-b-2 border-[#142D52] font-medium' : 'text-[#142D52]'}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'archive' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('archive')}
            >
              Archive
            </button>
            <button
              className={`pb-2 px-1 whitespace-nowrap roboto-font ${activeTab === 'draft' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('draft')}
            >
              Draft
            </button>
          </div>
          <button 
            className="bg-[#06BF97] hover:bg-[#06BF97]/90 text-white px-4 py-2 rounded-md flex items-center shadow-sm w-full md:w-auto justify-center md:justify-start"
            onClick={handleCreateRecruitment}
          >
            <FaPlus className="mr-2" />
            <span className="sf-ui-text">Create New Recruitment</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8 overflow-x-auto">
          <RecruitmentTable />
        </div>
      </div>
      
      
      <div className="flex justify-center md:justify-end px-4 mt-8">
        <div className="flex items-center bg-white justify-between w-full max-w-xs md:w-[19rem] h-[3rem] border border-gray-200 px-3 rounded-md shadow-sm">
          <div className="flex items-center gap-2">
            <img src={QuestionMark} alt="Question Mark" className="w-5 h-5" />
            <span className="text-[#6D6D6D] font-normal text-sm md:text-base roboto-font">Help Center</span>
          </div>
          <FaChevronDown className="text-gray-400 text-xs" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
