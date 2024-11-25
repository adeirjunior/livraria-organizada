import { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export default function Layout({ Component }: PageProps) {
    return (
        <div class="flex min-h-full flex-col">
            <div class="contents">
                <header f-client-nav class="navbar bg-base-100 flex-initial">
                    <div class="navbar-start">
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
                                <li>
                                    <a href="/central">Home</a>
                                </li>
                                <li>
                                    <a href="/central/livros">Livros</a>
                                </li>
                                <li>
                                    <a href="/central/registros">Registros</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-center">
                        <a href="/central" class="btn btn-ghost text-xl">
                            Livraria Organizada
                        </a>
                    </div>
                    <div class="navbar-end">
                        <button class="btn btn-ghost btn-circle">
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
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        <button class="btn btn-ghost btn-circle">
                            <div class="indicator">
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
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                                <span class="badge badge-xs badge-primary indicator-item">
                                </span>
                            </div>
                        </button>
                    </div>
                </header>
                <div class="flex flex-auto justify-between">
                    <nav f-client-nav class="hidden md:block w-full max-w-80 px-6 flex-auto">
                        <ul class="flex flex-col gap-4">
                            <li>
                                <a
                                    class="btn border-4 border-gray-300 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-300 no-animation btn-outline w-full justify-start"
                                    href="/central"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    class="btn border-4 border-gray-300 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-300 no-animation btn-outline w-full justify-start"
                                    href="/central/livros"
                                >
                                    Livros
                                </a>
                            </li>
                            <li>
                                <a
                                    class="btn border-4 border-gray-300 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-300 no-animation btn-outline w-full justify-start"
                                    href="/central/registros"
                                >
                                    Registros
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="w-full md:border-4 border-gray-300 md:mr-6 rounded-xl flex-auto p-6">
                        <Partial name="central-content">
                            <Component />
                        </Partial>
                    </div>
                </div>
            </div>
        </div>
    );
}
