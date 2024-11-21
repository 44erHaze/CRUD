
# CRUD Implementierung mit REST-API

Dieses Projekt zeigt die Implementierung einer CRUD-Anwendung (Read und Delete) mithilfe eines HTML-Formulars, JavaScript und der Fake-API von JSON Placeholder.

---

## Funktionen

1. **Read (Anzeigen):** Daten aus der REST-API werden geladen und in einer HTML-Tabelle dargestellt.
2. **Delete (Löschen):** Einträge können über die REST-API gelöscht werden (simuliert).

### Vorschau

[CRUD Anwendung](./image.png)

---

## Nutzung

1. **Benutzer anzeigen:**
   - Beim Laden der Seite werden die Benutzerdaten aus der API automatisch geladen.
   - Klicken Sie auf die Schaltfläche **Erfassen**, um die Daten manuell neu zu laden.
2. **Benutzer löschen:**
   - Klicken Sie auf die **Delete**-Schaltfläche in der Tabelle, um den entsprechenden Benutzer (simuliert) zu löschen. Die Tabelle wird danach aktualisiert.

---

## Code-Snippets

### 1. Laden der Benutzer (Read)

```javascript
async function fetchUsers() {
  try {
    // API GET-Anfrage
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    // Tabelle mit Benutzerdaten füllen
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = users
      .map(
        (user) => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><button class="btn btn-primary" onclick="deleteUser(${user.id})">Delete</button></td>
          </tr>
        `
      )
      .join('');
  } catch (error) {
    // Fehler behandeln
    document.getElementById('feedback').innerHTML = `<div class="alert alert-danger">Fehler beim Laden der Benutzerdaten: ${error.message}</div>`;
  }
}
```

---

### 2. Benutzer löschen (Delete)

```javascript
async function deleteUser(userId) {
  try {
    // API DELETE-Anfrage
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Erfolgsmeldung anzeigen
    document.getElementById('feedback').innerHTML = `<div class="alert alert-success">Benutzer mit ID ${userId} wurde erfolgreich gelöscht (Simuliert).</div>`;

    // Benutzerliste aktualisieren
    fetchUsers();
  } catch (error) {
    // Fehler behandeln
    document.getElementById('feedback').innerHTML = `<div class="alert alert-danger">Fehler beim Löschen des Benutzers: ${error.message}</div>`;
  }
}
```

---



## Hinweise

- **Simuliertes Löschen:** Die JSON Placeholder API führt keine tatsächlichen Löschungen durch.
- **Lernprojekt:** Dieses Projekt dient ausschließlich Lernzwecken.

---

### Nützliche Links

1. [JSON Placeholder API](https://jsonplaceholder.typicode.com)
2. [Axios Dokumentation](https://axios-http.com/docs/intro)
3. [Bootstrap Dokumentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)