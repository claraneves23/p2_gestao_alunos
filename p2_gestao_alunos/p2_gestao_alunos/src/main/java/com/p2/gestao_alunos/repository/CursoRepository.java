package com.p2.gestao_alunos.repository;

import com.p2.gestao_alunos.model.Aluno;
import com.p2.gestao_alunos.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    boolean existsByNome(String nome);
}
