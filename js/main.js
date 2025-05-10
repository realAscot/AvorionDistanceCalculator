/*
 *   Programm zum berechnen der Distanz im "Avorion distance Calculator"
 *
 *   (c) 2022-2025 Adam Skoarczak - <https://www.ionivation.com>
 * 
 *   Quelle: <https://github.com/realAscot/AvorionDistanceCalculator>
 * 
 */

// bei Änderungen Version eintragen!
const MAJOR = 1;  // +1 wenn inkompatibel zur vorherigen Version
const MINOR = 2;  // +1 wenn neue Funktionen implementiert
const PATCH = 0;  // +1 wenn Änderungen ohne neue Funktionen

// letzte Veröffentlichung
const LASTDEV = '2025-05-10';

// debug-modus ON/ OFF
const DEBUG = false;

//
// Ab hier nichts mehr konfigurieren!
//

function start() {
     /* sollte onload vom Body des HTML Dokuments geladen werden
      * start() und goVersion() sind für den eigentlichen Zweck des Programms überflüssig
      */
     goVersion();
}

/**
 * Generates the program’s version string from MAJOR, MINOR und PATCH
 * und hängt sie in das HTML-Element mit der ID "version" an.
 *
 * Args:
 *   Keine
 *
 * Returns:
 *   {void}
 */
function goVersion() {
     // Es wird die Version des Programs generiert und die ID=version im HTML geaendert.
     const VERSION = MAJOR + "." + MINOR + "." + PATCH;
     version.innerHTML += `
     Script-Version: ${VERSION}
     ( <a href="https://www.ionivation.com">Ionivation.com</a> ) (C) 2022-2025 Adam Skotarczak
     `;
     return;
}

/**
 * Liest X- und Y-Koordinaten aus den Form-Inputs, rundet diese und
 * zeigt die Distanz zum Zentrum im HTML-Element mit der ID "result" an.
 *
 * Die Rundung erfolgt mit Math.round, die Distanzberechnung über goDistToCenter().
 *
 * Args:
 *   Keine – Werte werden direkt aus den globalen Inputs koordinateX.value und koordinateY.value gelesen.
 *
 * Returns:
 *   {void}
 */
function calculate() {
     // Holt die Koordinaten aus der Website die in dem Formular eingetragen wurden und rundet diese
     let x = Math.round(koordinateX.value);
     let y = Math.round(koordinateY.value);

     // Schickt die Daten zur Berechnung an die Funktion und schreibt in die ID (id="result") des HTML Dokuments
     if (!isNaN(x) && !isNaN(y)){ // wenn x unc y Werte enthalten
          result.innerHTML = `
               ${goDistToCenter(x, y)} sector(s) to Center 0:0
          `;
          // koordinateX.value = ""; koordinateY.value = "";
     }
}

/**
 * Berechnet die gerade Entfernung vom Punkt (x, y) zum Ursprung (0, 0) und rundet das Ergebnis.
 *
 * Führt bei aktiviertem DEBUG-Modus zusätzliche Konsolen-Logs zur
 * Veranschaulichung der Zwischenschritte (x², y² und ungerundete Hypotenuse).
 *
 * @param {number} x - X-Koordinate des Punkts (default: 0).
 * @param {number} y - Y-Koordinate des Punkts (default: 0).
 * @returns {number} Gerundete Distanz (Hypotenuse) zum Zentrum.
 */
function goDistToCenter(x, y){     
     // Berechnet Entfernung zum Zentrum und schickt Ergebnis zurück
     let result;
     
     result = Math.round (Math.hypot(x,y));
     
     // Nur zum debuggen der Ergebnisse wenn DEBUG=true: (1.1.0)
     if (DEBUG){
          console.log("");
          console.log("Berechnungen ohne Rundungen aus goDistToCenter()")
          console.log("X * X: " + Math.round(x * x) );
          console.log("Y * Y: " + Math.round(y * y) );
          console.log("----------------------------")
          console.log(`SQRT x^2 + Y^2 (hypod): ${Math.hypot(x,y)}` );
          console.log("");
     }

     return result;
}

/**
 *  geplante Funktion die jede beliebige Entfernung Berechnet
 * 
 */
function goDistToTarget(x1, y1, x2, y2){
     return;
}
