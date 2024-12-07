import { Component, OnInit, signal } from '@angular/core';
import { Usuario } from '../../interface/userDTO';
import { CommonModule } from '@angular/common';
import { UserService } from '../../userservice.service.spec';

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
        if (Array.isArray(response)) {
          console.log(response); 
          this.listaUsuarios.set(response); 
        }
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err); 
      },
    });
  }
}