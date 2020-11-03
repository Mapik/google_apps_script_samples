function sort(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName("sheetName"); 
  var numRows = sourceSheet.getLastRow();
  var numCols = sourceSheet.getLastColumn();
  var range = sourceSheet.getRange(2, 1, numRows - 1, numCols);   
  range.sort([{column: 3, ascending: true}, {column: 4, ascending: false}, {column: 1, ascending: true}]);
};
