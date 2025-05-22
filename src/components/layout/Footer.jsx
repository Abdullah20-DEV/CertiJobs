import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-200 mt-7" />

      <footer className="p-6">
        {/* Social media icons */}
        <div className="flex justify-end space-x-4 mb-6">
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

        {/* Footer content */}
        <div className="grid grid-cols-4 gap-6">
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
            <h3 className="font-medium mb-3 text-[#827F7F] rubik-font">Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector</h3>
            <div className="flex mt-4">
              <input type="email" placeholder="Enter your email" className="border rounded-l-md px-3 py-2 text-sm w-full sf-ui-text" />
              <button className="bg-white px-3 py-2 rounded-r-md border border-l-0">
                <FaPaperPlane className="text-[#06BF97]" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-[#827F7F] bg-[#F2F2F2] px-4 py-2 rounded">© CetiJob 2023. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
