export interface Usuario {
  idUsuario: number;
  nomeUsuario: string;
  emailUsuario: string;
  senhaUsuario: string;
  tipoUsuario: 'PADRAO' | 'ADMIN'; // Enumeração de possíveis valores
}
