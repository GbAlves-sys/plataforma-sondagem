import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/dashboard/avaliacao"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Realizar Avaliação
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/relatorios"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Gerar Relatório
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
