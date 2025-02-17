import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Avaliacao from './components/Avaliacao'
import Relatorios from './components/Relatorios'

function App() {
  return (
    <Routes>
      {/* Rota protegida: após login, o usuário acessa o Dashboard */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="avaliacao" element={<Avaliacao />} />
        <Route path="relatorios" element={<Relatorios />} />
        {/* Rota padrão redireciona para "avaliacao" */}
        <Route index element={<Navigate to="avaliacao" />} />
      </Route>
      {/* Redireciona outras URLs para o Dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default App
