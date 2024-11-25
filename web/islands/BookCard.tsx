type BookProps = {
    id: number
}

export default function BookCard({id}: BookProps) {
  return (
    <div
              key={id}
              class="card bg-base-100 image-full w-72 sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 shadow-xl"
            >
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  class="object-cover w-full h-60 rounded-t-lg"
                />
              </figure>
              <div class="card-body h-20">
                <h2 class="card-title">Livro {id + 1}</h2>
                <p>Descrição do livro {id + 1}</p>
              </div>
            </div>
  );
}
