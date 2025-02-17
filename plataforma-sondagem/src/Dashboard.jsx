import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
