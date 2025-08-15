(function () {
  const toast = document.getElementById("toast");
  function showToast(message, timeout = 1800) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => toast.classList.remove("show"), timeout);
  }

  const chips = document.querySelectorAll(".chip[data-agent]");
  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-agent") || "Agente";
      showToast(`Iniciando "${name}"…`);
    });
  });
})();
