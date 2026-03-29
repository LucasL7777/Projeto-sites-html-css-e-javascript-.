(function () {

  // Detecta se está numa subpasta (pages/) ou na raiz (public/)
  const isSubpage = window.location.pathname.includes("/pages/");
  const base = isSubpage ? "../" : "";

  const links = [
    { label: "Início",          href: `${base}index.html`,                  hash: "" },
    { label: "Títulos",         href: `${base}index.html#titulos`,           hash: "titulos" },
    { label: "Próximos jogos",  href: `${base}index.html#jogos`,             hash: "jogos" },
    { label: "Classificação",   href: `${base}index.html#classificacao`,     hash: "classificacao" },
    { label: "Saiba mais",      href: `${base}index.html#saiba`,             hash: "saiba" },
    { label: "📊 Análise",      href: `${base}pages/analise.html`,           hash: "analise" },
  ];

  const paginaAtual = window.location.pathname;

  function gerarItens(mobile = false) {
    return links.map(link => {
      const ativo = paginaAtual.includes("analise") && link.label.includes("Análise")
        ? "active"
        : !paginaAtual.includes("analise") && link.label === "Início"
        ? "active"
        : "";
      return `<li class="nav-item ${ativo}"><a href="${link.href}">${link.label}</a></li>`;
    }).join("");
  }

  // Injeta no menu desktop
  const navList = document.getElementById("nav_list");
  if (navList) navList.innerHTML = gerarItens();

  // Injeta no menu mobile
  const mobileList = document.getElementById("mobile_nav_list");
  if (mobileList) mobileList.innerHTML = gerarItens(true);
  window.addEventListener("load", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
});

})();