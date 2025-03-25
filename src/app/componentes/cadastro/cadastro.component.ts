import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Userservice.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formularioCadastro: FormGroup;
  enviando = false;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formularioCadastro = this.fb.group({
      nomeUsuario: ['', [Validators.required, Validators.minLength(3)]],
      emailUsuario: ['', [Validators.required, Validators.email]],
      senhaUsuario: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['', Validators.required],
      termosCondicoes: [false, Validators.requiredTrue]
    });
  }

  enviarFormulario(): void {
    this.mensagemErro = null;
    
    if (this.formularioCadastro.invalid) {
      this.formularioCadastro.markAllAsTouched();
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    this.enviando = true;
    
    this.userService.criarUsuario(this.formularioCadastro.value).subscribe({
      next: (res) => {
        console.log('Cadastro realizado com sucesso', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no cadastro', err);
        this.mensagemErro = this.obterMensagemErro(err);
        this.enviando = false;
      }
    });
  }

  private obterMensagemErro(err: any): string {
    if (err.status === 409) {
      return 'Este e-mail já está cadastrado.';
    }
    return 'Erro ao cadastrar. Por favor, tente novamente.';
  }
}