(() => {
  "use strict";
  const API_URL = "https://nexus-portfolio-api.onrender.com/api/chat";
  const launcher = document.getElementById("nexusLauncher");
  const panel = document.getElementById("nexusPanel");
  const closeButton = document.getElementById("nexusClose");
  const form = document.getElementById("nexusForm");
  const input = document.getElementById("nexusInput");
  const sendButton = document.getElementById("nexusSend");
  const messages = document.getElementById("nexusMessages");
  const intro = document.getElementById("nexusIntro");
  const shortcuts = document.getElementById("nexusShortcuts");
  if (!launcher || !panel || !form || !input || !messages) return;
  const history = [];
  let waiting = false;
  const knownAnswers = [
    { match: /churchmanager|church manager/i, text: "O ChurchManager é um projeto acadêmico full-stack voltado à gestão comunitária. A arquitetura estudada combina interface React/Vite, API REST em C# com ASP.NET Core e persistência relacional com MySQL/Entity Framework Core. O projeto está em desenvolvimento; confira o repositório para ver o estado e as limitações documentadas.", links: [{ label: "Abrir repositório ChurchManager", url: "https://github.com/joots28/ChurchMennager" }] },
    { match: /curr[ií]culo|cv|resume/i, text: "Você pode consultar o currículo do Jonathan na página própria do portfólio, além de conferir os projetos e tecnologias descritos.", links: [{ label: "Abrir currículo", url: "https://jhon-otiniel-portfolio.onrender.com/curriculo-jonathan.html" }] },
    { match: /linkedin|contato|contrata|recrut|oportunidade/i, text: "Para oportunidades, networking ou contato profissional, confira o LinkedIn e os canais publicados no portfólio.", links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-otiniel-053a12290/" }, { label: "Seção de contato", url: "https://jhon-otiniel-portfolio.onrender.com/#contato" }] },
    { match: /github|reposit[oó]rio|c[oó]digo.?fonte/i, text: "Os repositórios públicos permitem explorar os projetos e acompanhar a evolução do código. O README de cada projeto é o melhor lugar para verificar requisitos, estado atual e instruções.", links: [{ label: "GitHub de Jonathan", url: "https://github.com/joots28" }, { label: "Repositório do portfólio", url: "https://github.com/joots28/portifolio" }] },
    { match: /tecnologia|stack|linguagem|react|c#|\.net|kotlin|sql|mysql|javascript/i, text: "O portfólio destaca estudos e projetos com React, JavaScript, HTML/CSS, C#/.NET, APIs REST e SQL/MySQL, além de interesses em React Native e Kotlin. Isso descreve áreas de prática e aprendizado — não significa domínio profissional de todas as tecnologias.", links: [{ label: "Ver stack no portfólio", url: "https://jhon-otiniel-portfolio.onrender.com/#stack" }, { label: "Ver jornada Full Stack", url: "https://jhon-otiniel-portfolio.onrender.com/#jornada" }] },
    { match: /portf[oó]lio|quem [eé] o jonathan|apresente|sobre jonathan/i, text: "Jonathan Otiniel é estudante de Desenvolvimento de Sistemas na Etec e apresenta aqui projetos acadêmicos, estudos técnicos e sua evolução em desenvolvimento web, APIs e sistemas. O portfólio prioriza transparência sobre o estágio de cada projeto.", links: [{ label: "Conhecer os projetos", url: "https://jhon-otiniel-portfolio.onrender.com/#projetos" }, { label: "Abrir currículo", url: "https://jhon-otiniel-portfolio.onrender.com/curriculo-jonathan.html" }] }
  ];
  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Fechar assistente Nexus" : "Abrir assistente Nexus");
    if (open) window.setTimeout(() => input.focus(), 80);
    else launcher.focus();
  }
  function addMessage(role, text, links = [], extraClass = "") {
    const bubble = document.createElement("div");
    bubble.className = "nexus-message nexus-message--" + role + (extraClass ? " " + extraClass : "");
    bubble.textContent = text;
    links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label + " ↗";
      bubble.appendChild(document.createElement("br"));
      bubble.appendChild(anchor);
    });
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }
  function setBusy(busy) {
    waiting = busy;
    sendButton.disabled = busy;
    input.disabled = busy;
    sendButton.setAttribute("aria-label", busy ? "Aguarde a resposta" : "Enviar pergunta");
  }
  function localAnswer(text) {
    const entry = knownAnswers.find((item) => item.match.test(text));
    if (entry) return entry;
    if (/api rest|endpoint|http|asp\.net|back.?end|servidor/i.test(text)) {
      return { text: "Uma API REST permite que sistemas troquem dados por HTTP. No contexto de C#/.NET, uma rota recebe a requisição, valida os dados, aplica regras de negócio e devolve um status HTTP e, quando necessário, JSON. É importante validar entradas no servidor, usar DTOs, tratar erros sem expor segredos e testar os contratos.", links: [{ label: "Ver jornada Full Stack", url: "https://jhon-otiniel-portfolio.onrender.com/#jornada" }] };
    }
    if (/html|css|javascript|front.?end|responsiv/i.test(text)) {
      return { text: "No front-end, HTML organiza a estrutura, CSS define apresentação e responsividade, e JavaScript implementa comportamento e comunicação com APIs. Em React, a interface pode ser dividida em componentes reutilizáveis com estado e props.", links: [{ label: "Ver stack", url: "https://jhon-otiniel-portfolio.onrender.com/#stack" }] };
    }
    return null;
  }
  async function ask(rawText) {
    const text = rawText.trim();
    if (!text || waiting) return;
    if (intro) intro.hidden = true;
    if (shortcuts) shortcuts.hidden = true;
    addMessage("user", text);
    history.push({ role: "user", content: text });
    const local = localAnswer(text);
    if (local) {
      addMessage("assistant", local.text, local.links || []);
      history.push({ role: "assistant", content: local.text });
      input.value = "";
      input.style.height = "auto";
      return;
    }
    setBusy(true);
    const typing = addMessage("assistant", "Pensando na melhor resposta…", [], "is-typing");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-8) }),
        signal: AbortSignal.timeout(35000)
      });
      const payload = await response.json().catch(() => ({}));
      typing.remove();
      if (!response.ok) {
        const message = response.status === 503
          ? "Os atalhos continuam funcionando, mas a conexão de IA ainda precisa ser configurada no servidor. Tente uma das perguntas rápidas ou consulte os links do portfólio."
          : (payload.error || "Não consegui responder agora. Tente novamente em instantes.");
        addMessage("assistant", message, [], "nexus-message--error");
        return;
      }
      const answer = typeof payload.reply === "string" ? payload.reply : "Não recebi uma resposta válida. Tente novamente.";
      addMessage("assistant", answer);
      history.push({ role: "assistant", content: answer });
      while (history.length > 8) history.shift();
      input.value = "";
      input.style.height = "auto";
    } catch (error) {
      typing.remove();
      addMessage("assistant", "Não consegui alcançar o serviço agora. Os atalhos locais continuam disponíveis; tente novamente daqui a pouco.", [], "nexus-message--error");
    } finally {
      setBusy(false);
      input.focus();
    }
  }
  launcher.addEventListener("click", () => setOpen(panel.hidden));
  closeButton?.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !panel.hidden) setOpen(false); });
  form.addEventListener("submit", (event) => { event.preventDefault(); const value = input.value; if (value.trim()) ask(value); });
  input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = Math.min(input.scrollHeight, 100) + "px"; });
  shortcuts?.querySelectorAll("[data-nexus-prompt]").forEach((button) => {
    button.addEventListener("click", () => { setOpen(true); ask(button.dataset.nexusPrompt || ""); });
  });
})();