import { useRef } from "preact/hooks";
import BookForm from "../components/BookForm.tsx";
import UserForm from "../components/UserForm.tsx";
import RegistryForm from "./RegistryForm.tsx";

export default function Modal({ page }: { page: string }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <button class="btn" onClick={openModal}>Criar</button>

      <dialog ref={modalRef} class="modal">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            let body: BodyInit | null = null;
            const form = new FormData(e.currentTarget);
            
            if (page === "livros") {
              const title = form.get("title")?.toString() || "";
              const author = form.get("author")?.toString() || "";
              const avaliable = form.get("avaliable") === "true"
                ? "true"
                : "false";
              body = new URLSearchParams({ title, author, avaliable });
            } else if (page === "usuarios") {
              const name = form.get("name")?.toString() || "";
              const email = form.get("email")?.toString() || "";
              body = new URLSearchParams({ name, email });
            } else {
              const userId = form.get("userId")?.toString() || "";
              body = new URLSearchParams({ userId });
            }

            await fetch(`/central/${page === 'registros' ? 'registros' : page}`, {
              method: "POST",
              body,
            }).then(() => {
              closeModal()
            })

          }}
        >
          <div class="modal-box">
            {page === "livros"
              ? <BookForm />
              : page === "usuarios"
              ? <UserForm />
              : <RegistryForm />}
            <div class="modal-action flex justify-center">
              <form method="dialog" onSubmit={closeModal}>
                <button class="btn">Fechar</button>
              </form>
              <button class="btn">Enviar</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
