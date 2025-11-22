package com.p2.gestao_alunos.dto;

import com.p2.gestao_alunos.model.Curso;

public record CursoResponseDTO(
        Long id,
        String nome,
        Integer cargaHoraria,
        String descricao)
{
    public CursoResponseDTO(Curso curso) {
        this(
                curso.getId(),
                curso.getNome(),
                curso.getCargaHoraria(),
                curso.getDescricao()
        );
    }
}
