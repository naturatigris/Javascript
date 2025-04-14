const routes = ['home','collapsible', 'courses', 'carousel', 'search'];

function showSection(sectionId) {
  routes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === sectionId) ? 'block' : 'none';
    }
  });
}

function handleHashChange() {
  const hash = window.location.hash.substring(1); // Remove the '#' symbol
  if (routes.includes(hash)) {
    showSection(hash);
  } else {
    showSection('home'); // Default section
  }
}

// Run on load
window.addEventListener('DOMContentLoaded', handleHashChange);
// Run when hash changes
window.addEventListener('hashchange', handleHashChange);


