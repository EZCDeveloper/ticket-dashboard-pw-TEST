const fs = require('fs');
const path = require('path');

class ErrorReporter {
  lastError: string | null;

  constructor() {
    this.lastError = null;
    // Limpiar el archivo solo si es el proceso principal
    if (process.env.TEST_WORKER_INDEX === undefined || process.env.TEST_WORKER_INDEX === '0') {
      const logPath = path.resolve(__dirname, '../playwright-errors.log');
      if (fs.existsSync(logPath)) {
        fs.unlinkSync(logPath); // Elimina el archivo si existe
      }
      // Crea un archivo vacío
      fs.writeFileSync(logPath, '', 'utf8');
    }
  }

  onTestEnd(test, result) {
    if (result.status === 'failed') {
      this.lastError = `
[${new Date().toISOString()}] ${test.title}
File: ${test.location.file}:${test.location.line}
Error: ${result.error?.message || 'Unknown error'}
--------------------------
`;
    }
  }

  onEnd() {
    // Solo el proceso principal escribe el último error
    if (
      (process.env.TEST_WORKER_INDEX === undefined || process.env.TEST_WORKER_INDEX === '0') &&
      this.lastError
    ) {
      const logPath = path.resolve(__dirname, '../playwright-errors.log');
      fs.writeFileSync(logPath, this.lastError, 'utf8');
    }
  }
}

module.exports = ErrorReporter;