import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './interface/userDTO';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apirUrlUsuario = environment.apirUrlUsuario
  
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apirUrlUsuario); 
  }

  criarUsuario(novoUsuario: Usuario): Observable<any> {
    return this.http.post(this.apirUrlUsuario, novoUsuario);
  }
}