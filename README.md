# CRUD-Anwendung: Benutzerverwaltung

Dieses Projekt ist eine einfache **CRUD (Create, Read, Update, Delete)**-Anwendung zur Verwaltung von Benutzerdaten. Es verwendet die **JSONPlaceholder API** für Testzwecke und zeigt, wie man mit Postman und JavaScript REST-API-Aufrufe implementieren und testen kann.

---

## Funktionen

- **Lesen (Read)**: Benutzerliste aus der API abrufen und in der Tabelle anzeigen.
- **Löschen (Delete)**: Simuliertes Löschen eines Benutzers durch einen API-Aufruf.
- Rückmeldungen für Aktionen (z. B. Erfolgsmeldungen oder Fehleranzeigen).

---

## Verwendete Technologien

- **HTML**: Struktur der Benutzeroberfläche.
- **JavaScript**: API-Aufrufe und Logik (Axios-Bibliothek).
- **Postman**: Zum Testen der REST-API-Endpunkte.

---

## Einrichtung und Nutzung

### Voraussetzungen
- Ein Browser (z. B. Chrome, Firefox).
- Ein Code-Editor (z. B. Visual Studio Code).
- [Postman](https://www.postman.com/) für API-Tests.

### Schritte zur Nutzung der Anwendung
1. Lade die Projektdateien herunter und öffne sie in deinem Code-Editor.
2. Starte die Anwendung:
   - Öffne die Datei `index.html` im Browser.
   - Klicke auf den Button **"Load Users"**, um die Benutzerliste aus der API zu laden.
   - Verwende die **"Delete"**-Schaltfläche, um einen Benutzer zu löschen (simuliert).
3. **Postman-Tests:**
   - Öffne Postman und teste die folgenden Endpunkte:
     - `GET https://jsonplaceholder.typicode.com/users` für das Abrufen der Benutzerliste.
     - `DELETE https://jsonplaceholder.typicode.com/users/{id}` für das Löschen eines Benutzers (ersetze `{id}` mit einer Benutzer-ID).
   - Überprüfe die Antwortcodes und Rückmeldungen der API.

---

## API-Endpunkte

1. **Benutzer abrufen (Read)**  
   `GET https://jsonplaceholder.typicode.com/users`  
   **Beschreibung:** Gibt eine Liste aller Benutzer zurück.

2. **Benutzer löschen (Delete)**  
   `DELETE https://jsonplaceholder.typicode.com/users/{id}`  
   **Beschreibung:** Simuliert das Löschen eines Benutzers (nur API-Aufruf, keine tatsächliche Datenänderung).

---

## Verwendung mit Postman

### GET: Benutzer abrufen
1. Öffne Postman.
2. Erstelle eine neue Anfrage mit:
   - **Methode:** `GET`
   - **URL:** `https://jsonplaceholder.typicode.com/users`
3. Sende die Anfrage und überprüfe die JSON-Antwort.

### DELETE: Benutzer löschen
1. Erstelle eine neue Anfrage mit:
   - **Methode:** `DELETE`
   - **URL:** `https://jsonplaceholder.typicode.com/users/{id}` (ersetze `{id}` durch eine gültige ID, z. B. `1`).
2. Sende die Anfrage und überprüfe die Antwort (z. B. HTTP-Status `200 OK`).

---

## Projektstruktur

```
crud-tutorial/
│
├── index.html         # Hauptdatei der Benutzeroberfläche
├── app.js             # Logik und API-Aufrufe
└── README.md          # Dokumentation
```

---

## Bekannte Einschränkungen

- **Fake API**: Der `DELETE`-Aufruf ist simuliert und hat keine Auswirkung auf die Daten auf dem Server.
- **Nur Lesen und Löschen**: Diese Version unterstützt nur das Abrufen und Löschen von Daten, keine Erstellung oder Bearbeitung.

---

## Fazit

Dieses Projekt zeigt eine einfache CRUD-Implementierung mit **JavaScript** und **Postman** für das Testen der API. Es eignet sich ideal für Anfänger, um REST-APIs zu verstehen und mit ihnen zu arbeiten.
``` 

Falls Änderungen notwendig sind, sag einfach Bescheid! 😊