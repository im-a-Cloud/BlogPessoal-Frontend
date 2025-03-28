import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostagemService } from '../../Postservice.service';
@Component({
  selector: 'app-postagens',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './postagens.component.html',
  styleUrl: './postagens.component.css'
})
export class PostagensComponent {
  formularioPostagem : FormGroup;
  postando = false;
  mensagemErro: string | null = null;

  constructor(
        private fb: FormBuilder,
        private postagemService: PostagemService,
        private router: Router
  ){
    this.formularioPostagem = this.fb.group({
      tituloPost: ['', [Validators.required, Validators.minLength(5)]], // Nome igual ao do template
      conteudoPost: ['', Validators.required]
      });
  }
  enviarPostagem(): void {
    this.mensagemErro = null;
    
    if (this.formularioPostagem.invalid) {
      this.formularioPostagem.markAllAsTouched();
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
      return;
    }
    this.postando = true;

    this.postagemService.criarPostagem(this.formularioPostagem.value).subscribe({
      next: (res) => {
        console.log('Postagem Enviada com sucesso', res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro na postagem', err);
        this.mensagemErro = this.obterMensagemErro(err);
        this.postando = false;
      }
    });
  }
  private obterMensagemErro(err: any): string {
    if (err.status === 409) {
      return 'Este e-mail já está cadastrado.';
    }
    return 'Erro ao eviar a postagem. Por favor, tente novamente.';
  }
}
