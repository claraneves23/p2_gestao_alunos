package com.p2.gestao_alunos.controller;


import com.p2.gestao_alunos.dto.AlunoRequestDTO;
import com.p2.gestao_alunos.dto.CursoRequestDTO;
import com.p2.gestao_alunos.model.Aluno;
import com.p2.gestao_alunos.model.Curso;
import com.p2.gestao_alunos.service.AlunoService;
import com.p2.gestao_alunos.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/p2_gestao_alunos/cursos")
@CrossOrigin(origins = "http://localhost:3000")
public class CursoController {


    @Autowired
    private CursoService cursoService;


    @PostMapping("/novoCurso")
    public ResponseEntity<?> cadastrarCurso(@RequestBody CursoRequestDTO dto){
        try {
            Curso curso = cursoService.cadastrarCurso(dto);
            return ResponseEntity.ok(curso);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public List<Curso> listarCursos() {
        return cursoService.listarCursos();
    }
}
