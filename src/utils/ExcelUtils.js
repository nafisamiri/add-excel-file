import XLSX from "xlsx";

const EXTENSIONS = ["xlsx", "xls", "csv"];

const ExcelUtils = {
  parseExcelFile(file, onImport) {
    const reader = new FileReader();

    reader.onload = (event) => {
      //parse data
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      const headers = fileData[0];

      //removing header
      fileData.splice(0, 1);

      const data = ExcelUtils.convertToJson(headers, fileData);
      onImport(headers, data);
    };

    if (file) {
      if (ExcelUtils.getExtension(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    } else {
      onImport([], []);
    }
  },

  getExtension(file) {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension);
  },

  convertToJson(headers, data) {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  },
};

export default ExcelUtils;