package com.p2.gestao_alunos.model;

import com.p2.gestao_alunos.dto.CursoRequestDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "cursos")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    @Column(nullable = false)
    private Integer cargaHoraria;

    @Column(nullable = false)
    private String descricao;

    public Curso(){}

    public Curso(CursoRequestDTO dto){
        this.nome = dto.nome();
        this.cargaHoraria = dto.cargaHoraria();
        this.descricao = dto.descricao();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(Integer cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }


}

