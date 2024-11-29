import Pagination from "../../../islands/Pagination.tsx";
import Table from "../../../components/Table.tsx";
import { usuarioTableData } from "../../../libs/data.ts";

export default function Usuarios() {
  return (
    <>
      <Table data={usuarioTableData} />
      <Pagination />
    </>
  );
}
