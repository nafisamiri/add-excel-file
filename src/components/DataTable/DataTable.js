import React from "react";
import MaterialTable from "material-table";

function DataTable({ title, data, columns }) {
  return (
    <div>
      <MaterialTable title={title} data={data} columns={columns} />
    </div>
  );
}

export default DataTable;