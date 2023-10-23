function onOpen() {
    // on opening google sheet this function executes
    var ui = SpreadsheetApp.getUi();
    // creates a custom menu which which when clicked upon has an option import csv and then executes the show dialog function
    ui.createMenu('Custom Menu')
      .addItem('Import CSV', 'showDialog')
      .addToUi();
  }
  
  function showDialog() {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Import CSV');
    //gets the form from the html page
  }
  
  function importCSVData(csvData, selectedColumns, columns) {
    try {
      // Convert the CSV data into a 2D array
      var csvRows = csvData.split('\n');
      var data = [];
      for (var i = 1; i < csvRows.length; i++) {
        var csvColumns = csvRows[i].split(',');
        data.push(csvColumns);
      }
  
      // Create a filtered data array based on selected columns
      var filteredData = [];
      var columnIndexMap = {};
      columns.forEach(function(column, index) {
        columnIndexMap[column] = index;
      });
      filteredData.push(selectedColumns);
  
      data.forEach(function(row) {
        var filteredRow = [];
        // for each selectedcolumn we are pushing the rows into the filtered row array
        selectedColumns.forEach(function(column) {
          filteredRow.push(row[columnIndexMap[column]]);
        });
        filteredData.push(filteredRow);
      });
      //using the function SpreadsheetApp provided by the Appscript we are importing the selected columns into the googlesheet
  
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var lastRow = sheet.getLastRow();//gets the last unfilled row
      var numRows = filteredData.length;
      var numCols = filteredData[0].length;
  
      sheet.getRange(lastRow + 1, 1, numRows, numCols).setValues(filteredData);
  
      return 'CSV Imported successfully!';
    } catch (error) {
      return 'Error importing CSV: ' + error;
    }
  }