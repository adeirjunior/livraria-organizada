import Pagination from "../../../islands/Pagination.tsx";
import Table from "../../../components/Table.tsx";
import { usuarioTableData } from "../../../libs/data.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchUsers } from "../../../libs/fetches.ts";
import { User } from "../../../libs/types.ts";

interface Data {
  users: User[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const value = await fetchUsers();
    return ctx.render({ users: value });
  },
};

export default function Usuarios(props: PageProps<Data>) {
  return (
    <>
      <Table data={{content: props.data.users, cols: usuarioTableData.cols}} />
      <Pagination />
    </>
  );
}
