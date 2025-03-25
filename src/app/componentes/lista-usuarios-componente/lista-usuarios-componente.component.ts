import { Component, OnInit, signal } from '@angular/core';
import { Usuario } from '../../interface/userDTO';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Userservice.service';

@Component({
  selector: 'app-lista-usuarios-componente',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-usuarios-componente.component.html',
  styleUrls: ['./lista-usuarios-componente.component.css']
})
export class ListaUsuariosComponenteComponent implements OnInit {
  listaUsuarios = signal<Usuario[]>([]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        console.log('Usuários recebidos:', response); 
        
        if (Array.isArray(response) && response.length > 0) {
          this.listaUsuarios.set(response);
        } else {
          console.warn('Nenhum usuário recebido ou resposta não é um array:', response);
        }
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      },
    });
  }
}