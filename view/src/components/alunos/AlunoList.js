// src/components/alunos/AlunoList.js
import React from 'react';
import List from '../shared/List';
import { alunoService } from '../../services/api';

const AlunoList = () => {
  const columns = [
    { key: 'nome', title: 'Nome' },
    { key: 'email', title: 'Email' },
    { key: 'matricula', title: 'Matrícula' },
    { key: 'curso.nome', title: 'Curso' }
  ];

  return (
    <List
      title="Lista de Alunos"
      columns={columns}
      dataService={alunoService.listar}
      emptyMessage="Nenhum aluno cadastrado"
    />
  );
};

export default AlunoList;