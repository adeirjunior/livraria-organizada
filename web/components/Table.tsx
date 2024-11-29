import { Livro } from "../db/schemas/livro.ts";
import { Usuario } from "../db/schemas/usuario.ts";
import DetailsDropdown from "./DetailsDropdown.tsx";

export default function Table(
  props: { data: Livro[] | Usuario[]; cols: string[] },
) {
  return (
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            {props.cols.map((col, index) => <th key={index}>{col}</th>)}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              {"titulo" in item
                ? (
                  <>
                    <td>{item.titulo}</td>
                    <td>{item.autor}</td>
                    <td>{item.disponivel ? "Sim" : "Não"}</td>
                  </>
                )
                : (
                  <>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                  </>
                )}
              <th>
                <DetailsDropdown />
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            {props.cols.map((col, index) => <th key={index}>{col}</th>)}
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
