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
const MINOR = 1;  // +1 wenn neue Funktionen implementiert
const PATCH = 4;  // +1 wenn Änderungen ohne neue Funktionen

// letzte Veröffentlichung
const LASTDEV = '2025-05-01 20:00 Thursday';

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

function goVersion() {
     // Es wird die Version des Programs generiert und die ID=version im HTML geaendert.
     const VERSION = MAJOR + "." + MINOR + "." + PATCH;
     version.innerHTML += `
     Script-Version: ${VERSION}
     ( <a href="https://www.ionivation.com">Ionivation.com</a> ) (C) 2022-2025 Adam Skotarczak [![GitHub release (latest by semver)](https://img.shields.io/github/v/release/realAscot/AvorionDistanceCalculator?sort=semver)](https://github.com/realAscot/AvorionDistanceCalculator/releases)

     `;
}

function calculate() {
     // Holt die Koordinaten aus der Website die in dem Formular eingetragen wurden und rundet diese
     let x = Math.round(koordinateX.value);
     let y = Math.round(koordinateY.value);

     // Schickt die Daten zur Berechnung an die Funktion und schreibt in die ID (id="result") des HTML Dokuments
     if ( (x) && (y) ){ // wenn x unc y Werte enthalten
          result.innerHTML = `
               from [${x}:${y}] = ${goDistToCenter(x, y)} sectors to Center
          `;
          koordinateX.value = "";
          koordinateY.value = "";
     }
}

function goDistToCenter(x, y){     
     // Berechnet Entfernung zum Zentrum und schickt Ergebnis zurück
     let result;
     
     result = Math.round (Math.sqrt( Math.round(x * x) + Math.round(y * y) ));
     
     // Nur zum debuggen der Ergebnisse wenn DEBUG=true: (1.1.0)
     if (DEBUG){
          console.log("");
          console.log("Berechnungen ohne Rundungen aus goDistToCenter()")
          console.log("X * X: " + Math.round(x * x) );
          console.log("Y * Y: " + Math.round(y * y) );
          console.log("----------------------------")
          console.log(`SQRT x^2 + Y^2: ${Math.sqrt((x * x) + (y * y))}` );
          console.log("");
     }

     return result;
}

function goDistToTarget(x1, y1, x2, y2){
     // geplante Funktion die jede beliebige Entfernung Berechnet
}
