export default function BookForm() {
  return (
    <section class="flex flex-col gap-4">
      <h1 class="card-title">Criar Livro</h1>
      <input
        required
        type="text"
        name="title"
        placeholder="Nome do livro"
        value=""
        class="input input-bordered w-full max-w-xs"
      />
      <input
        required
        type="text"
        name="author"
        placeholder="Autor do livro"
        value=""
        class="input input-bordered w-full max-w-xs"
      />
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text">Disponível</span>
          <input
            type="checkbox"
            name="avaliable"
            class="toggle toggle-primary"
          />
        </label>
      </div>
    </section>
  );
}
