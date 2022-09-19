import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';
=======
 import { NgModule } from '@angular/core';

  import { Aluno } from './aluno';
 import { AlunoService } from './aluno.service';
>>>>>>> 1fe31ee829a9bdf34c8a0c5a50129fb32d996d88

  @Component({
   selector: 'app-root',
   templateUrl: './alunos.component.html',
   styleUrls: ['./alunos.component.css']
 })
 export class AlunosComponent implements OnInit {
    constructor(private alunoService: AlunoService) {}

    aluno: Aluno = new Aluno();
    alunos: Aluno[];
    cpfduplicado: boolean = false;

     criarAluno(a: Aluno): void {
      if (this.alunoService.criar(a)) {
        this.alunos.push(a);
        this.aluno = new Aluno();
      } else {
        this.cpfduplicado = true;
      }
    }

     onMove(): void {
       this.cpfduplicado = false;
    }

     ngOnInit(): void {
      this.alunos = this.alunoService.getAlunos();
    }

  }