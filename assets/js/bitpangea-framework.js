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
  const page = document.body.dataset.bpPage;
  if (!page) return;

  const activeLink = document.querySelector(`.bp-nav a[data-nav="${page}"]`);
  if (!activeLink) return;

  activeLink.classList.add("active");
  activeLink.setAttribute("aria-current", "page");
}

async function bpInit() {
  await bpLoadInclude("bp-header", "/assets/includes/bitpangea-header.html");
  await bpLoadInclude("bp-footer", "/assets/includes/bitpangea-footer.html");

  bpSetActiveNav();
}

document.addEventListener("DOMContentLoaded", bpInit);
console.log("BitPangea Framework v1.0 loaded");
