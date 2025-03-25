import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { UserService } from '../../Userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'] // Correção no nome
})
export class CadastroComponent {
  formularioCadastro: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { // Injeção do UserService
    this.formularioCadastro = this.fb.group({
      nomeUsuario: [''],
      emailUsuario: [''],
      senhaUsuario: [''],
      tipoUsuario: [''],
      termosCondicoes: [false, Validators.requiredTrue] // Adicionando o campo de checkbox
    });
  }

  enviarFormulario() {
    if (this.formularioCadastro.valid) {
      this.userService.criarUsuario(this.formularioCadastro.value).subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response);
        },
        error: (err) => {
          console.error('Erro ao enviar os dados:', err);
        }
      });
    } else {
      console.error('Formulário inválido!');
    }
  }
  
}
