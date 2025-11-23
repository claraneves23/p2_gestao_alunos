import axios from 'axios';

const API_URL = 'http://localhost:8080/p2_gestao_alunos';

const api = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":'application/json'
    },
});

export const alunoService = {
    listar: () => api.get('/alunos'),
    salvar: (aluno) => api.post('/alunos/novoAluno', aluno),
};

export const cursoService = {
    listar: () => api.get('/cursos'),
    salvar: (aluno) => api.post('/cursos/novoCurso', aluno),
};

export default api;