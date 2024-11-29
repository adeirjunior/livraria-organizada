import { DashboardAnalyticsCard } from "../../components/DashboardAnalyticsCard.tsx";

export default function Dashboard() {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardAnalyticsCard
          class="card bg-primary text-primary-content"
          title="Total de Livros"
          stats="1,234"
        />
        <DashboardAnalyticsCard
          class="card bg-accent text-accent-content"
          title="Empréstimos Ativos"
          stats="256"
        />
        <DashboardAnalyticsCard
          class="card bg-secondary text-secondary-content"
          title="Usuários registrados"
          stats="789"
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
