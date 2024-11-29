import Table from "../../../components/Table.tsx";
import Pagination from "../../../islands/Pagination.tsx";
import { livroTableData } from "../../../libs/data.ts";

export default function Livros() {
  return (
    <div>
      <Table data={livroTableData} />
      <Pagination />
    </div>
  );
}
