export interface Users {
  ok: boolean;
  user: User;
  token: string;
  total: number;
  users: User[];
}

export interface User {
  id: string;
  name: string;
  status: number;
  email: string;
  token: string;
  email_verified_at: any;
  role: Role;
  created_at: Date;
  updated_at: Date;
}

export enum Role {
  Administrador = "Administrador",
  Visualizador = "Visualizador",
}
