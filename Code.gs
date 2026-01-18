/**
 * =========================================================
 * TableCrafter IA - Code.gs
 * ---------------------------------------------------------
 * Archivo principal de Apps Script.
 * Contiene el menú y la función para abrir el sidebar.
 * =========================================================
 */

/**
 * =========================================================
 * ZONA 1: CONFIGURACIÓN GENERAL
 * =========================================================
 */
var NOMBRE_MENU = 'TableCrafter IA';
var TITULO_SIDEBAR = 'TableCrafter IA';

/**
 * =========================================================
 * ZONA 2: MENÚ PRINCIPAL
 * =========================================================
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(NOMBRE_MENU)
    .addItem('Abrir Panel', 'mostrarSidebar')
    .addToUi();
}

/**
 * =========================================================
 * ZONA 3: SIDEBAR PRINCIPAL
 * =========================================================
 */
function mostrarSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle(TITULO_SIDEBAR);

  SpreadsheetApp.getUi().showSidebar(html);
}
