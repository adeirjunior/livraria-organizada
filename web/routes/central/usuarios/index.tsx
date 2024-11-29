import Pagination from '../../../islands/Pagination.tsx'
import Table from '../../../components/Table.tsx'
import { Usuario } from "../../../db/schemas/usuario.ts";

const usuarios: Usuario[] = [
    {
      _id: "",
      nome: "Nome do usuário",
      email: "usuario@dominio.com",
      _rev: "",
    },
  ];
  
  const cols: string[] = ["nome", "email"]

export default function Usuarios() {
    return (
        <>
            <Table data={usuarios} cols={cols}/>
            <Pagination />
        </>
    );
}
