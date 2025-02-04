import { Book } from "../libs/types.ts";

export default function BookCard({ book }: {book: Book}) {
  return (
    <div
      key={book.id}
      class="card bg-base-100 image-full w-72 sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 shadow-xl"
    >
      <div class="h-60"></div>
      <div class="card-body h-20">
        <p class="card-title">{book.author}</p>
        <h2>{book.title}</h2>
      </div>
    </div>
  );
}
