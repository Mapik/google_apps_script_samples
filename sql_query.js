function setQueries(){
  var ss = SpreadsheetApp.openById("spreadsheetId");
  var sheetWithImportData = ss.getSheetByName("data_import"); 
  var Avals = sheetWithImportData.getRange("A1:A").getValues();
  var lastRowWithImportedData = Avals.filter(String).length;

  var sheetRptCurr = ss.getSheetByName("rpt_current_amounts"); 
  var sheetRptHst = ss.getSheetByName("rpt_historic"); 

  var cell = sheetRptCurr.getRange("A1");
  var query = "=QUERY(data_staging!A1:O"+lastRowWithImportedData+";\"select H, E, sum(N) where H != '' group by H, E\";1)";
  cell.setValue(query);
}
