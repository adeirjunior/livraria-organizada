import MoreHorizontalIcon from "./MoreHorizontalIcon.tsx";

export default function DetailsDropdown() {
  return (
    <div class="dropdown">
      <div tabIndex={0} role="button" class="btn"><MoreHorizontalIcon /></div>
      <ul
        tabIndex={0}
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Visualizar</a>
        </li>
        <li>
          <a>Editar</a>
        </li>
        <li>
          <a>Deletar</a>
        </li>
      </ul>
    </div>
  );
}
