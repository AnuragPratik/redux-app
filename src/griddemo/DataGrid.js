import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DataGrid = () => {
  const [rowData, setRowData] = useState([]);
  let columnDefs = null;
  columnDefs = [
    {
      headerName: "ID",
      field: "id",
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    {
      headerName: "User Name",
      field: "username",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Email",
      field: "email",
      sortable: true,
      filter: true,
    },
  ];

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 650 }}>
      <button onClick={handleClick}>Show Users</button>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default DataGrid;
