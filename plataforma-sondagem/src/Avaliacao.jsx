import React from 'react'
import './Avaliacao.css'

function Avaliacao() {
  // Exemplo de lista de alunos – substitua por dados reais ou integrados com sua API.
  const alunos = [
    { id: 1, nome: 'Aluno 1' },
    { id: 2, nome: 'Aluno 2' },
    { id: 3, nome: 'Aluno 3' }
  ]

  const avaliarAluno = (alunoId, status) => {
    // Implemente a lógica para registrar a avaliação do aluno.
    alert(`Aluno ${alunoId} classificado como: ${status}`)
  }

  return (
    <div className="avaliacao">
      <h2>Realizar Avaliação</h2>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id} className="aluno-item">
            <span>{aluno.nome}</span>
            <div className="botoes-avaliacao">
              <button onClick={() => avaliarAluno(aluno.id, 'Fluente')}>Fluente</button>
              <button onClick={() => avaliarAluno(aluno.id, 'Com Dificuldade')}>Com Dificuldade</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Avaliacao
