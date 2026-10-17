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
      detail: "Interface React/Vite, API REST em ASP.NET Core e persistência MySQL, com módulos separados. O repositório também documenta limitações e validações pendentes.",
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
      detail: "Projeto de estudos organizado como uma solution da plataforma .NET, voltado à estruturação de uma aplicação de API. Consulte o código para verificar a implementação detalhada.",
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
      detail: "Aplicação desktop de estudo para praticar a construção de telas e a organização de fluxos em Windows Forms com C#.",
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
      detail: "Exercícios introdutórios organizados por atividade para praticar condicionais, raciocínio lógico e decomposição de problemas.",
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
      url: "https://alicenter.org/exhibits/float-like-a-butterfly-garden/",
      linkLabel: "Ver contexto da frase ↗"
    },
    {
      text: "“I am the greatest!”",
      credit: "Muhammad Ali.",
      url: "https://www.bbc.co.uk/sport/boxing/16146367",
      linkLabel: "Ver contexto da frase ↗"
    },
    {
      text: "Round termina. Aprendizado continua.",
      credit: "Frase original do portfólio; inspirada na ideia de aprendizado contínuo.",
      url: "https://www.alura.com.br/artigos/aprendizado-continuo-habito-aprender-mundo-mudancas",
      linkLabel: "Explorar a ideia de aprendizado contínuo ↗"
    },
    {
      text: "A técnica se afina na repetição; a curiosidade abre o próximo round.",
      credit: "Frase original do portfólio; inspirada na prática deliberada e no aperfeiçoamento gradual.",
      url: "https://www.alura.com.br/artigos/aprenda-a-programar-em-10-anos",
      linkLabel: "Entender a prática deliberada ↗"
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
        const hasContext = typeof quote.url === "string" && quote.url.trim().length > 0;
        easterSource.hidden = !hasContext;
        if (hasContext) {
          easterSource.href = quote.url;
          easterSource.textContent = quote.linkLabel || "Ver contexto da frase ↗";
          easterSource.target = "_blank";
          easterSource.rel = "noopener noreferrer";
        } else {
          easterSource.removeAttribute("href");
          easterSource.textContent = "Contexto indisponível";
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

    const details = document.createElement("details");
    details.className = "project-details";
    const summary = document.createElement("summary");
    summary.textContent = config.category === "fullstack" ? "O que a arquitetura reúne" : "Foco de estudo";
    const detailText = document.createElement("p");
    detailText.textContent = config.detail;
    details.append(summary, detailText);

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

    body.append(topline, title, description, tags, details, link);
    if (config.category === "fullstack") {
      const caseLink = document.createElement("a");
      caseLink.className = "project-link project-case-link";
      caseLink.href = "#estudo-de-caso";
      caseLink.append(document.createTextNode("Ler estudo de caso "));
      const caseArrow = document.createElement("span");
      caseArrow.textContent = "↘";
      caseArrow.setAttribute("aria-hidden", "true");
      caseLink.appendChild(caseArrow);
      body.appendChild(caseLink);
    }
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