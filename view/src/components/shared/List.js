import React, { useState, useEffect, useCallback } from 'react';
import './List.css';

const List = ({ 
  title, 
  columns, 
  dataService,
  emptyMessage = "Nenhum registro encontrado"
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await dataService();
      setData(response.data);
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
      setError('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  }, [dataService]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderCell = (item, column) => {
    if (column.render) {
      return column.render(item);
    }
    
    try {
      const value = column.key.split('.').reduce((obj, key) => obj?.[key], item);
      return value || '-';
    } catch (err) {
      return '-';
    }
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="generic-list">
      <h2 className="list-title">{title}</h2>
      
      {data.length === 0 ? (
        <div className="empty-state">{emptyMessage}</div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={`header-${column.key}-${index}`} className="table-header">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={item.id ? `row-${item.id}` : `row-${rowIndex}`} className="table-row">
                {columns.map((column, colIndex) => (
                  <td 
                    key={item.id ? 
                      `cell-${item.id}-${column.key}-${colIndex}` : 
                      `cell-${rowIndex}-${colIndex}`
                    } 
                    className="table-cell"
                  >
                    {renderCell(item, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;