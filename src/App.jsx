import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import RecruitmentForm from './components/dashboard/RecruitmentForm'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="App flex h-screen">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="lg:ml-64 flex-1 overflow-y-auto transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Dashboard toggleMobileMenu={toggleMobileMenu} />} />
            <Route path="/create-recruitment" element={<RecruitmentForm toggleMobileMenu={toggleMobileMenu} />} />
            <Route path="/edit-recruitment/:id" element={<RecruitmentForm toggleMobileMenu={toggleMobileMenu} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
