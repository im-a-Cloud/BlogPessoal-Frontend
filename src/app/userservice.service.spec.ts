import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './interface/userDTO';
import { environment } from './environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl
  
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl); 
  }
  criarUsuario(novoUsuario: any):Observable<any>{
    return this.http.post(this.apiUrl, novoUsuario);
  }
}
