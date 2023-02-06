/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Pac-Man', 'pacman')
      .addItem('Pitfall', 'pitfall')
      .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a dialog for a PacMan visualization.
 */
function pacman() {
  var ui = HtmlService.createTemplateFromFile('pacman')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setWidth(940)
      .setHeight(720);
  SpreadsheetApp.getUi().showModalDialog(ui, "Pac-Man");
}

/**
 * Opens a dialog for a PacMan visualization.
 */
function pitfall() {
  var ui = HtmlService.createTemplateFromFile('pitfall')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setWidth(920)
      .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(ui, "Pitfall");
}

/**
 * Return all data from first spreadsheet as an array. Can be used
 * via google.script.run to get data without requiring publication
 * of spreadsheet.
 *
 * Returns null if spreadsheet does not contain more than one row.
 */
function getSpreadsheetData() {
  var data = SpreadsheetApp.getActive().getSheets()[0].getDataRange().getValues();
  return (data.length > 1) ? data : null;
}