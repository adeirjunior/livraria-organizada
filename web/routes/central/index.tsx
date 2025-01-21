import { Handlers, PageProps } from "$fresh/server.ts";
import { DashboardAnalyticsCard } from "../../components/DashboardAnalyticsCard.tsx";
import { fetchBooks, fetchRegistries, fetchUsers } from "../../libs/fetches.ts";

interface Data {
  books: string;
  users: string;
  registries: string;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const books = (await fetchBooks()).length.toString();
    const users = (await fetchUsers()).length.toString();
    const registries = (await fetchRegistries()).length.toString();

    return ctx.render({ books, users, registries });
  },
};

export default function Dashboard(props: PageProps<Data>) {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardAnalyticsCard
          class="card bg-primary text-primary-content"
          title="Total de Livros"
          stats={props.data.books}
        />
        <DashboardAnalyticsCard
          class="card bg-accent text-accent-content"
          title="Empréstimos Ativos"
          stats={props.data.registries}
        />
        <DashboardAnalyticsCard
          class="card bg-secondary text-secondary-content"
          title="Usuários registrados"
          stats={props.data.users}
        />
      </div>
      <section class="mt-8">
        <h2 class="text-xl font-bold mb-4">Emprestimos recentes</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Livro</th>
                <th>Usuário</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>The Great Gatsby</td>
                <td>John Doe</td>
                <td class="text-success">Retornado</td>
                <td>2024-11-21</td>
              </tr>
              <tr>
                <td>2</td>
                <td>1984</td>
                <td>Jane Smith</td>
                <td class="text-warning">Emprestado</td>
                <td>2024-11-19</td>
              </tr>
              <tr>
                <td>3</td>
                <td>To Kill a Mockingbird</td>
                <td>Emily Johnson</td>
                <td class="text-error">Perdido</td>
                <td>2024-11-18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
