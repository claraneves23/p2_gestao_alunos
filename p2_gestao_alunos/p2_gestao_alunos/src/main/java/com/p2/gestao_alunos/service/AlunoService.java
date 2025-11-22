package com.p2.gestao_alunos.service;

import com.p2.gestao_alunos.dto.AlunoRequestDTO;
import com.p2.gestao_alunos.model.Aluno;
import com.p2.gestao_alunos.model.Curso;
import com.p2.gestao_alunos.repository.AlunoRepository;
import com.p2.gestao_alunos.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class AlunoService {

    @Autowired
    AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public Aluno cadastrarAluno(AlunoRequestDTO alunoRequestDTO){
        if(alunoRepository.existsByEmail(alunoRequestDTO.email())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Já existe um aluno cadastrado com esse email");
        }

        if(alunoRepository.existsByMatricula(alunoRequestDTO.matricula())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Já existe um aluno cadastrado com essa matricula");
        }

        Curso curso = cursoRepository.findById(alunoRequestDTO.cursoId())
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        Aluno aluno = new Aluno(alunoRequestDTO);
        aluno.setCurso(curso);

        return alunoRepository.save(aluno);
    }

    public List<Aluno> listarAlunos(){
        return alunoRepository.findAll();
    }

}
