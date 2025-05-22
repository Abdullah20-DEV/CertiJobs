import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecruitmentTable from './RecruitmentTable';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
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
    <div className="p-6 bg-background min-h-screen w-full">
      <Header title="My Recruitments" />

      <div className="bg-white rounded-lg shadow-sm p-4" style={{ backgroundImage: `url(${HeaderBg})`, backgroundPosition: 'center', backgroundSize: 'contain' , backgroundRepeat: 'space' }} >
      <div className="flex justify-between items-center" >
          <div className="flex space-x-10 border-b">
            <button
              className={`pb-2 px-1 roboto-font ${activeTab === 'active' ? 'border-b-2 border-[#142D52] font-medium' : 'text-[#142D52]'}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button
              className={`pb-2 px-1 roboto-font ${activeTab === 'archive' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('archive')}
            >
              Archive
            </button>
            <button
              className={`pb-2 px-1 roboto-font ${activeTab === 'draft' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('draft')}
            >
              Draft
            </button>
          </div>
          <button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-md flex items-center shadow-sm"
            onClick={handleCreateRecruitment}
          >
            <span className="sf-ui-text">Create New Recruitment</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8" >
        <RecruitmentTable />
      </div>
      
      {/* Horizontal divider */}
     
      
      {/* Help Center button outside of table */}
      <div className="flex justify-end px-4 mt-8">
        <div className="flex items-center bg-white justify-between w-[19rem] h-[3rem] border border-gray-200 px-3 rounded-md shadow-sm">
          <div className="flex items-center gap-2">
            <img src={QuestionMark} alt="Question Mark" className="w-5 h-5" />
            <span className="text-[#6D6D6D] font-normal text-[1rem] roboto-font">Help Center</span>
          </div>
          <FaChevronDown className="text-gray-400 text-xs" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
