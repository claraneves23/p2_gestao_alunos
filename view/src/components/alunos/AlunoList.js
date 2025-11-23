// src/components/alunos/AlunoList.js
import React from 'react';
import GenericList from '../shared/GenericList';
import { alunoService } from '../../services/api';

const AlunoList = () => {
  const columns = [
    { key: 'nome', title: 'Nome' },
    { key: 'email', title: 'Email' },
    { key: 'matricula', title: 'Matrícula' },
    { key: 'curso.nome', title: 'Curso' }
  ];

  return (
    <GenericList
      title="Lista de Alunos"
      columns={columns}
      dataService={alunoService.listar}
      emptyMessage="Nenhum aluno cadastrado"
    />
  );
};

export default AlunoList;