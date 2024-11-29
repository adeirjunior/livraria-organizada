export default function Breadcrumbs({ segments }: { segments: string[] }) {
  return (
    <div>
      <div class="breadcrumbs text-sm hidden md:block">
        <ul f-client-nav>
          {segments.map((segment: string, index: number) => {
            const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;

            return (
              <li key={index}>
                <a href={segmentPath}>{segment}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
