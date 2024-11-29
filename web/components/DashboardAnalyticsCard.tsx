import { JSX } from "preact/jsx-runtime";

export function DashboardAnalyticsCard(
  { title, stats, ...rest }: { 
    title: string;
    stats: string;
  } & JSX.IntrinsicElements['div'],
) {
  return (
    <div {...rest}>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p class="text-4xl font-bold">{stats}</p>
      </div>
    </div>
  );
}
