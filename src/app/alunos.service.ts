import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AlunosService {
  
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5670/usuarios';

  getUsuarios(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl + '/listar');
  }

  postUsuario(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.apiUrl + '/inserir', aluno);
  }

  deleteUsuario(id: number): Observable<{}> {
    return this.http.delete<{}>(this.apiUrl + '/deletar/' + id,
    {headers: new  HttpHeaders().set('Content-Type', 'application/json')});
  }
  
  // updateUsuario(novoaluno: Aluno): Observable<Aluno> {
  //   return this.http.put<Aluno>(this.apiUrl, novoaluno);
  // }
}
