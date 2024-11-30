import { useState, useEffect } from 'preact/hooks';

export default function DetailsDropdown({ id }: { id: string }) {
  const [basePath, setBasePath] = useState("");

  useEffect(() => {
    if (typeof globalThis !== 'undefined') {
      setBasePath(globalThis.location.pathname);
    }
  }, []);

  return (
    <div className="flex items-center gap-4">
      <a className="btn" href={`${basePath}/${id}`}>Editar</a>
      <button className="btn">Deletar</button>
    </div>
  );
}
