package com.p2.gestao_alunos.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

public record CursoRequestDTO(@NotBlank(message = "O nome do curso é obrigatório")
                              String nome,

                              @NotBlank(message = "A carga horária do curso é obrigatória")
                              Integer cargaHoraria,

                              @NotBlank(message = "A descrição do curso é obrigatória")
                              String descricao) {
}
