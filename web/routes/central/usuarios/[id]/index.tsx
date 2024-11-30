import { Handlers, PageProps } from "$fresh/server.ts";
import { fetchUser } from "../../../../libs/fetches.ts";
import { User } from "../../../../libs/types.ts";

interface Data {
  user: User;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const value = await fetchUser(id);
    return ctx.render({ user: value });
  },
};

export default function Usuario(props: PageProps<Data>) {
  return (
    <div>
      <h1>Usuário</h1>
      <p>Nome: <span>{props.data.user.name}</span></p>
      <p>Email: <span>{props.data.user.email}</span></p>
    </div>
  );
}
