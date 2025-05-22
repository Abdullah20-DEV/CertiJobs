import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecruitmentTable from './RecruitmentTable';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import { FaPlus, FaChevronDown } from 'react-icons/fa';
import HeaderBg from '../../assets/images/HeaderBg.png';
import QuestionMark from '../../assets/images/QuestionMark.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  
  const handleCreateRecruitment = () => {
    navigate('/create-recruitment');
  };
  
  const handleEditRecruitment = (recruitmentData) => {
    navigate(`/edit-recruitment/${recruitmentData.id}`, { state: { isEdit: true, recruitmentData } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <div className="lg:ml-64 flex-1 transition-all duration-300 ease-in-out">
        <div className="p-4 md:p-6 bg-background min-h-screen">
          <Header title="My Recruitments" />

          <div className="bg-white rounded-lg shadow-sm p-4 mt-4 relative md:bg-header-pattern">
            {/* Two divs for different screen sizes */}
            <div className="hidden md:block absolute inset-0 -z-10" style={{ 
              backgroundImage: `url(${HeaderBg})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'space'
            }}></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex space-x-4 md:space-x-10 border-b overflow-x-auto pb-2">
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
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
              <RecruitmentTable />
            </div>
          </div>
          
          {/* Help Center button outside of table */}
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
      </div>
    </div>
  );
};

export default Dashboard;
