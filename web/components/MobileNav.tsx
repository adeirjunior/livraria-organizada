import { Nav } from "../libs/types.ts";

export default function MobileNav({ nav }: { nav: Nav[] }) {
  return (
    <div class="dropdown md:hidden">
      <div
        tabindex={0}
        role="button"
        class="btn btn-ghost btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {nav.map((item, index) => (
          <li>
            <a key={index} href={`/central${item.url}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
