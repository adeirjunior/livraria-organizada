import { useEffect, useState } from "preact/hooks";
import { fetchUsers } from "../libs/fetches.ts";
import { User } from "../libs/types.ts";

export default function RegistryForm() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    loadUsers();
  }, []);

  return (
    <section class="flex flex-col gap-4">
      <h1 class="card-title">Criar Registro</h1>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Escolha o usuário que está pegando o livro</span>
        </div>
        <select name="userId" class="select select-bordered">
          <option disabled selected>Escolha um</option>
          {users.map((user, index) => (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <div class="label">
          <span class="label-text-alt">Escolha o usuário que está pegando o livro</span>
        </div>
      </label>
    </section>
  );
}
