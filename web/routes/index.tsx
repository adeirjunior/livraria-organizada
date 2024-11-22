import BookCard from "../islands/BookCard.tsx";

export default function Home() {
  return (
    <>
      <div class="hero bg-base-200 py-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-80 rounded-lg shadow-2xl"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <div class="w-[420px]">
            <h1 class="text-5xl font-bold">Livraria</h1>
            <p class="py-6">
              Pesquise aqui para descobrir quais os livros disponíveis no
              momento.
            </p>
            <label class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Pesquisar..." />
            </label>
          </div>
        </div>
      </div>
      <section class="m-8 space-y-6 font-bold text-4xl">
        <h2 class="text-center">Livros Recentes</h2>

        <div class="flex flex-wrap gap-6 justify-center">
          {Array(20).fill(null).map((_, index) => (
            <BookCard key={index} id={index} />
          ))}
        </div>
        
      </section>
    </>
  );
}
