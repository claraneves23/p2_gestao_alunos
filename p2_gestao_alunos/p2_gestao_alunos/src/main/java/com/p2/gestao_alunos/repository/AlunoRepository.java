package com.p2.gestao_alunos.repository;

import com.p2.gestao_alunos.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    boolean existsByEmail(String email);
    boolean existsByMatricula(String matricula);
}
