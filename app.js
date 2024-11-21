// API URL
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Reference HTML elements
const userTable = document.getElementById("userTable");
const feedback = document.getElementById("feedback");

// Fetch and display users (Read)
async function fetchUsers() {
  try {
    // API GET request
    const response = await axios.get(apiUrl);
    const users = response.data;

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

/// Delete a user (Delete)
async function deleteUser(id) {
  try {
    // API DELETE request
    await axios.delete(`${apiUrl}/${id}`);
    feedback.innerHTML = `<div class="alert alert-success">User with ID ${id} deleted successfully (simulation).</div>`;

    // Make the message last longer (e.g., 5 seconds)
    setTimeout(() => {
      feedback.innerHTML = ""; // Clear the feedback after 5 seconds
    }, 5000);

    // Refresh the user table
    fetchUsers();
  } catch (error) {
    // Handle errors
    feedback.innerHTML = `<div class="alert alert-danger">Error deleting user: ${error.message}</div>`;

    // Make the error message last longer (e.g., 5 seconds)
    setTimeout(() => {
      feedback.innerHTML = ""; // Clear the feedback after 5 seconds
    }, 5000);
  }
}

