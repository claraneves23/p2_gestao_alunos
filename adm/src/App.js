// src/App.js - VERSÃO MAIS SIMPLES
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AlunoForm from './components/alunos/AlunoForm';
import AlunoList from './components/alunos/AlunoList';
import CursoForm from './components/cursos/CursoForm';
import CursoList from './components/cursos/CursoList';
import './App.css';

// Navegação direto no App
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <Link to="/novoAluno" className={`nav-button ${isActive('/novoAluno') ? 'active' : ''}`}>
        📝 Cadastrar Aluno
      </Link>
      <Link to="/alunos" className={`nav-button ${isActive('/alunos') ? 'active' : ''}`}>
        👨‍🎓 Ver Alunos
      </Link>
      <Link to="/novoCurso" className={`nav-button ${isActive('/novoCurso') ? 'active' : ''}`}>
        📚 Cadastrar Curso
      </Link>
      <Link to="/cursos" className={`nav-button ${isActive('/cursos') ? 'active' : ''}`}>
        🏫 Ver Cursos
      </Link>
    </nav>
  );
};

const NovoAlunoPage = () => (
  <div className="page">
    <Navigation />
    <div className="page-content">
      <h1>Cadastrar Novo Aluno</h1>
      <AlunoForm />
    </div>
  </div>
);

const AlunosPage = () => (
  <div className="page">
    <Navigation />
    <div className="page-content">
      <h1>Lista de Alunos</h1>
      <AlunoList />
    </div>
  </div>
);

const NovoCursoPage = () => (
  <div className="page">
    <Navigation />
    <div className="page-content">
      <h1>Cadastrar Novo Curso</h1>
      <CursoForm />
    </div>
  </div>
);

const CursosPage = () => (
  <div className="page">
    <Navigation />
    <div className="page-content">
      <h1>Lista de Cursos</h1>
      <CursoList />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/alunos" replace />} />
          <Route path="/novoAluno" element={<NovoAlunoPage />} />
          <Route path="/alunos" element={<AlunosPage />} />
          <Route path="/novoCurso" element={<NovoCursoPage />} />
          <Route path="/cursos" element={<CursosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;