// src/components/alunos/AlunoForm.js - JÁ CORRETO
import React, { useState } from 'react';
import GenericForm from '../shared/GenericForm';
import { alunoService, cursoService } from '../../services/api';

const AlunoForm = () => {
  const [loading, setLoading] = useState(false);

  const alunoFields = [
    { 
      name: 'nome', 
      label: 'Nome Completo', 
      required: true, 
      placeholder: 'Digite o nome do aluno' 
    },
    { 
      name: 'email', 
      label: 'Email', 
      type: 'email', 
      required: true, 
      placeholder: 'Digite o email' 
    },
    { 
      name: 'matricula', 
      label: 'Matrícula', 
      required: true, 
      placeholder: 'Digite a matrícula' 
    },
    { 
      name: 'cursoId', 
      label: 'Curso', 
      type: 'select', 
      required: true, 
      placeholder: 'Selecione um curso',
      optionsService: cursoService.listar
    }
  ];

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await alunoService.salvar(formData);
    } catch (error) {
      alert('Erro: ' + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <GenericForm
      title="Cadastrar Aluno"
      fieldsConfig={alunoFields}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default AlunoForm;