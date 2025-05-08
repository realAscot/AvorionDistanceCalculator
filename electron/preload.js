const { contextBridge, ipcRenderer } = require('electron');

// Sichere, explizite API zwischen Renderer und Main-Prozess
contextBridge.exposeInMainWorld('electronAPI', {
  // Beispiel: Nachricht an Main senden
  sendToMain: (channel, data) => {
    ipcRenderer.send(channel, data);
  },

  // Beispiel: Antwort empfangen
  onFromMain: (channel, callback) => {
    ipcRenderer.on(channel, (event, ...args) => callback(...args));
  }
});
