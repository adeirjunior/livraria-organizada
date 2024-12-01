import { useEffect, useState } from "preact/hooks";
import { deleteBook, deleteRegistry, deleteUser } from "../libs/fetches.ts";

export default function DetailsDropdown({ id }: { id: string }) {
  const [basePath, setBasePath] = useState("");
  const [segments, setSegments] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (typeof globalThis !== "undefined") {
      const path = globalThis.location.pathname;
      setBasePath(path);
      setSegments(path.split("/").filter(Boolean));
    }
  }, []);

  const handleDelete = async () => {
    if (!confirm("Tem certeza de que deseja deletar este item?")) return;

    setIsDeleting(true);

    try {
      const page = segments[segments.length -1]

      if(page === 'livros') {
        await deleteBook(id);
      } else if(page === 'usuarios') {
        await deleteUser(id);
      } else {
        await deleteRegistry(id);
      }
      
      globalThis.location.reload();
    } catch (error) {
      console.error("Erro ao deletar o livro:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <a className="btn" href={`${basePath}/${id}`}>Editar</a>
      <button
        className="btn"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deletando..." : "Deletar"}
      </button>
    </div>
  );
}
