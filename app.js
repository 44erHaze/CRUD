// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Reference HTML elements
const userTable = document.getElementById("userTable");
const feedback = document.getElementById("feedback");

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
