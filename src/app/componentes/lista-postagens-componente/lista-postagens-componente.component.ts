import { Component, OnInit,signal,Signal } from '@angular/core';
import { Postagem } from '../../interface/postDTO';
import { PostagemService } from '../../Postservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-postagens-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-postagens-componente.component.html',
  styleUrl: './lista-postagens-componente.component.css'
})
export class ListaPostagensComponenteComponent {
  listaPostagens = signal<Postagem[]>([]);

  constructor(private postagemService: PostagemService) {}

  ngOnInit() {
    this.postagemService.getPostagens().subscribe({
      next: (response) => {
        if (Array.isArray(response)) {
          this.listaPostagens.set(response);
        } else {
          console.warn('Resposta não é um array:', response);
          this.listaPostagens.set([]);
        }
      },
      error: (err) => {
        console.error('Erro ao obter posts:', err);
        this.listaPostagens.set([]);
      }
    });
  }
}
