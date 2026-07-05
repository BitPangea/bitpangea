async function bpLoadInclude(id, url) {
  const target = document.getElementById(id);
  if (!target) return;

  const response = await fetch(url);
  target.innerHTML = await response.text();
}

async function bpInit() {
  await bpLoadInclude("bp-header", "/assets/includes/header.html");
  await bpLoadInclude("bp-footer", "/assets/includes/footer.html");

  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".bp-nav a");

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath || 
        (linkPath !== "/" && currentPath.startsWith(linkPath))) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", bpInit);
