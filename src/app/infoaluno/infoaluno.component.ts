import { Aluno } from './../aluno.model';
import { AlunosService } from 'src/app/alunos.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-infoaluno',
  templateUrl: './infoaluno.component.html',
  styleUrls: ['./infoaluno.component.css']
})
export class InfoalunoComponent implements OnInit {

  @Input()editarAlunoOn: boolean = false;

  alunos: Aluno[];

  alunoEditado: Aluno = new Aluno();

  constructor(private alunosService: AlunosService) { }

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
      })}
    
      // atualizarAluno(alunoEditado: Aluno){
      //   this.alunosService.updateUsuario(alunoEditado).subscribe(
      //     (data) => this.alunoEditado = data)
      // }
  }
