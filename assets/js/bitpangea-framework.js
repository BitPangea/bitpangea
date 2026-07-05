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
    if (!page) return;

    const activeLink = document.querySelector(`.bp-nav a[data-nav="${page}"]`);
    if (!activeLink) return;

    activeLink.classList.add("active");
    activeLink.setAttribute("aria-current", "page");
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
