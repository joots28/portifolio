const PLANETS = [
  {
    name:"Mercúrio", english:"Mercury", slug:"mercury", index:"01", type:"PLANETA ROCHOSO",
    tagline:"Um pequeno mundo esculpido pelo Sol.",
    description:"O menor planeta do Sistema Solar tem uma superfície antiga, marcada por crateras. Quase sem atmosfera, enfrenta variações extremas de temperatura.",
    diameter:"4.879", distance:"57,9", distanceNote:"0,39 unidades astronômicas", year:"88", yearUnit:"dias", day:"58,6 dias",
    kind:"Rochoso", temp:"−180 a +430 °C", tempNote:"faixa aproximada na superfície", atmosphere:"Exosfera muito tênue", atmosphereNote:"oxigênio, sódio, hidrogênio e hélio",
    fact:"Uma rotação muito lenta", factNote:"o dia solar dura cerca de 176 dias terrestres",
    copy:"Mercúrio é um planeta denso, rico em metais, com grandes diferenças entre o lado iluminado e o lado noturno. Apesar de estar perto do Sol, não é o planeta mais quente: esse posto é de Vênus.",
    tags:["Crateras antigas","Núcleo metálico","Sem luas"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_mercury.jpg", color:"#b1a394", glow:"rgba(183,153,125,.22)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · MERCÚRIO",
    curiosity:"Mercúrio completa três rotações a cada duas órbitas ao redor do Sol."
  },
  {
    name:"Vênus", english:"Venus", slug:"venus", index:"02", type:"PLANETA ROCHOSO",
    tagline:"Um inferno dourado sob nuvens densas.",
    description:"Vênus é envolvido por uma atmosfera espessa, rica em dióxido de carbono. O intenso efeito estufa faz dele o planeta mais quente do Sistema Solar.",
    diameter:"12.104", distance:"108,2", distanceNote:"0,72 unidades astronômicas", year:"225", yearUnit:"dias", day:"243 dias",
    kind:"Rochoso", temp:"≈ +464 °C", tempNote:"média da superfície", atmosphere:"Dióxido de carbono", atmosphereNote:"nuvens de ácido sulfúrico",
    fact:"Gira em sentido retrógrado", factNote:"sua rotação é muito lenta",
    copy:"Sob nuvens brilhantes, Vênus guarda uma superfície vulcânica com planícies e montanhas. A pressão atmosférica em sua superfície é esmagadora em comparação com a terrestre.",
    tags:["Efeito estufa extremo","Vulcanismo","Sem luas"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_venus_surface.jpg", color:"#d3a36d", glow:"rgba(227,167,98,.2)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · VÊNUS",
    curiosity:"Em Vênus, um dia sideral dura mais do que seu ano."
  },
  {
    name:"Terra", english:"Earth", slug:"earth", index:"03", type:"PLANETA ROCHOSO",
    tagline:"O único mundo que conhecemos onde a vida floresce.",
    description:"Um planeta dinâmico, com oceanos líquidos, continentes em movimento e uma atmosfera que protege uma extraordinária diversidade de vida.",
    diameter:"12.742", distance:"149,6", distanceNote:"1 unidade astronômica", year:"365,25", yearUnit:"dias", day:"23h 56m",
    kind:"Rochoso", temp:"≈ +15 °C", tempNote:"média global aproximada", atmosphere:"Nitrogênio e oxigênio", atmosphereNote:"atmosfera de superfície",
    fact:"Um sistema climático ativo", factNote:"a atmosfera e os oceanos redistribuem calor",
    copy:"A Terra tem água líquida abundante na superfície e uma atmosfera rica em nitrogênio e oxigênio. Seu campo magnético ajuda a desviar partículas carregadas vindas do Sol.",
    tags:["Água líquida","Campo magnético","Vida conhecida"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_earth_daymap.jpg", color:"#2d76db", glow:"rgba(53,128,255,.25)", clouds:"https://ssi.solarsystemscope.com/textures/download/2k_earth_clouds.jpg",
    caption:"TEXTURA PLANETÁRIA · TERRA",
    curiosity:"A Terra não é uma esfera perfeita: sua rotação a deixa ligeiramente achatada nos polos."
  },
  {
    name:"Marte", english:"Mars", slug:"mars", index:"04", type:"PLANETA ROCHOSO",
    tagline:"Um deserto frio com um passado aquático.",
    description:"O Planeta Vermelho abriga vulcões gigantes, vales extensos e sinais geológicos de que a água líquida já fluiu em sua superfície.",
    diameter:"6.779", distance:"227,9", distanceNote:"1,52 unidades astronômicas", year:"687", yearUnit:"dias", day:"24h 37m",
    kind:"Rochoso", temp:"≈ −65 °C", tempNote:"média aproximada da superfície", atmosphere:"Dióxido de carbono", atmosphereNote:"atmosfera fina e fria",
    fact:"Tem o maior vulcão conhecido", factNote:"Olympus Mons se ergue cerca de 22 km",
    copy:"Marte conserva canais, deltas e minerais que se formam na presença de água. Missões robóticas estudam suas rochas e clima para reconstruir sua história e avaliar sua habitabilidade passada.",
    tags:["Gelo de água","Olympus Mons","Duas luas"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_mars.jpg", color:"#bf6545", glow:"rgba(220,91,55,.22)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · MARTE",
    curiosity:"Um dia marciano é apenas um pouco mais longo que um dia terrestre."
  },
  {
    name:"Júpiter", english:"Jupiter", slug:"jupiter", index:"05", type:"GIGANTE GASOSO",
    tagline:"Um gigante que quase parece um sistema próprio.",
    description:"Maior planeta do Sistema Solar, Júpiter apresenta faixas de nuvens, tempestades duradouras e uma coleção fascinante de luas.",
    diameter:"139.820", distance:"778,6", distanceNote:"5,20 unidades astronômicas", year:"11,86", yearUnit:"anos terrestres", day:"9h 56m",
    kind:"Gigante gasoso", temp:"≈ −110 °C", tempNote:"topo das nuvens, aproximadamente", atmosphere:"Hidrogênio e hélio", atmosphereNote:"atmosfera profunda, sem superfície sólida definida",
    fact:"A Grande Mancha Vermelha", factNote:"uma tempestade observada há séculos",
    copy:"Júpiter é formado principalmente por hidrogênio e hélio. Seu intenso campo magnético e suas luas — incluindo Europa, com um oceano sob o gelo — fazem dele um laboratório natural extraordinário.",
    tags:["Grande Mancha Vermelha","Campo magnético","Luas geladas"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_jupiter.jpg", color:"#c59776", glow:"rgba(206,151,105,.23)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · JÚPITER",
    curiosity:"Júpiter gira tão rapidamente que completa um dia em aproximadamente dez horas."
  },
  {
    name:"Saturno", english:"Saturn", slug:"saturn", index:"06", type:"GIGANTE GASOSO",
    tagline:"Uma joia cósmica cercada por anéis de gelo.",
    description:"Seus anéis majestosos são formados por inúmeros fragmentos de gelo e rocha. Sob as nuvens, Saturno é um gigante gasoso de baixa densidade média.",
    diameter:"116.460", distance:"1,43 bi", distanceNote:"9,58 unidades astronômicas", year:"29,45", yearUnit:"anos terrestres", day:"≈ 10h 33m",
    kind:"Gigante gasoso", temp:"≈ −140 °C", tempNote:"topo das nuvens, aproximadamente", atmosphere:"Hidrogênio e hélio", atmosphereNote:"bandas atmosféricas e ventos intensos",
    fact:"Os anéis são vastos e muito finos", factNote:"a espessura típica é minúscula perto da largura",
    copy:"Saturno possui um sistema complexo de anéis e luas. Titã tem lagos de hidrocarbonetos na superfície; Encélado lança jatos de água e gelo, revelando um oceano sob sua crosta.",
    tags:["Anéis de gelo","Lua Titã","Encélado"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_saturn.jpg", color:"#d2b98e", glow:"rgba(218,185,128,.22)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · SATURNO",
    curiosity:"A densidade média de Saturno é menor que a da água — uma comparação física, não um cenário real de flutuação."
  },
  {
    name:"Urano", english:"Uranus", slug:"uranus", index:"07", type:"GIGANTE DE GELO",
    tagline:"Um mundo azul-esverdeado que gira quase de lado.",
    description:"Urano tem uma inclinação axial extrema, estações muito longas e uma atmosfera fria. Sua composição interna inclui substâncias voláteis como água, amônia e metano.",
    diameter:"50.724", distance:"2,87 bi", distanceNote:"19,2 unidades astronômicas", year:"84", yearUnit:"anos terrestres", day:"17h 14m",
    kind:"Gigante de gelo", temp:"≈ −195 °C", tempNote:"temperaturas atmosféricas aproximadas", atmosphere:"Hidrogênio, hélio e metano", atmosphereNote:"o metano contribui para a cor azul-esverdeada",
    fact:"Seu eixo é extremamente inclinado", factNote:"o planeta parece girar de lado",
    copy:"A inclinação de Urano é de cerca de 98 graus. Essa geometria incomum provoca temporadas de luz solar muito diferentes das que experimentamos na Terra.",
    tags:["Eixo inclinado","Anéis discretos","Atmosfera gelada"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_uranus.jpg", color:"#8bd8dd", glow:"rgba(96,220,229,.2)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · URANO",
    curiosity:"Uma única órbita de Urano dura 84 anos terrestres."
  },
  {
    name:"Netuno", english:"Neptune", slug:"neptune", index:"08", type:"GIGANTE DE GELO",
    tagline:"Um planeta distante esculpido por ventos extremos.",
    description:"Netuno orbita muito longe do Sol. Sua atmosfera azul profunda contém sistemas de tempestades e ventos que estão entre os mais rápidos medidos em planetas.",
    diameter:"49.244", distance:"4,50 bi", distanceNote:"30,1 unidades astronômicas", year:"164,8", yearUnit:"anos terrestres", day:"16h 6m",
    kind:"Gigante de gelo", temp:"≈ −200 °C", tempNote:"temperaturas atmosféricas aproximadas", atmosphere:"Hidrogênio, hélio e metano", atmosphereNote:"camadas atmosféricas muito frias",
    fact:"Foi identificado por cálculos", factNote:"sua descoberta confirmou previsões matemáticas",
    copy:"Netuno foi localizado em 1846 após previsões baseadas em perturbações na órbita de Urano. A Voyager 2 continua sendo a única sonda a ter visitado o planeta de perto.",
    tags:["Ventos intensos","Anéis tênues","Tritão"],
    image:"https://ssi.solarsystemscope.com/textures/download/2k_neptune.jpg", color:"#436ce2", glow:"rgba(64,100,247,.24)", clouds:"",
    caption:"TEXTURA PLANETÁRIA · NETUNO",
    curiosity:"Netuno leva cerca de 165 anos terrestres para completar uma órbita ao redor do Sol."
  }
];

const elements = {
  nav: document.getElementById("planet-nav"),
  stage: document.getElementById("planet-stage"),
  system: document.getElementById("planet-system"),
  globe: document.getElementById("planet-globe"),
  clouds: document.getElementById("planet-clouds"),
  name: document.getElementById("planet-name"),
  tagline: document.getElementById("planet-tagline"),
  description: document.getElementById("planet-description"),
  type: document.getElementById("planet-type"),
  contentNumber: document.getElementById("content-number"),
  topIndex: document.getElementById("top-index"),
  currentCount: document.getElementById("current-count"),
  diameter: document.getElementById("fact-diameter"),
  distance: document.getElementById("fact-distance"),
  distanceNote: document.getElementById("fact-distance-note"),
  year: document.getElementById("fact-year"),
  day: document.getElementById("fact-day"),
  caption: document.getElementById("visual-caption"),
  detailIndex: document.getElementById("detail-index"),
  detailTitle: document.getElementById("detail-title"),
  detailCopy: document.getElementById("detail-copy"),
  detailTags: document.getElementById("detail-tags"),
  metricType: document.getElementById("metric-type"),
  metricTemp: document.getElementById("metric-temp"),
  metricTempNote: document.getElementById("metric-temp-note"),
  metricAtmosphere: document.getElementById("metric-atmosphere"),
  metricAtmosphereNote: document.getElementById("metric-atmosphere-note"),
  metricFact: document.getElementById("metric-fact"),
  metricFactNote: document.getElementById("metric-fact-note"),
  prev: document.getElementById("previous-planet"),
  next: document.getElementById("next-planet"),
  scale: document.getElementById("scale-planets"),
  back: document.getElementById("back-to-planets")
};

let activeIndex = 2;
let pointerStartX = null;
let pointerStartY = null;

function pad(number) {
  return String(number).padStart(2, "0");
}

function setText(element, value) {
  if (element) element.textContent = value;
}

function updatePlanet(index, moveFocus) {
  const nextIndex = (index + PLANETS.length) % PLANETS.length;
  activeIndex = nextIndex;
  const planet = PLANETS[activeIndex];

  elements.system.dataset.planet = planet.slug;
  elements.system.style.setProperty("--planet-color", planet.color);
  elements.system.style.setProperty("--planet-glow", planet.glow);
  elements.globe.style.backgroundImage = 'url("' + planet.image + '"), radial-gradient(ellipse at 28% 23%, rgba(255,255,255,.5), ' + planet.color + ' 34%, #101629 100%)';
  elements.globe.style.backgroundSize = "200% 100%, 100% 100%";
  elements.globe.style.backgroundPosition = "50% center, center";
  elements.globe.setAttribute("aria-label", "Representação texturizada de " + planet.name + ".");
  if (planet.clouds) {
    elements.clouds.style.backgroundImage = 'url("' + planet.clouds + '")';
    elements.clouds.style.opacity = ".19";
  } else {
    elements.clouds.style.backgroundImage = "none";
    elements.clouds.style.opacity = "0";
  }

  setText(elements.name, planet.name);
  const titleDot = document.createElement("span");
  titleDot.className = "title-period";
  titleDot.textContent = ".";
  elements.name.appendChild(titleDot);
  setText(elements.tagline, planet.tagline);
  setText(elements.description, planet.description);
  setText(elements.type, planet.type);
  setText(elements.contentNumber, planet.index + " — " + planet.name.toLocaleUpperCase("pt-BR"));
  setText(elements.topIndex, planet.index + " / 08");
  setText(elements.currentCount, planet.index);
  setText(elements.diameter, planet.diameter);
  elements.diameter.appendChild(document.createTextNode(" "));
  const diameterUnit = document.createElement("small");
  diameterUnit.textContent = "km";
  elements.diameter.appendChild(diameterUnit);
  setText(elements.distance, planet.distance);
  elements.distance.appendChild(document.createTextNode(" "));
  const distanceUnit = document.createElement("small");
  distanceUnit.textContent = "mi km";
  elements.distance.appendChild(distanceUnit);
  setText(elements.distanceNote, planet.distanceNote);
  setText(elements.year, planet.year);
  elements.year.appendChild(document.createTextNode(" "));
  const yearUnit = document.createElement("small");
  yearUnit.textContent = planet.yearUnit;
  elements.year.appendChild(yearUnit);
  setText(elements.day, planet.day);
  setText(elements.caption, planet.caption);
  setText(elements.detailIndex, "DOSSIÊ " + planet.index + ".08");
  const detailTitles = ["Um mundo de extremos","Nuvens e pressão","Nossa casa azul","Um passado aquático","Um sistema em miniatura","Uma joia de gelo","Um eixo fora do comum","A fronteira azul"];
  setText(elements.detailTitle, detailTitles[activeIndex]);
  setText(elements.detailCopy, planet.copy);
  elements.detailTags.replaceChildren();
  planet.tags.forEach(function(tag) {
    const chip = document.createElement("span");
    chip.textContent = tag;
    elements.detailTags.appendChild(chip);
  });
  setText(elements.metricType, planet.kind);
  setText(elements.metricTemp, planet.temp);
  setText(elements.metricTempNote, planet.tempNote);
  setText(elements.metricAtmosphere, planet.atmosphere);
  setText(elements.metricAtmosphereNote, planet.atmosphereNote);
  setText(elements.metricFact, planet.fact);
  setText(elements.metricFactNote, planet.factNote);
  const navButtons = elements.nav.querySelectorAll("[data-planet]");
  navButtons.forEach(function(button, buttonIndex) {
    const selected = buttonIndex === activeIndex;
    button.classList.toggle("is-active", selected);
    if (selected) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  elements.scale.querySelectorAll("[data-planet]").forEach(function(button, buttonIndex) {
    button.classList.toggle("is-selected", buttonIndex === activeIndex);
    if (buttonIndex === activeIndex) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  elements.system.classList.remove("is-changing");
  void elements.system.offsetWidth;
  elements.system.classList.add("is-changing");
  window.setTimeout(function(){ elements.system.classList.remove("is-changing"); }, 620);

  const selectedTab = elements.nav.querySelector('[data-planet="' + activeIndex + '"]');
  if (selectedTab && moveFocus) selectedTab.focus({ preventScroll: true });
  if (selectedTab && selectedTab.scrollIntoView) {
    selectedTab.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "nearest" });
  }
  document.title = "ÓRBITA — " + planet.name + " | Sistema Solar";
  document.documentElement.style.setProperty("--planet-color", planet.color);
}

elements.nav.addEventListener("click", function(event) {
  const button = event.target.closest("[data-planet]");
  if (button) updatePlanet(Number(button.dataset.planet), false);
});
elements.scale.addEventListener("click", function(event) {
  const button = event.target.closest("[data-planet]");
  if (button) {
    updatePlanet(Number(button.dataset.planet), false);
    document.getElementById("explorar").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
elements.prev.addEventListener("click", function(){ updatePlanet(activeIndex - 1, false); });
elements.next.addEventListener("click", function(){ updatePlanet(activeIndex + 1, false); });
elements.back.addEventListener("click", function(){
  document.getElementById("explorar").scrollIntoView({ behavior: "smooth", block: "start" });
  updatePlanet(activeIndex + 1, false);
});

document.addEventListener("keydown", function(event) {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const tag = event.target && event.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
  if (event.key === "ArrowLeft") { event.preventDefault(); updatePlanet(activeIndex - 1, false); }
  if (event.key === "ArrowRight") { event.preventDefault(); updatePlanet(activeIndex + 1, false); }
});

elements.stage.addEventListener("pointerdown", function(event) {
  if (event.target.closest("button, a")) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});
elements.stage.addEventListener("pointerup", function(event) {
  if (pointerStartX === null || pointerStartY === null) return;
  const dx = event.clientX - pointerStartX;
  const dy = event.clientY - pointerStartY;
  pointerStartX = null;
  pointerStartY = null;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
  updatePlanet(activeIndex + (dx < 0 ? 1 : -1), false);
});
elements.stage.addEventListener("pointercancel", function() {
  pointerStartX = null;
  pointerStartY = null;
});

PLANETS.forEach(function(planet, index) {
  if (index === activeIndex) return;
  const preload = new Image();
  preload.decoding = "async";
  preload.src = planet.image;
  if (planet.clouds) {
    const cloudPreload = new Image();
    cloudPreload.decoding = "async";
    cloudPreload.src = planet.clouds;
  }
});
updatePlanet(activeIndex, false);