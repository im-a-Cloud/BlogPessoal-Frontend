import { Component, OnInit, signal } from '@angular/core';
import { Usuario } from '../../interface/userDTO';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importado corretamente
import { UserService } from '../../userservice.service';

@Component({
  selector: 'app-lista-usuarios-componente',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // Necessário para usar HttpClient
  ],
  templateUrl: './lista-usuarios-componente.component.html',
  styleUrls: ['./lista-usuarios-componente.component.css'] // Correção na propriedade
})
export class ListaUsuariosComponenteComponent implements OnInit {
  listaUsuarios = signal<Usuario[]>([]); // Inicializa o sinal

  constructor(private userService: UserService) {} // Corrigido o nome da classe do serviço

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        if (response) {
          console.log(response); // Loga a resposta para depuração
          this.listaUsuarios.set(response); // Atualiza o sinal com os dados da API
        }
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err); // Loga erros para depuração
      },
    });
  }
}
