function get_config(spreadsheet_id){
  var ss = SpreadsheetApp.openById(spreadsheet_id);
  var sheetWithConfig = ss.getSheetByName("config"); 
  var range = sheetWithConfig.getRange(2, 1, 1, 3);
  var config = range.getValues();
  return config;
};
