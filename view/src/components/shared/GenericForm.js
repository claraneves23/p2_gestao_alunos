// src/components/shared/GenericForm.js
import React, { useState, useEffect } from 'react';
import './GenericForm.css';

const GenericForm = ({ 
  title, 
  fieldsConfig, 
  onSubmit,
  initialData = {},
  loading = false
}) => {
  const [formData, setFormData] = useState(initialData);
  const [selectOptions, setSelectOptions] = useState({});

  useEffect(() => {
    // Carrega opções para selects
    const loadSelectOptions = async () => {
      const selectFields = fieldsConfig.filter(field => field.type === 'select');
      
      for (let field of selectFields) {
        if (field.optionsService) {
          try {
            const response = await field.optionsService();
            setSelectOptions(prev => ({
              ...prev,
              [field.name]: response.data
            }));
          } catch (error) {
            console.error(`Erro ao carregar opções para ${field.name}:`, error);
          }
        }
      }
    };

    loadSelectOptions();
  }, [fieldsConfig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || '',
      onChange: handleChange,
      required: field.required,
      className: 'form-field',
      placeholder: field.placeholder
    };

    switch (field.type) {
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">{field.placeholder || 'Selecione...'}</option>
            {selectOptions[field.name]?.map(option => (
              <option key={option.id} value={option.id}>
                {option.nome || option.name}
              </option>
            ))}
          </select>
        );

      case 'email':
        return <input type="email" {...commonProps} />;

      case 'number':
        return <input type="number" {...commonProps} />;

      case 'textarea':
        return <textarea {...commonProps} rows={3} />;

      default:
        return <input type="text" {...commonProps} />;
    }
  };

  return (
    <div className="generic-form">
      <h2 className="form-title">{title}</h2>
      <form onSubmit={handleSubmit} className="form">
        {fieldsConfig.map(field => (
          <div key={field.name} className="form-group">
            <label className="form-label">
              {field.label}
              {field.required && <span className="required">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default GenericForm;