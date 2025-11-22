package com.p2.gestao_alunos.dto;

import com.p2.gestao_alunos.model.Aluno;

public record AlunoResponseDTO(
        Long id,
        String nome,
        String email,
        String matricula,
        Long cursoId,
        String cursoNome) {

    public AlunoResponseDTO(Aluno aluno){
        this(
                aluno.getId(),
                aluno.getNome(),
                aluno.getEmail(),
                aluno.getMatricula(),
                aluno.getCurso().getId(),
                aluno.getCurso().getNome()
        );
    }
}
