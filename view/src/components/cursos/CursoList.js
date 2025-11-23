// src/components/cursos/CursoList.js
import React from 'react';
import GenericList from '../shared/GenericList';
import { cursoService } from '../../services/api';

const CursoList = () => {
  const columns = [
    { key: 'nome', title: 'Nome do Curso' },
    { key: 'cargaHoraria', title: 'Carga Horária' },
    { key: 'descricao', title: 'Descrição' }
  ];

  return (
    <GenericList
      title="Lista de Cursos"
      columns={columns}
      dataService={cursoService.listar}
      emptyMessage="Nenhum curso cadastrado"
    />
  );
};

export default CursoList;