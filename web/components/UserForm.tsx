export default function UserForm() {
  return <section class="flex flex-col gap-4">
    <h1 class="card-title">Criar Usuário</h1>
      <input required type="text" name="name" placeholder="Nome do usuário" value="" class="input input-bordered w-full max-w-xs" />
      <input required type="email" name="email" placeholder="Email do usuários" value="" class="input input-bordered w-full max-w-xs" />
  </section>
}
