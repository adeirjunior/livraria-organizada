import { defineLayout } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import Modal from "../../islands/Modal.tsx";
import DesktopNav from "../../components/DesktopNav.tsx";
import MobileNav from "../../components/MobileNav.tsx";
import SearchButtonIcon from "../../islands/SearchButtonIcon.tsx";
import NotificationButtonIcon from "../../components/NotificationButtonIcon.tsx";
import Breadcrumbs from "../../components/Breadcrumbs.tsx";
import { nav } from "../../libs/nav.ts";

export default defineLayout((req, ctx) => {
  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  return (
    <div class="flex flex-col h-screen box-border pb-6">
      <header f-client-nav class="navbar bg-base-100 flex-none">
        <div class="navbar-start">
          <MobileNav nav={nav} />
        </div>
        <div class="navbar-center">
          <a href="/central" class="btn btn-ghost text-xl">
            Livraria Organizada
          </a>
        </div>
        <div class="navbar-end">
        <Partial name="nav-content">{segments.length === 2 && <SearchButtonIcon />}</Partial>
          <NotificationButtonIcon />
        </div>
      </header>
      <div class="flex-auto flex overflow-hidden">
        <DesktopNav nav={nav} />
        <div class="overflow-y-auto scrollbar flex flex-col gap-4 scrollbar-thumb-primary scrollbar-track-transparent w-full md:border-4 border-gray-300 md:mr-6 rounded-xl p-6">
          <div class="flex justify-between">
            <Partial name="central-breadcrumbs">
              <Breadcrumbs segments={segments} />

              {segments.length === 2 && <Modal page={segments[segments.length - 1]} />}
            </Partial>
          </div>

          <Partial name="central-content">
            <ctx.Component />
          </Partial>
        </div>
      </div>
    </div>
  );
});
