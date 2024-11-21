// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Elemente aus HTML referenzieren
const userTable = document.getElementById("userTable");
const feedback = document.getElementById("feedback");

// Benutzer anzeigen (Read)
async function fetchUsers() {
  try {
    // API GET-Aufruf
    const response = await axios.get(apiUrl);
    const users = response.data;

    // Tabelle füllen
    userTable.innerHTML = users
      .map(
        (user) => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td><button class="btn btn-primary" onclick="deleteUser(${user.id})">Löschen</button></td>
        </tr>
      `
      )
      .join("");

    feedback.innerHTML = `<div class="alert alert-success">Benutzer erfolgreich geladen.</div>`;
  } catch (error) {
    // Fehlerbehandlung
    feedback.innerHTML = `<div class="alert alert-danger">Fehler beim Laden der Benutzer: ${error.message}</div>`;
  }
}

// Benutzer löschen (Delete)
async function deleteUser(id) {
  try {
    // API DELETE-Aufruf
    await axios.delete(`${apiUrl}/${id}`);
    feedback.innerHTML = `<div class="alert alert-success">Benutzer mit ID ${id} erfolgreich gelöscht (Simulation).</div>`;

    // Tabelle aktualisieren
    fetchUsers();
  } catch (error) {
    // Fehlerbehandlung
    feedback.innerHTML = `<div class="alert alert-danger">Fehler beim Löschen der Benutzer: ${error.message}</div>`;
  }
}
