import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-200 mt-7" />

      <footer className="p-6 pb-0">
      
        <div className="footer-wrapper">
          <div className="bg-[#F4F8FB]">
         
            <div className="flex justify-end space-x-4 p-6 pb-0 px-8">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FaTwitter className="text-[#06BF97]" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FaFacebookF className="text-[#06BF97]" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FaInstagram className="text-[#06BF97]" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FaLinkedinIn className="text-[#06BF97]" />
              </a>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 pt-4 h-auto">
              <div>
                <h3 className="font-medium mb-3 text-[#827F7F] sf-ui-text">Services</h3>
                <ul className="text-sm text-[#827F7F] space-y-2 sf-ui-text">
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-[#827F7F] sf-ui-text">Terms of Services</h3>
                <ul className="text-sm text-[#827F7F] space-y-2 sf-ui-text">
                  <li>Terms of use</li>
                  <li>Privacy policy & Cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-[#827F7F] sf-ui-text">For subject-matter experts</h3>
                <ul className="text-sm text-[#827F7F] space-y-2 sf-ui-text">
                  <li>Register as expert</li>
                  <li>Information for candidates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-[#827F7F] rubik-font text-sm lg:text-base">
                  Subscribe to our Newsletter for Fitness Sector Updates
                </h3>
                <div className="flex mt-4 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border rounded-l-md px-3 py-2 text-sm  lg:w-[20rem] sf-ui-text min-w-0"
                  />
                  <button className="bg-white px-3 py-2 rounded-r-md border border-l-0 flex-shrink-0">
                    <FaPaperPlane className="text-[#06BF97]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] py-2 w-full flex justify-center items-center">
          <p
            style={{
              color: '#8C8C8C',
              fontSize: '0.75rem',
              textAlign: 'center',
              fontFamily: 'SF UI Text, sans-serif',
              fontWeight: 'normal',
              letterSpacing: '0.5em',
            }}
          >
            © CertiJob 2021. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;