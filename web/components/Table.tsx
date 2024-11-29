import { TableData } from "../libs/types.ts";
import DetailsDropdown from "./DetailsDropdown.tsx";

export default function Table(
  props: { data: TableData },
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
            {props.data.cols.map((col, index) => <th key={index}>{col}</th>)}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.content.map((item, index) => (
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
                    <td><span class={`badge ${item.disponivel ? "badge-success" : "badge-error"}`}>{item.disponivel ? "Sim" : "Não"}</span></td>
                  </>
                )
                : (
                  <>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                  </>
                )}
              <th>
                <DetailsDropdown id={item._id}/>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            {props.data.cols.map((col, index) => <th key={index}>{col}</th>)}
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
