import "./assets/DocumentsList.css";
import { data } from "./data";

const DocumentsList = () => {
  const tableHeader = ["ID", "Name", "Created Date", "Action"];
  return (
    <div className="list-container">
      <h2>Document List</h2>
      <div className="table-container">
        <table>
          <thead >
            <tr className="table-row">
              {tableHeader.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{ele.id}</td>
                  <td>{ele.Name}</td>
                  <td>{ele.CreatedAt}</td>
                  <td>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <button className="btn" id="primary">View</button>
                      <button className="btn" id="delete">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table >
      </div >
    </div >
  )
}
export default DocumentsList;