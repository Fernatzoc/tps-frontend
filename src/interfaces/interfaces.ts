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

export interface Product {
  id: string;
  nombre: string;
  stock: number;
  id_proveedor: number;
  id_categoria: number;
  created_at: Date;
  updated_at: Date;
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

export interface Transaction {
  id: string;
  id_producto: string;
  fecha: string;
  movimiento: string;
  cantidad: string;
  costo_unitario: string;
  total: string;
  created_at: Date;
  updated_at: Date;
}

export enum Movimiento {
  Entrada = "entrada",
  Salida = "salida",
}
