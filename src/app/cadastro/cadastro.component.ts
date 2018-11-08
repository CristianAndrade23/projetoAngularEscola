import { AlunosService } from 'src/app/alunos.service';
import { Aluno } from './../aluno.model';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  novoAluno: Aluno = new Aluno();

  constructor(private alunosService: AlunosService) { }

  adicionarUsuario(){
  this.alunosService.postUsuario(this.novoAluno)
  .subscribe(
    data => {
    },
    (error) => {
      console.log(error)
    },
    () => {
      console.log('Usuario cadastrado')
    });
    alert('Aluno Cadastrado!')
  window.location.reload();
  }
}
