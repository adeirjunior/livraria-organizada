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
        <form method="post">
          <div class="modal-box">
            {page === "livros"
              ? <BookForm />
              : page === "usuarios"
              ? <UserForm />
              : <RegistryForm/>}
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
