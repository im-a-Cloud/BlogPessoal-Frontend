import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';
import { Postagem } from './interface/postDTO';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private apiUrlPostagem = environment.apiUrlPostagem
  
  constructor(private http: HttpClient) {}

  getPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.apiUrlPostagem); 
  }

  criarPostagem(novoPost: Postagem): Observable<any> {
    return this.http.post(this.apiUrlPostagem, novoPost);
  }
}