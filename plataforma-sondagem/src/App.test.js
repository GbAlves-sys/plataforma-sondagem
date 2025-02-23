// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Avaliacao from './components/Avaliacao'
import Relatorios from './components/Relatorios'

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="avaliacao" element={<Avaliacao />} />
        <Route path="relatorios" element={<Relatorios />} />
        <Route index element={<Navigate to="avaliacao" />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default App
