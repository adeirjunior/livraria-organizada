import Table from "../../../components/Table.tsx";
import { Livro } from "../../../db/schemas/livro.ts";
import Pagination from "../../../islands/Pagination.tsx";

const books: Livro[] = [
  {
    _id: "",
    titulo: "Nome do Livro",
    autor: "Nome do Autor",
    registros: [],
    disponivel: true,
    _rev: "",
  },
];

const cols: string[] = ["título", "autor", "disponível"]

export default function Livros() {
  return (
    <div>
      <Table data={books} cols={cols}/>
      <Pagination />
    </div>
  );
}
