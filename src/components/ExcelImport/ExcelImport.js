import React from "react";
import ExcelUtils from "../../utils/ExcelUtils";
import "tailwindcss/tailwind.css";

function ExcelImport({ onImport }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    ExcelUtils.parseExcelFile(file, onImport);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-50 p-10">
      <label htmlFor="file-input" className="text-lg font-medium">
        Import Data from Excel
      </label>
      <input
        id="file-input"
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleChange}
        className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}

export default ExcelImport;
