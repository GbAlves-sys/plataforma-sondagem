import React, { useState } from 'react'
import './Relatorios.css'

function Relatorios() {
  const [escola, setEscola] = useState('')
  const [ciclo, setCiclo] = useState('')
  const [turma, setTurma] = useState('')

  const gerarRelatorio = () => {
    // Implemente a lógica para gerar e exportar o relatório (ex.: integração com Google Sheets).
    alert(`Relatório gerado para:\nEscola: ${escola}\nCiclo: ${ciclo}\nTurma: ${turma}`)
  }

  return (
    <div className="relatorios">
      <h2>Gerar Relatório</h2>
      <div className="form-relatorio">
        <div className="form-field">
          <label>Escola:</label>
          <input
            type="text"
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
            placeholder="Digite o nome da escola"
          />
        </div>
        <div className="form-field">
          <label>Ciclo:</label>
          <input
            type="text"
            value={ciclo}
            onChange={(e) => setCiclo(e.target.value)}
            placeholder="Digite o ciclo"
          />
        </div>
        <div className="form-field">
          <label>Turma:</label>
          <input
            type="text"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
            placeholder="Digite a turma"
          />
        </div>
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
      </div>
    </div>
  )
}

export default Relatorios
