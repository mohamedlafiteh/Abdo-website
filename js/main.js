// Define the navigation bar as a template literal
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
  <div class="container">
    <a class="navbar-brand fw-bold" href="index.html">UK Study Hub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="universities.html">Universities</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
`;

// Define the footer as a template literal
const footer = `
<footer class="bg-dark text-white text-center py-3">
  <p>&copy; 2024 UK Study Hub. All rights reserved.</p>
</footer>
`;

// Insert the navbar and footer into the respective containers
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");

  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
  } else {
    console.error('Navbar container with ID "navbar" not found.');
  }

  if (footerContainer) {
    footerContainer.innerHTML = footer;
  } else {
    console.error('Footer container with ID "footer" not found.');
  }
});
