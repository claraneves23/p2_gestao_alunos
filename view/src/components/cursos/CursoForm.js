// src/components/cursos/CursoForm.js - VERSÃO CORRETA
import React, { useState } from 'react';
import Form from '../shared/Form';
import { cursoService } from '../../services/api';

const CursoForm = () => {
  const [loading, setLoading] = useState(false);

  const cursoFields = [
    { 
      name: 'nome', 
      label: 'Nome do Curso', 
      required: true, 
      placeholder: 'Digite o nome do curso' 
    },
    { 
      name: 'cargaHoraria', 
      label: 'Carga Horária', 
      required: true, 
      placeholder: 'Digite a carga horária em horas' 
     
    },
    { 
      name: 'descricao', 
      label: 'Descrição', 
      type: 'textarea',
      required: true, 
      placeholder: 'Digite a descrição do curso' 
    }
  ];

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await cursoService.salvar(formData);
    } catch (error) {
      alert('Erro: ' + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      title="Cadastrar Curso"
      fieldsConfig={cursoFields}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default CursoForm;