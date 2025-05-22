import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import RecruitmentForm from './components/dashboard/RecruitmentForm'

function App() {
  return (
    <BrowserRouter>
      <div className="App flex h-screen">
        <Sidebar />
        <div className="ml-64 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-recruitment" element={<RecruitmentForm />} />
            <Route path="/edit-recruitment/:id" element={<RecruitmentForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
