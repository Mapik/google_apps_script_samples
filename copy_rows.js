function copyRows() {
  var ss = SpreadsheetApp.openById("spreadsheetId");
  var sheetWithImportData = ss.getSheetByName("data_import"); 
  var sheetWithStagingData = ss.getSheetByName("data_staging_2_0"); 
  var sheetWithCount = ss.getSheetByName("count"); 
  var range = sheetWithCount.getRange(1,1); 
  var lastRowWithImportedData = range.getValue();
  var lastRowWithStagingData = sheetWithStagingData.getLastRow();
  var rangeToCopy = sheetWithStagingData.getRange(10,1,1,sheetWithStagingData.getMaxColumns());
  if (lastRowWithImportedData > lastRowWithStagingData){
    rangeToCopy.copyTo(sheetWithStagingData.getRange(lastRowWithStagingData + 1, 1, lastRowWithImportedData - lastRowWithStagingData));}
}
