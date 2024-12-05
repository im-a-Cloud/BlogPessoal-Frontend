import { TestBed } from '@angular/core/testing';
import { UserService } from './userservice.service'; // Importa o serviço correto
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Módulo para testar HttpClient

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa módulo de teste para HttpClient
      providers: [UserService], // Declara o serviço em teste
    });
    service = TestBed.inject(UserService); // Injeta o serviço
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Testa se o serviço foi criado com sucesso
  });
});
