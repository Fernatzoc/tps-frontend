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

export interface Proveedor {
  nombre: string;
  telefono: string;
  direccion: string;
  correo: string;
  updated_at: Date;
  created_at: Date;
  id: string;
}

export enum Role {
  Administrador = "Administrador",
  Visualizador = "Visualizador",
}

export interface Category {
  nombre: string;
  updated_at: Date;
  created_at: Date;
  id: string;
}
