async function bpLoadInclude(id, url) {
  const target = document.getElementById(id);
  if (!target) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);

    target.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

function bpSetActiveNav() {
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinks = document.querySelectorAll(".bp-nav a");

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";

    const isHome = linkPath === "/" && currentPath === "/";
    const isSection = linkPath !== "/" && currentPath.startsWith(linkPath);

    if (isHome || isSection) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

async function bpInit() {
  await bpLoadInclude("bp-header", "/assets/includes/header.html");
  await bpLoadInclude("bp-footer", "/assets/includes/footer.html");

  bpSetActiveNav();
}

document.addEventListener("DOMContentLoaded", bpInit);
