(() => {
  "use strict";
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

  let waiting = false;
  const knownAnswers = [
    { match: /churchmanager|church manager/i, text: "O ChurchManager é um projeto acadêmico full-stack voltado à gestão comunitária. A arquitetura estudada combina interface React/Vite, API REST em C# com ASP.NET Core e persistência relacional com MySQL/Entity Framework Core. O projeto está em desenvolvimento; confira o repositório para ver o estado e as limitações documentadas.", links: [{ label: "Abrir repositório ChurchManager", url: "https://github.com/joots28/ChurchMennager" }] },
    { match: /curr[ií]culo|cv|resume/i, text: "Você pode consultar o currículo do Jonathan na página própria do portfólio, além de conferir os projetos e tecnologias descritos.", links: [{ label: "Abrir currículo", url: "https://jhon-otiniel-portfolio.onrender.com/curriculo-jonathan.html" }] },
    { match: /linkedin|contato|contrata|recrut|oportunidade/i, text: "Para oportunidades, networking ou contato profissional, confira o LinkedIn e os canais publicados no portfólio.", links: [{ label: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-otiniel-053a12290/" }, { label: "Seção de contato", url: "https://jhon-otiniel-portfolio.onrender.com/#contato" }] },
    { match: /github|reposit[oó]rio|c[oó]digo.?fonte/i, text: "Os repositórios públicos permitem explorar os projetos e acompanhar a evolução do código. O README de cada projeto é o melhor lugar para verificar requisitos, estado atual e instruções.", links: [{ label: "GitHub de Jonathan", url: "https://github.com/joots28" }, { label: "Repositório do portfólio", url: "https://github.com/joots28/portifolio" }] },
    { match: /tecnologia|stack|linguagem|react|c#|\.net|kotlin|sql|mysql/i, text: "O portfólio destaca estudos e projetos com React, JavaScript, HTML/CSS, C#/.NET, APIs REST e SQL/MySQL, além de interesses em React Native e Kotlin. Isso descreve áreas de prática e aprendizado — não significa domínio profissional de todas as tecnologias.", links: [{ label: "Ver stack no portfólio", url: "https://jhon-otiniel-portfolio.onrender.com/#stack" }, { label: "Ver jornada Full Stack", url: "https://jhon-otiniel-portfolio.onrender.com/#jornada" }] },
    { match: /portf[oó]lio|quem [eé] o jonathan|apresente|sobre jonathan/i, text: "Jonathan Otiniel é estudante de Desenvolvimento de Sistemas na Etec e apresenta aqui projetos acadêmicos, estudos técnicos e sua evolução em desenvolvimento web, APIs e sistemas. O portfólio prioriza transparência sobre o estágio de cada projeto.", links: [{ label: "Conhecer os projetos", url: "https://jhon-otiniel-portfolio.onrender.com/#projetos" }, { label: "Abrir currículo", url: "https://jhon-otiniel-portfolio.onrender.com/curriculo-jonathan.html" }] }
  ];

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Fechar Luo IA" : "Abrir Luo IA");
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

  function localAnswer(text) {
    const entry = knownAnswers.find((item) => item.match.test(text));
    if (entry) return entry;

    if (/api rest|endpoint|http|asp\.net|back.?end|servidor|status code/i.test(text)) {
      return { text: "Uma API REST permite que sistemas troquem dados por HTTP. Em C#/.NET, uma rota recebe a requisição, valida os dados, aplica regras de negócio e devolve um status HTTP e, quando necessário, JSON. Boas práticas incluem validar entradas no servidor, usar DTOs, tratar erros sem expor segredos e testar os contratos.", links: [{ label: "Ver jornada Full Stack", url: "https://jhon-otiniel-portfolio.onrender.com/#jornada" }] };
    }
    if (/html|css|javascript|front.?end|responsiv/i.test(text)) {
      return { text: "No front-end, HTML organiza a estrutura, CSS cuida da apresentação e responsividade, e JavaScript implementa comportamento e comunicação com APIs. Em React, a interface pode ser dividida em componentes reutilizáveis que recebem props e podem gerenciar estado.", links: [{ label: "Ver stack", url: "https://jhon-otiniel-portfolio.onrender.com/#stack" }] };
    }
    if (/banco de dados|sql|mysql|relacional|select|insert|update|delete/i.test(text)) {
      return { text: "Um banco de dados relacional organiza informações em tabelas relacionadas por chaves. SQL é a linguagem usada para consultar e modificar esses dados. Por exemplo, SELECT nome FROM usuarios; lê a coluna nome da tabela usuarios. Em aplicações reais, use consultas parametrizadas e permissões mínimas para reduzir riscos de segurança.", links: [{ label: "Ver projetos", url: "https://jhon-otiniel-portfolio.onrender.com/#projetos" }] };
    }
    if (/vari[aá]vel|fun[cç][aã]o|array|la[cç]o|if\b|for\b|while\b|l[oó]gica|programa[cç][aã]o/i.test(text)) {
      return { text: "Uma boa forma de estudar programação é dividir o problema em passos pequenos: identificar entradas, definir o processamento, decidir as saídas e testar casos diferentes. Variáveis guardam valores, funções agrupam uma tarefa reutilizável, condicionais escolhem caminhos e laços repetem operações. Se você disser a linguagem e mostrar um exemplo, posso direcionar a explicação.", links: [{ label: "Ver estudos e projetos", url: "https://github.com/joots28" }] };
    }
    if (/obrigad[oa]|valeu|thanks/i.test(text)) {
      return { text: "Por nada! 💙 Se quiser, posso apresentar os projetos do Jonathan ou ajudar com os conceitos técnicos que já estão disponíveis no meu guia local.", links: [{ label: "Voltar ao portfólio", url: "https://jhon-otiniel-portfolio.onrender.com/" }] };
    }
    return { text: "Sou a Luo IA, assistente gratuita do portfólio! Minha versão atual responde usando um guia local, sem API paga nem envio da sua pergunta a um serviço externo. Posso apresentar o portfólio, o currículo, o GitHub, o ChurchManager e explicar conceitos básicos de front-end, APIs REST, SQL e lógica de programação. Para perguntas muito específicas ou assuntos fora desse guia, ainda não consigo gerar uma resposta livre como um chatbot de IA.", links: [{ label: "Conhecer o portfólio", url: "https://jhon-otiniel-portfolio.onrender.com/#projetos" }, { label: "GitHub", url: "https://github.com/joots28" }] };
  }

  function ask(rawText) {
    const text = rawText.trim();
    if (!text || waiting) return;
    if (intro) intro.hidden = true;
    if (shortcuts) shortcuts.hidden = true;
    addMessage("user", text);
    const answer = localAnswer(text);
    addMessage("assistant", answer.text, answer.links || []);
    input.value = "";
    input.style.height = "auto";
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  closeButton?.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !panel.hidden) setOpen(false); });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    if (value.trim()) ask(value);
  });
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 100) + "px";
  });
  shortcuts?.querySelectorAll("[data-nexus-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(true);
      ask(button.dataset.nexusPrompt || "");
    });
  });
})();