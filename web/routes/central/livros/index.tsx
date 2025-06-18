import { Handlers, PageProps } from "$fresh/server.ts";
import Table from "../../../components/Table.tsx";
import { livroTableData } from "../../../libs/data.ts";
import { createBook, fetchBooks } from "../../../libs/fetches.ts";
import { Book } from "../../../libs/types.ts";

interface Data {
  books: Book[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const value = await fetchBooks();
    return ctx.render({ books: value });
  },
  async POST(req, _ctx) {
    const form = await req.formData();
    const title = form.get("title")?.toString()!;
    const author = form.get("author")?.toString()!;
    const avaliable = form.get("avaliable") === "true";

    const books = await createBook({ title, author, avaliable });

    return new Response(JSON.stringify({ books }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  },
};


export default function Livros(props: PageProps<Data>) {
  return (
    <div>
      <Table data={{content: props.data.books, cols: livroTableData.cols}} />
    </div>
  );
}
