# CRUD Implementierung mit REST-API
 
Dieses Projekt zeigt die Implementierung einer CRUD-Anwendung (Read und Delete) mithilfe eines HTML-Formulars, JavaScript und der Fake-API von JSON Placeholder.
 
---
 
## Funktionen
 
- **Create (Erstellen):** Neue Benutzer können erstellt werden. Die Daten werden in der API simuliert.
- **Read (Anzeigen):** Daten aus der REST-API werden geladen und in einer HTML-Tabelle dargestellt.
- **Delete (Löschen):** Einträge können über die REST-API gelöscht werden (simuliert).
 
### Vorschau
 
[CRUD Anwendung](./image.png)
 
---
 
## Nutzung
 
#### Benutzer anzeigen
- Beim Laden der Seite werden die Benutzerdaten aus der API automatisch geladen.
- Klicken Sie auf die Schaltfläche **"Erfassen"**, um die Daten manuell neu zu laden.

#### Benutzer löschen
- Klicken Sie auf die **"Delete"**-Schaltfläche in der Tabelle, um den entsprechenden Benutzer (simuliert) zu löschen.
- Nach dem Löschen wird die Tabelle automatisch aktualisiert.
 
---
 
## Code-Snippets
 
### 1. Laden der Benutzer (Read)
 
```javascript
// Fetch and display users (Read)
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
 
    // Populate table
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
      .join("");
 
    feedback.innerHTML = `<div class="alert alert-success">Users loaded successfully.</div>`;
  } catch (error) {
    // Handle errors
    feedback.innerHTML = `<div class="alert alert-danger">Error loading users: ${error.message}</div>`;
  }
}
```
 
---
 
### 2. Benutzer löschen (Delete)
 
```javascript
// Delete a user (Delete)
async function deleteUser(id) {
  try {
    // API DELETE request
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
 
    // Refresh the user list
    fetchUsers();
 
    // Append success message below the user list and keep it on screen
    feedback.innerHTML += `<div class="alert alert-success">User with ID ${id} deleted successfully (simulation).</div>`;
  } catch (error) {
    feedback.innerHTML += `<div class="alert alert-danger">Error deleting user: ${error.message}</div>`;
  }
}
```
 
---
 
```javascript
// Create a new user (POST)
async function createUser(userData) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
 
    const data = await response.json();
    feedback.innerHTML += `<div class="alert alert-success">User created successfully with ID ${data.id}.</div>`;
    fetchUsers(); // Refresh user list
  } catch (error) {
    feedback.innerHTML += `<div class="alert alert-danger">Error creating user: ${error.message}</div>`;
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
2. [Bootstrap Dokumentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
