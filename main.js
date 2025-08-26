// main.js
const navbar = `
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="about.html">Home</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="index.html">Projects</a></li>
      <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
      <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
    </ul>
  </div>
</nav>
`;
document.getElementById('navbar-placeholder').insertAdjacentHTML('beforeend', navbar);

