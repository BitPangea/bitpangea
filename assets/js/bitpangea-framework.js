(function () {
  async function bpLoadInclude(id, url) {
    const target = document.getElementById(id);
    if (!target) return;

    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load " + url);

    target.innerHTML = await response.text();
  }

  function bpSetActiveNav() {

  const page = document.body.dataset.bpPage;

  console.log("BP Page:", page);

  const activeLink = document.querySelector(`.bp-nav a[data-nav="${page}"]`);

  console.log("Found link:", activeLink);

  if (!activeLink) return;

  activeLink.classList.add("active");
  activeLink.setAttribute("aria-current", "page");

  console.log("Active applied.");
}
  
  async function bpInit() {
    try {
      await bpLoadInclude("bp-header", "/assets/includes/bitpangea-header.html");
      await bpLoadInclude("bp-footer", "/assets/includes/bitpangea-footer.html");

      bpSetActiveNav();

      console.log("BitPangea Framework v1.0 loaded");
    } catch (error) {
      console.error("BitPangea Framework load error:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", bpInit);
})();
