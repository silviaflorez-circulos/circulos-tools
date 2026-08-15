/*
  CÓDIGO PARA GOOGLE APPS SCRIPT — Estrategia Mi Vida
  ----------------------------------------------------
  QUÉ HACE: recibe los datos que envían las páginas de docs/ (circulo1.html,
  y las que sigan para Círculo 2, 3, 4) y los agrega como fila nueva en la
  pestaña correspondiente de tu Google Sheet.

  CÓMO INSTALARLO (una sola vez):
  1. Sube plantilla/Evaluaciones_MEAL_MiVida.xlsx a tu Google Drive.
     Ábrelo — Google lo convierte automáticamente a Google Sheets.
  2. Dentro de esa Google Sheet: Extensiones > Apps Script.
  3. Borra el contenido de "Código.gs" y pega TODO este archivo.
  4. Arriba a la derecha: "Implementar" > "Nueva implementación".
  5. Tipo: "Aplicación web". Ejecutar como: tu cuenta. Acceso: "Cualquier usuario".
  6. "Implementar" — acepta los permisos (verás una advertencia de "app no
     verificada"; es normal porque es tu propio script — "Avanzado" > "Ir a...").
  7. Copia la URL que termina en /exec.
  8. Pégala en docs/assets/config.js (SCRIPT_URL), haz commit y push.
     GitHub Pages sirve la versión actualizada automáticamente.
  9. Si vuelves a editar el script, tienes que crear una nueva versión desde
     "Gestionar implementaciones" para que el cambio se refleje en la URL.

  IMPORTANTE: no cambies los encabezados (fila 1) de las pestañas Circulo1,
  Circulo2, Circulo3, Circulo4 — este script busca cada columna por el
  nombre exacto del encabezado.
*/

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = (e.parameter.circulo || 'Circulo1');
    var sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput('ERROR: no existe la pestaña "' + sheetName + '"');
    }

    var lastCol = sheet.getLastColumn();
    var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];

    var row = headers.map(function (h) {
      return e.parameter[h] !== undefined ? e.parameter[h] : '';
    });

    sheet.appendRow(row);

    return ContentService.createTextOutput('OK - fila agregada en ' + sheetName);
  } catch (err) {
    return ContentService.createTextOutput('ERROR: ' + err.message);
  }
}

function pruebaManual() {
  var fakeEvent = {
    parameter: {
      circulo: 'Circulo1',
      Timestamp: '2026-08-15 10:00',
      Fecha: '2026-08-15',
      Facilitador: 'Prueba Script',
      NumConvocadas: '25',
      NumParticipantes: '20'
    }
  };
  var result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
