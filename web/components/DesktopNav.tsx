import { Nav } from "../libs/types.ts";

export default function DesktopNav({nav}: {nav: Nav[]}) {
    return (
        <nav
          f-client-nav
          class="hidden md:block w-full max-w-80 px-6 flex-none"
        >
          <ul class="space-y-4">
            {nav.map((item, index) => (
              <li>
                <a
                  key={index}
                  class="btn border-4 border-gray-300 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-300 no-animation btn-outline w-full justify-start"
                  href={`/central${item.url}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
    )
}