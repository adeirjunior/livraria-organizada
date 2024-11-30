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
              {"title" in item
                ? (
                  <>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>
                      <span
                        class={`badge ${
                          item.avaliable ? "badge-success" : "badge-error"
                        }`}
                      >
                        {item.avaliable ? "Sim" : "Não"}
                      </span>
                    </td>
                  </>
                )
                : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </>
                )}
              <th>
                <DetailsDropdown id={item.id} />
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
