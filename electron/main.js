const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: path.join(__dirname, '../assets/icon.png'),
    webPreferences: {
      sandbox: false,            // Wichtig für Electron 25+
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Lade die HTML-Datei aus dem Web-Verzeichnis
  mainWindow.loadFile(path.join(__dirname, '../web/index.html'));

  // Optional: DevTools öffnen
  // mainWindow.webContents.openDevTools();
}

// App bereit
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// App schließen (außer auf macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
