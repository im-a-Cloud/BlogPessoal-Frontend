import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponenteComponent } from "./componentes/lista-usuarios-componente/lista-usuarios-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ListaUsuariosComponenteComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog-Pessoal-Front';
}
