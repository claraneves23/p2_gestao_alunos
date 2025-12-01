# p2_gestao_alunos

Sistema de Gestão de Alunos — Projeto Java Spring Boot (com extra em React)

## Visão Geral

Este projeto implementa um sistema de cadastro e gestão de alunos e cursos, seguindo a arquitetura MVC com Spring Boot no backend. O frontend foi desenvolvido em React e está na pasta `view`.

---

## Estrutura do Projeto

```
p2_gestao_alunos/
├── p2_gestao_alunos/           # Backend Java (Spring Boot)
│   ├── src/main/java/com/p2/gestao_alunos/
│   │   ├── controller/         # Controllers (rotas HTTP)
│   │   ├── service/            # Serviços (lógica de negócio)
│   │   ├── repository/         # Repositórios (persistência)
│   │   ├── model/              # Entidades JPA (Aluno, Curso)
│   │   └── dto/                # DTOs (transferência de dados)
│   ├── src/main/resources/     # Configurações e templates
│   └── ...
├── view/                      # Frontend React (extra)
│   └── ...
└── README.md                  # Este arquivo
```

---

## Backend Java — Arquitetura e Elementos

### 1. Model (Entidades)
- `model/Aluno.java`, `model/Curso.java`: representam as tabelas do banco de dados (JPA).

### 2. DTO (Data Transfer Object)
- `dto/AlunoRequestDTO.java`, `dto/AlunoResponseDTO.java`, etc.: objetos para entrada e saída de dados nas rotas, desacoplando a entidade do formato da API.

### 3. Repository
- `repository/AlunoRepository.java`, `repository/CursoRepository.java`: interfaces que estendem `JpaRepository` do Spring Data, fornecendo métodos prontos para persistência.

### 4. Service
- `service/AlunoService.java`, `service/CursoService.java`: lógica de negócio, validações e regras do domínio.

### 5. Controller
- `controller/AlunoController.java`, `controller/CursoController.java`: expõem as rotas HTTP (REST), recebem DTOs, chamam os serviços e retornam respostas.

### 6. Configuração
- `resources/application.properties`: configura o banco H2 em memória (`jdbc:h2:mem:testdb`), console H2 (`/h2-console`), e outras propriedades do Spring Boot.

---

## Rotas Principais (API)

- `GET    /p2_gestao_alunos/alunos`         — Lista todos os alunos
- `POST   /p2_gestao_alunos/alunos/novoAluno` — Cadastra um novo aluno (JSON)
- `GET    /p2_gestao_alunos/cursos`         — Lista todos os cursos
- `POST   /p2_gestao_alunos/cursos/novoCurso` — Cadastra um novo curso (JSON)
- `GET    /h2-console`                      — Console do banco H2 (interface web)

---

## Persistência
- **Banco:** H2 em memória (dados são temporários, ideais para testes/desenvolvimento)
- **Repository:** Spring Data JPA — métodos de CRUD prontos, consultas customizadas podem ser adicionadas por nome ou anotação.

---

## Como Executar (Desenvolvimento)

### Pré-requisitos
- Java JDK 17+
- Node.js e npm (apenas para frontend)

### Backend (Spring Boot)
```powershell
# Navegue até a pasta do backend
cd p2_gestao_alunos/p2_gestao_alunos

# Para rodar em modo desenvolvimento
./mvnw.cmd spring-boot:run

# Ou para empacotar e rodar o jar
./mvnw.cmd package
java -jar target/*.jar
```

### Frontend (React — extra)
```powershell
# Em outro terminal, navegue até a pasta view
cd view
npm install
npm start
```

- O frontend estará em `http://localhost:3000`
- O backend estará em `http://localhost:8080`

---

## Testes
- **Backend:**
```powershell
cd p2_gestao_alunos/p2_gestao_alunos
./mvnw.cmd test
```
- **Frontend:**
```powershell
cd view
npm test
```

---

## Observações
- O frontend consome a API Java, mas não é obrigatório para testar o backend.
- O banco H2 é reiniciado a cada execução (dados não persistem).
- O projeto segue o padrão MVC: Controller → Service → Repository → Model.

---

## Créditos
- Projeto acadêmico — Gestão de Alunos (Java Spring Boot, React como extra)