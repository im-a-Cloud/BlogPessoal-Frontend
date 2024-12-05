import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ListaUsuariosComponenteComponent } from "./componentes/lista-usuarios-componente/lista-usuarios-componente.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CadastroComponent, ListaUsuariosComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog-Pessoal-Front';
}
