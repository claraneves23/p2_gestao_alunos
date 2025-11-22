package com.p2.gestao_alunos.controller;

import com.p2.gestao_alunos.dto.AlunoRequestDTO;
import com.p2.gestao_alunos.model.Aluno;
import com.p2.gestao_alunos.model.Curso;
import com.p2.gestao_alunos.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/p2_gestao_alunos/alunos")
@CrossOrigin(origins = "http://localhost:3000")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;



    @PostMapping("/novoAluno")
    public ResponseEntity<?> cadastrarAluno(@RequestBody AlunoRequestDTO dto){
        try {
            Aluno aluno = alunoService.cadastrarAluno(dto);
            return ResponseEntity.ok(aluno);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public List<Aluno> listarAlunos() {
        return alunoService.listarAlunos();
    }

}
