const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Configuração dos middlewares
app.use(cors());
app.use(bodyParser.json());

// Dados de exemplo (substitua por consultas ao seu banco de dados)
const schools = [
  { id: 1, name: 'Escola A' },
  { id: 2, name: 'Escola B' },
];

const cycles = [
  { id: 1, schoolId: 1, name: 'Ciclo 1' },
  { id: 2, schoolId: 1, name: 'Ciclo 2' },
  { id: 3, schoolId: 2, name: 'Ciclo 1' },
];

const classes = [
  { id: 1, cycleId: 1, name: 'Turma 1' },
  { id: 2, cycleId: 1, name: 'Turma 2' },
  { id: 3, cycleId: 2, name: 'Turma 1' },
  { id: 4, cycleId: 3, name: 'Turma 1' },
];

const evaluations = []; // Armazenará as avaliações registradas

// --- Endpoints ---

// Endpoint de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Lógica de autenticação simplificada (para demonstração)
  if (username === 'admin' && password === '123456') {
    res.json({ token: 'fake-jwt-token', username });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Endpoint para obter escolas
app.get('/schools', (req, res) => {
  res.json(schools);
});

// Endpoint para obter ciclos, filtrando por escola (ex.: /cycles?schoolId=1)
app.get('/cycles', (req, res) => {
  const schoolId = parseInt(req.query.schoolId);
  if (isNaN(schoolId)) {
    return res.status(400).json({ error: 'Parâmetro schoolId inválido' });
  }
  const filteredCycles = cycles.filter(cycle => cycle.schoolId === schoolId);
  res.json(filteredCycles);
});

// Endpoint para obter turmas, filtrando por ciclo (ex.: /classes?cycleId=1)
app.get('/classes', (req, res) => {
  const cycleId = parseInt(req.query.cycleId);
  if (isNaN(cycleId)) {
    return res.status(400).json({ error: 'Parâmetro cycleId inválido' });
  }
  const filteredClasses = classes.filter(cls => cls.cycleId === cycleId);
  res.json(filteredClasses);
});

// Endpoint para registrar uma avaliação
app.post('/evaluation', (req, res) => {
  const { studentId, status } = req.body;
  if (!studentId || !status) {
    return res.status(400).json({ error: 'Dados inválidos para avaliação' });
  }
  const evaluation = {
    id: evaluations.length + 1,
    studentId,
    status,
    date: new Date(),
  };
  evaluations.push(evaluation);
  res.json({ message: 'Avaliação registrada com sucesso', evaluation });
});

// Endpoint para gerar relatório
// Exemplo: GET /reports?schoolId=1&cycleId=1&classId=1
app.get('/reports', (req, res) => {
  // Aqui você pode implementar a lógica para filtrar e montar o relatório.
  // Para este exemplo, retornaremos todas as avaliações.
  res.json(evaluations);
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
