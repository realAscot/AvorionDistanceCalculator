require('dotenv').config();

const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.DEBUG === 'true'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: parseInt(process.env.WINDOW_WIDTH || '820', 10),
    height: parseInt(process.env.WINDOW_HEIGHT || '640', 10),
    icon: path.join(__dirname, '../assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: true,            // Wichtig für Electron 25+ (ist per default true ab 25)
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  
  // Optional: DevTools öffnen
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  
  // Menue deaktivieren:
  mainWindow.setMenu(null);

  // Lade die HTML-Datei aus dem Web-Verzeichnis:
  mainWindow.loadFile(path.join(__dirname, '../web/index.html'));
}

// App bereit
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const { ipcMain } = require('electron');

ipcMain.on("test-message", (event, data) => {
  console.log("IPC empfangen:", data);
  event.sender.send("test-reply", "Pong vom Main-Prozess");
});

// App schließen (außer auf macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
