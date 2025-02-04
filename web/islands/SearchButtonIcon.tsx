import { useRef, useState } from "preact/hooks";

export default function SearchButtonIcon() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isSending, setIsSending] = useState(false);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const sendForm = () => {
    setIsSending(true); 
    console.log("Form sent");

    setTimeout(() => {
      setIsSending(false);
      closeModal();
    }, 2000);
  };

  const stopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <button class="btn btn-ghost btn-circle" onClick={openModal}>
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
      <dialog
        onClick={closeModal}
        class="modal"
        ref={dialogRef}
      >
        <div class="modal-box w-auto space-y-4" onClick={stopPropagation}>
          <div class="flex flex-row space-x-4">
            <input
              type="text"
              placeholder="Pesquisar..."
              class="input input-bordered input-info w-full max-w-xs"
            />
            <button class="btn btn-primary" onClick={sendForm}>
              <label class={`swap ${isSending ? "swap-active" : ""}`}>
                <div class="swap-on">
                  <span class="loading loading-spinner loading-xs"></span>
                </div>
                <div class="swap-off">
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
                </div>
              </label>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
