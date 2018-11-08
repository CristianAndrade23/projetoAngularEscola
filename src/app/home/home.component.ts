import { Aluno } from '../aluno.model';
import { Component, OnInit, Input } from '@angular/core';
import {AlunosService} from 'src/app/alunos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() alunos: Aluno[] = [];


  constructor(private alunosService: AlunosService) {}

  ngOnInit() {
    this.alunosService.getUsuarios().subscribe(
    data => { 
      this.alunos = data;
      console.log(this.alunos)
    },
    (error) => {
      console.log(error)
    },
    () => {
      console.log('===== Requisição feita com sucesso =====')
    })
    }

      excluirAluno(id: number){
        this.alunosService.deleteUsuario(id)
        .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error)
        },
        () => {
          console.log('Aluno deletado!')
        });
        window.location.reload();
      }
}