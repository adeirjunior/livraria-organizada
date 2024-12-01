import Table from "../../../components/Table.tsx";
import { usuarioTableData } from "../../../libs/data.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { createUser, fetchUsers } from "../../../libs/fetches.ts";
import { User } from "../../../libs/types.ts";

interface Data {
  users: User[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const value = await fetchUsers();
    return ctx.render({ users: value });
  },
  async POST(req, _ctx) {
    const form = await req.formData();
    const name = form.get("name")?.toString()!;
    const email = form.get("email")?.toString()!;
    
    await createUser({name, email})

    return new Response(null, {
      status: 201,
    });
  },
};

export default function Usuarios(props: PageProps<Data>) {
  return (
    <>
      <Table data={{content: props.data.users, cols: usuarioTableData.cols}} />
    </>
  );
}
