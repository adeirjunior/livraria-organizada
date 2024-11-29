import { TableData } from "./types.ts";

export const usuarioTableData: TableData = {
  content: [
    {
      _id: "87657",
      nome: "Nome do usuário",
      email: "usuario@dominio.com",
      _rev: "",
    },
  ],
  cols: ["nome", "email"],
};

export const livroTableData: TableData = {
  content: [
    {
      _id: "1231",
      titulo: "Nome do Livro",
      autor: "Nome do Autor",
      registros: [],
      disponivel: true,
      _rev: "",
    },
  ],
  cols: ["título", "autor", "disponível"],
};
