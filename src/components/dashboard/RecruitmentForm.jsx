import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import RectangleImg from '../../assets/images/RectangleImg.png';
const RecruitmentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isEdit = false, recruitmentData = null } = location.state || {};
  
  const [formData, setFormData] = useState(
    recruitmentData || {
      name: '',
      jobRole: 'Other',
      level: '',
      description: '',
      otherRole: ''
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/');
  };

  return (
    <div className="p-6 bg-background min-h-screen w-full">
      <Header title="Create New Recruitment" />

      <div className="flex h-[8rem] justify-between z-10 items-center" style={{ backgroundImage: `url(${RectangleImg})`, backgroundPosition: 'center', backgroundSize: 'cover' , backgroundRepeat: 'no-repeat' }}>
      </div>
      <div className="flex bg-white mt-[-2rem] opacity-40 h-[2rem] justify-end  border border-blue-200 border-b-0"></div>
      <div className="bg-white max-w-[67rem] h-[53rem]  p-6 border border-gray-200">
        <form onSubmit={handleSubmit}>
          <div className="mt-7">
            <input 
              type="text" 
              name="name"
              placeholder="Enter name of your Recruitment" 
              className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-[#06BF97] text-gray-700 roboto-font"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-7">
            <div className="relative">
              <select 
                name="jobRole"
                className="w-full border border-gray-200 rounded-md px-4 py-3 appearance-none focus:outline-none focus:border-[#06BF97] text-gray-700 roboto-font"
                value={formData.jobRole}
                onChange={handleChange}
                required
              >
                <option value="">Job Role: Other</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                {/* <option value="Other">Job role: Other</option> */}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="relative">
              <select 
                name="level"
                className="w-full border border-gray-200 rounded-md px-4 py-3 appearance-none focus:outline-none focus:border-[#06BF97] text-gray-700 roboto-font"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="">Select level of employee</option>
                <option value="Junior">Junior</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Senior">Senior</option>
                <option value="Lead">Lead</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {formData.jobRole === 'Other' && (
            <div className="mt-7">
              <input 
                type="text" 
                name="otherRole"
                placeholder="Other" 
                className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-[#06BF97] text-gray-700 roboto-font"
                value={formData.otherRole}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="mt-24">
            <textarea 
              name="description"
              placeholder="Write description here" 
              className="w-full border border-gray-200 rounded-md px-4 py-3 h-48 focus:outline-none focus:border-[#06BF97] resize-none text-gray-700 roboto-font"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3 mt-7">
            <button 
              type="button" 
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 focus:outline-none sf-ui-text"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 bg-[#06BF97] text-white rounded-md hover:bg-[#06BF97]/90 focus:outline-none sf-ui-text"
            >
              {isEdit ? 'Save Changes' : 'Save & Continue'}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RecruitmentForm;
