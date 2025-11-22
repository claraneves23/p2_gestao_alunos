package com.p2.gestao_alunos.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AlunoRequestDTO(@NotBlank(message = "O nome é obrigatório")
                               String nome,

                              @NotBlank(message = "O email é obrigatório")
                               @Email(message = "Formato de email inválido")
                               String email,

                              @NotBlank(message = "A matrícula é obrigatória")
                               String matricula,

                              @NotNull(message = "O curso é obrigatório")
                               Long cursoId){
}
