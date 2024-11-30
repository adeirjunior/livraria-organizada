import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchBook } from "../../../../libs/fetches.ts";
import { Book } from "../../../../libs/types.ts";

interface Data {
  book: Book;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const value = await fetchBook(id);
    return ctx.render({ book: value });
  },
};

export default function Livro(props: PageProps<Data>) {
  return (
    <div>
      <h1>Livro</h1>
      <p>Nome: <span>{props.data.book.title}</span></p>
      <p>Email: <span>{props.data.book.author}</span></p>
    </div>
  );
}
