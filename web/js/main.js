document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ipc-test-btn");
  const output = document.getElementById("ipc-test-result");

  console.log("main.js geladen");
  console.log("electronAPI verfügbar:", window.electronAPI !== undefined);

  if (button && output && window.electronAPI) {
    button.addEventListener("click", () => {
      window.electronAPI.sendToMain("test-message", "Ping von Renderer");
    });

    window.electronAPI.onFromMain("test-reply", (data) => {
      output.textContent = "Antwort vom Main-Prozess: " + data;
    });
  } else {
    console.warn("Voraussetzungen für IPC-Test nicht erfüllt");
  }
});
