import { TableData } from "./types.ts";

export const usuarioTableData: TableData = {
  content: [
    {
      id: "87657",
      name: "Nome do usuário",
      email: "usuario@dominio.com",
    },
  ],
  cols: ["nome", "email"],
};

export const livroTableData: TableData = {
  content: [
    {
      id: "1231",
      title: "Nome do Livro",
      author: "Nome do Autor",
      avaliable: true,
    },
  ],
  cols: ["título", "autor", "disponível"],
};

export const registroTableData: TableData = {
  content: [
  ],
  cols: ["título", "autor", "disponível"],
};
