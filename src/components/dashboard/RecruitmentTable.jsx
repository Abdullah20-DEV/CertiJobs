import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV, FaEdit, FaTrash, FaEye, FaCopy, FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import leftArrow from '../../assets/images/leftarrow.svg';
import rightArrow from '../../assets/images/rightarrow.svg';

const RecruitmentTable = () => {
  const navigate = useNavigate();
  
  const handleEdit = (recruitment) => {
    navigate(`/edit-recruitment/${recruitment.id}`, {
      state: {
        isEdit: true,
        recruitmentData: {
          ...recruitment,
          jobRole: recruitment.name.includes('UI/UX') ? 'UI/UX Designer' : 'Other',
          level: 'Senior' // Default level for editing
        }
      }
    });
  };
  
  // Sample data to match the screenshot
  const recruitmentData = [
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
    { id: 'RE-201', name: 'UI/UX Designer', candidates: 23, startDate: '20/06/2021', status: 'In Progress' },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full rounded-lg">
        <thead>
          <tr className="text-left bg-white text-[#36404A] border-b roboto-font">
            <th className="py-3 px-4 font-medium">ID</th>
            <th className="py-3 px-4 font-medium">Recruitment Name</th>
            <th className="py-3 px-4 font-medium">Candidates</th>
            <th className="py-3 px-4 font-medium">Start Date</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruitmentData.map((item, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-50 text-[#36404A] roboto-font ${
                index % 2 === 0 ? 'bg-[#F4F8FB]' : 'bg-white'
              }`}
            >
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.candidates}</td>
              <td className="py-3 px-4">{item.startDate}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-1">
                  <span className="px-2 py-1 rounded-sm text-xs bg-white text-[#06BF97] flex items-center border border-gray-200">
                    {item.status}
                    <FaChevronDown className="ml-1 text-[#B4B4B4] text-xs" />
                  </span>
                </div>
              </td>
              <td className="py-3 px-4 flex space-x-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye size={16} />
                </button>
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => handleEdit(item)}
                >
                  <FaEdit size={16} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash size={16} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaCopy size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 px-4">
        <div className="flex space-x-1 items-center text-[#36404A]">
          <button className="px-3 py-1 rounded hover:bg-gray-100 flex items-center justify-center">
            <img src={leftArrow} alt="Previous Page" className="w-4 h-4" />
          </button>
          <button className="px-3 border rounded bg-white text-[#5FBEAA] roboto-font">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 text-[#36404A] sf-ui-text">of</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 text-[#36404A] sf-ui-text">5</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 flex items-center justify-center">
            <img src={rightArrow} alt="Next Page" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentTable;