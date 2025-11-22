package com.p2.gestao_alunos.model;

import com.p2.gestao_alunos.dto.AlunoRequestDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "alunos")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private String nome;


    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank(message = "A matrícula é obrigatória")
    @Column(nullable = false, unique = true)
    private String matricula;

    @ManyToOne
    @NotNull(message = "O curso é obrigatório")
    private Curso curso;

    public Aluno(){}

    public Aluno(AlunoRequestDTO dto) {
        this.nome = dto.nome();
        this.email = dto.email();
        this.matricula = dto.matricula();
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
