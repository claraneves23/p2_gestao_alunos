package com.p2.gestao_alunos.service;

import com.p2.gestao_alunos.dto.CursoRequestDTO;
import com.p2.gestao_alunos.model.Aluno;
import com.p2.gestao_alunos.model.Curso;
import com.p2.gestao_alunos.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public Curso cadastrarCurso(CursoRequestDTO cursoRequestDTO){

        if(cursoRepository.existsByNome(cursoRequestDTO.nome())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Já existe um curso cadastrado com esse nome");
        }

        Curso curso = new Curso(cursoRequestDTO);
        return cursoRepository.save(curso);

    }

    public List<Curso> listarCursos(){
        return cursoRepository.findAll();
    }
}
