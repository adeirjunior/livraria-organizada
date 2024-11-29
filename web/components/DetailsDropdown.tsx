import MoreHorizontalIcon from "./MoreHorizontalIcon.tsx";

export default function DetailsDropdown({id}: {id: string}) {
  return (
    <div class="dropdown">
      <div tabIndex={0} role="button" class="btn">
        <MoreHorizontalIcon />
      </div>
      <ul
        f-client-nav
        tabIndex={0}
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a href={id}>Editar</a>
        </li>
        <li>
          <a>Deletar</a>
        </li>
      </ul>
    </div>
  );
}
