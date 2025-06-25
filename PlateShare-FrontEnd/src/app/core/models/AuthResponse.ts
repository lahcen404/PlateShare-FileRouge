export interface AuthResponse {
  token: string;
  role: 'ADMIN' | 'DONATEUR' | 'DEMANDEUR' ;
}
