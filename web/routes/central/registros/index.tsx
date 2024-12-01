import { Handlers, PageProps } from "$fresh/server.ts";
import Table from "../../../components/Table.tsx";
import { registroTableData } from "../../../libs/data.ts";
import { createRegistry, fetchRegistries } from "../../../libs/fetches.ts";
import { Registry } from "../../../libs/types.ts";

interface Data {
  registries: Registry[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const value = await fetchRegistries();
    return ctx.render({ registries: value });
  },
  async POST(req, _ctx) {
    const form = await req.formData();
    const userId = form.get("userId")?.toString()!;
    
    await createRegistry({userId})

    return new Response(null, {
      status: 201,
    });
  },
};

export default function Registros(props: PageProps<Data>) {
    return (
        <section>
        <h2 class="text-xl font-bold mb-4">Registros</h2>
        <Table data={{content: props.data.registries, cols: registroTableData.cols}} />
      </section>
    )
}