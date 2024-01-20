function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.container, .card, h2, h5, .btn-primary, .btn-secondary, .btn-toggle-dark, .btn-danger').forEach(element => {
    element.classList.toggle('dark-mode');
  });

const icon = document.querySelector('.toggle-button i'); 
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }