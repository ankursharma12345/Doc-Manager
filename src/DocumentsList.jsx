import "./assets/DocumentsList.css";

const DocumentsList = () => {
  const tableHeader = ["ID", "Name", "Created Date", "Action"];
  return (
    <div className="list-container">
      <h2>Document List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr className="table-row">
              {tableHeader.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default DocumentsList;