import { Livro } from "../db/schemas/livro.ts";
import { Usuario } from "../db/schemas/usuario.ts";

export interface Nav {
  name: string;
  url: string;
}

export interface LivroData {
  _id: string;
  titulo: string;
  autor: string;
  disponivel: boolean;
}

export interface TableData {
  content: Livro[] | Usuario[];
  cols: string[];
}
