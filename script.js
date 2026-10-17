(() => {
  "use strict";

  const githubUser = "joots28";
  const linkedInUrl = "https://www.linkedin.com/in/jonathan-otiniel-053a12290";
  const projectConfig = [
    {
      repo: "ChurchMennager",
      category: "fullstack",
      title: "ChurchManager",
      description: "Sistema web de gestão comunitária em desenvolvimento acadêmico, pensado para conectar interface responsiva, API e banco de dados relacional.",
      tags: ["React", "C# / .NET", "MySQL"],
      status: "EM EVOLUÇÃO",
      visual: "visual-church",
      code: "CM",
      kind: "01 / FULL-STACK"
    },
    {
      repo: "SPIUsuarios_2DS",
      category: "backend",
      title: "SPI — API de usuários",
      description: "Solução de estudos com o projeto APIUsuarios01, praticando a organização de uma aplicação voltada a usuários e serviços.",
      tags: ["API", "Solution .NET", "Back-end"],
      status: "ESTUDO",
      visual: "visual-api",
      code: "{ API }",
      kind: "02 / BACK-END"
    },
    {
      repo: "lanchonete",
      category: "desktop",
      title: "Lanchonete",
      description: "Projeto desktop em Windows Forms para praticar a construção de telas e a organização de fluxos em uma aplicação.",
      tags: ["C#", "Windows Forms", "Desktop"],
      status: "PRÁTICA",
      visual: "visual-desktop",
      code: "DESK",
      kind: "03 / DESKTOP"
    },
    {
      repo: "estruturas-condicionais",
      category: "learning",
      title: "Estruturas condicionais",
      description: "Exercícios de lógica de programação para fortalecer o raciocínio, a tomada de decisão e a base necessária para sistemas maiores.",
      tags: ["Lógica", "Programação", "Fundamentos"],
      status: "BASE",
      visual: "visual-logic",
      code: "if ( )",
      kind: "04 / LÓGICA"
    }
  ];

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const projectsGrid = document.getElementById("projectsGrid");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const easterTrigger = document.getElementById("easterTrigger");
  const easterQuote = document.getElementById("easterQuote");
  const easterQuoteText = document.getElementById("easterQuoteText");
  const easterQuoteCredit = document.getElementById("easterQuoteCredit");
  const easterSource = document.getElementById("easterSource");
  const easterEggQuotes = [
    {
      text: "“Float like a butterfly, sting like a bee.”",
      credit: "Drew “Bundini” Brown — frase popularizada por Muhammad Ali.",
      url: "https://scholar.lib.vt.edu/VA-news/ROA-Times/issues/1992/rt9201/01140352.htm"
    },
    {
      text: "“I am the greatest!”",
      credit: "Muhammad Ali.",
      url: "https://www.bbc.co.uk/sport/boxing/16146367"
    },
    {
      text: "Round termina. Aprendizado continua.",
      credit: "Frase original do portfólio.",
      url: ""
    },
    {
      text: "A técnica se afina na repetição; a curiosidade abre o próximo round.",
      credit: "Frase original do portfólio.",
      url: ""
    }
  ];
  let easterQuoteIndex = -1;

  if (easterTrigger && easterQuote && easterQuoteText && easterQuoteCredit) {
    easterTrigger.addEventListener("click", () => {
      easterQuoteIndex = (easterQuoteIndex + 1) % easterEggQuotes.length;
      const quote = easterEggQuotes[easterQuoteIndex];

      easterQuoteText.textContent = quote.text;
      easterQuoteCredit.textContent = quote.credit;
      easterQuote.hidden = false;

      if (easterSource) {
        easterSource.hidden = !quote.url;
        if (quote.url) {
          easterSource.href = quote.url;
        } else {
          easterSource.removeAttribute("href");
        }
      }

      easterTrigger.firstChild.textContent =
        easterQuoteIndex === easterEggQuotes.length - 1 ? "Ver de novo " : "Outra frase ";
      easterTrigger.setAttribute("aria-label", "Mostrar a próxima frase escondida");
    });
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      siteNav.classList.toggle("is-open", open);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        siteNav.classList.remove("is-open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        siteNav.classList.remove("is-open");
      }
    });
  }

  const progress = document.getElementById("readingProgress");
  const updateProgress = () => {
    if (!progress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.width = Math.max(0, Math.min(100, ratio * 100)) + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const statNote = document.getElementById("statsNote");
  const formatNumber = (value) => new Intl.NumberFormat("pt-BR").format(value);

  async function loadGitHubStats() {
    const repoCount = document.getElementById("repoCount");
    const starCount = document.getElementById("starCount");
    try {
      const response = await fetch("https://api.github.com/users/" + githubUser + "/repos?per_page=100&type=owner&sort=updated", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) throw new Error("GitHub API indisponível");
      const repositories = await response.json();
      const ownPublicRepos = repositories.filter((repo) => !repo.fork && !repo.private);
      const stars = ownPublicRepos.reduce((total, repo) => total + Number(repo.stargazers_count || 0), 0);
      if (repoCount) repoCount.textContent = formatNumber(ownPublicRepos.length) + (repositories.length === 100 ? "+" : "");
      if (starCount) starCount.textContent = formatNumber(stars);
      if (statNote) statNote.textContent = "DADOS DE REPOSITÓRIOS PÚBLICOS · GITHUB API";
    } catch (error) {
      if (repoCount) repoCount.textContent = "GitHub";
      if (starCount) starCount.textContent = "↗";
      if (statNote) statNote.textContent = "CONSULTE O PERFIL PARA VER OS DADOS MAIS RECENTES";
    }
  }

  function createProjectCard(config, repository) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.category = config.category;

    const visual = document.createElement("div");
    visual.className = "project-visual " + config.visual;
    const stamp = document.createElement("span");
    stamp.className = "visual-stamp";
    stamp.textContent = config.category === "fullstack" ? "PROJETO ACADÊMICO" : config.category === "backend" ? "API / ESTUDOS" : config.category === "desktop" ? "APLICAÇÃO DESKTOP" : "FUNDAMENTOS";
    visual.appendChild(stamp);

    const graphic = document.createElement("div");
    if (config.category === "fullstack") {
      graphic.className = "visual-window";
      const code = document.createElement("b");
      code.textContent = "CM";
      const label = document.createElement("i");
      label.textContent = "ChurchManager";
      graphic.append(code, label);
      const lines = document.createElement("div");
      lines.className = "visual-lines";
      visual.append(graphic, lines);
    } else if (config.category === "backend") {
      graphic.className = "api-glyph";
      graphic.textContent = "{ API }";
      visual.appendChild(graphic);
      const caption = document.createElement("div");
      caption.className = "api-caption mono";
      caption.textContent = "REQUEST → RESPONSE";
      visual.appendChild(caption);
    } else if (config.category === "desktop") {
      graphic.className = "desktop-window";
      graphic.innerHTML = '<div class="desktop-bar"><i></i><i></i><i></i></div><div class="desktop-content"><span class="desktop-square"></span><span></span><span></span><span class="desktop-pill"></span></div>';
      visual.appendChild(graphic);
      const label = document.createElement("div");
      label.className = "desktop-label mono";
      label.textContent = "WINDOWS FORMS";
      visual.appendChild(label);
    } else {
      graphic.className = "logic-code";
      graphic.innerHTML = '<span>if</span> (ideia) {<br><i>&nbsp;&nbsp; construir();</i><br><span>}</span>';
      visual.appendChild(graphic);
      const label = document.createElement("div");
      label.className = "logic-number mono";
      label.textContent = "01 — N";
      visual.appendChild(label);
    }
    card.appendChild(visual);

    const body = document.createElement("div");
    body.className = "project-body";
    const topline = document.createElement("div");
    topline.className = "project-topline";
    const kind = document.createElement("span");
    kind.textContent = config.kind;
    const status = document.createElement("span");
    status.className = "project-status";
    status.textContent = config.status;
    topline.append(kind, status);

    const title = document.createElement("h3");
    title.textContent = config.title;
    const description = document.createElement("p");
    description.textContent = config.description;

    const tags = document.createElement("div");
    tags.className = "project-tags";
    const technologyTags = config.tags.slice();
    if (repository && repository.language && !technologyTags.includes(repository.language)) {
      technologyTags[technologyTags.length - 1] = repository.language;
    }
    technologyTags.forEach((label) => {
      const tag = document.createElement("span");
      tag.textContent = label;
      tags.appendChild(tag);
    });

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = repository && repository.html_url ? repository.html_url : "https://github.com/" + githubUser + "/" + config.repo;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.append(document.createTextNode("Explorar repositório "));
    const arrow = document.createElement("span");
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");
    link.appendChild(arrow);

    body.append(topline, title, description, tags, link);
    card.appendChild(body);
    return card;
  }

  async function refreshProjectMetadata() {
    try {
      const response = await fetch("https://api.github.com/users/" + githubUser + "/repos?per_page=100&type=owner&sort=updated", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) return;
      const repositories = await response.json();
      const repositoryByName = new Map(repositories.map((repository) => [repository.name.toLowerCase(), repository]));
      const allCards = projectConfig.map((config) => createProjectCard(config, repositoryByName.get(config.repo.toLowerCase())));
      if (projectsGrid && allCards.length) {
        projectsGrid.replaceChildren(...allCards);
      }
    } catch (error) {
      // Os cartões estáticos do HTML continuam disponíveis sem conexão.
    }
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter || "all";
      document.querySelectorAll(".filter-button").forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle("is-active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
      if (!projectsGrid) return;
      projectsGrid.querySelectorAll(".project-card").forEach((card) => {
        card.hidden = category !== "all" && card.dataset.category !== category;
      });
    });
  });

  function setupRevealAnimations() {
    const targets = document.querySelectorAll(".section-label, .about-grid, .numbers-row, .section-heading-row, .project-card, .stack-panel, .timeline-item, .cert-card, .contact-inner");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;
    document.body.classList.add("reveal-ready");
    targets.forEach((target) => target.classList.add("reveal"));
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -55px 0px", threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
  }

  loadGitHubStats();
  refreshProjectMetadata();
  setupRevealAnimations();
})();