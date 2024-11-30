import { Handlers, PageProps } from "$fresh/server.ts";
import Table from "../../../components/Table.tsx";
import Pagination from "../../../islands/Pagination.tsx";
import { livroTableData } from "../../../libs/data.ts";
import { fetchBooks } from "../../../libs/fetches.ts";
import { Book } from "../../../libs/types.ts";

interface Data {
  books: Book[];
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const value = await fetchBooks();
    return ctx.render({ books: value });
  },
};

export default function Livros(props: PageProps<Data>) {
  return (
    <div>
      <Table data={{content: props.data.books, cols: livroTableData.cols}} />
      <Pagination />
    </div>
  );
}
