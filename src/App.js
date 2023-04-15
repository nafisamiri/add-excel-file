import React, { useState } from "react";
import ExcelImport from "./components/ExcelImport/ExcelImport";
import DataTable from "./components/DataTable/DataTable";
import Footer from "./components/Footer";

function App() {
  const [colDefs, setColDefs] = useState([]);
  const [data, setData] = useState([]);

  const handleImport = (headers, data) => {
    const heads = headers.map((head) => ({ title: head, field: head }));
    setColDefs(heads);
    setData(data);
  };

  return (
    <div className="container mx-auto">
      <ExcelImport onImport={handleImport} />
      <DataTable title="" data={data} columns={colDefs} />
      <Footer />
    </div>
  );
}

export default App;
