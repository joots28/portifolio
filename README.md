<div align="center">

# Jonathan Otiniel — Portfólio

**Desenvolvimento de sistemas · Web · APIs · Mobile**

Uma casa digital para acompanhar projetos, tecnologias e a evolução de Jonathan na jornada full-stack.

[![GitHub](https://img.shields.io/badge/GitHub-joots28-10110f?style=for-the-badge&logo=github&logoColor=64B5FF)](https://github.com/joots28)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jonathan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jonathan-otiniel-053a12290)

</div>

---

## ✦ Sobre o projeto

Portfólio pessoal desenvolvido para apresentar a jornada de **Jonathan Otiniel** em desenvolvimento de software, com uma interface editorial, visual próprio e foco em conteúdo real.

O site combina uma apresentação pessoal, projetos selecionados do GitHub, tecnologias em estudo, linha de evolução e acesso ao perfil de certificações do LinkedIn.

## Recursos

- Layout responsivo para celular, tablet e desktop.
- Identidade visual própria, com animações de entrada e efeitos sutis.
- Navegação mobile com acessibilidade por teclado.
- Filtros de projetos por área.
- Estatísticas públicas do GitHub consultadas pela API oficial.
- Cartões de projetos com links diretos, notas de estudo e detalhes recolhíveis.
- Estudo de caso do ChurchManager com arquitetura, objetivo, status e pendências documentadas.
- Currículo em formato web imprimível, com opção de salvar como PDF pelo navegador.
- Área pessoal com referências a Muay Thai, kickboxing e leitura.
- Formação na Etec — curso de Desenvolvimento de Sistemas.
- Seção de vídeos técnicos em português do Brasil, com fontes originais identificadas e reprodução incorporada.
- Easter egg interativo com contexto externo para todas as frases, incluindo links de inspiração para as frases originais.
- Preferência por movimento reduzido respeitada.
- Metadados básicos para compartilhamento e mecanismos de busca.
- Jornada full-stack expandida: lógica, fundamentos web, React, APIs com C#/.NET, SQL/MySQL, integração, testes, segurança e publicação.
- HTML, CSS e JavaScript separados, sem framework ou dependência de build.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Marcação | HTML5 semântico |
| Estilo | CSS3, Grid, Flexbox, custom properties e media queries |
| Interatividade | JavaScript moderno (vanilla) |
| Integrações | GitHub REST API e links oficiais do LinkedIn |
| Publicação | Render Static Site |

## Estrutura

\`\`\`text
portifolio/
├── index.html       # Conteúdo, projetos e estudo de caso
├── style.css        # Identidade visual, responsividade e animações
├── script.js        # Filtros, navegação e integração com GitHub
├── curriculo-jonathan.html   # Currículo web com impressão / salvar como PDF
├── curriculo.css    # Estilos responsivos e de impressão
├── curriculo.js     # Ação de impressão e ano dinâmico
├── favicon.svg      # Ícone próprio
├── assets/
│   ├── atom.svg     # Símbolo vetorial usado na marca do site
│   └── header.svg   # Arte já usada no perfil do GitHub
└── README.md        # Documentação do projeto
\`\`\`

## Currículo em PDF

Abra [curriculo-jonathan.html](curriculo-jonathan.html) e use **Imprimir / salvar em PDF**. No menu de impressão do navegador, escolha **Salvar como PDF**. O currículo contém informações conhecidas sobre formação e projetos; o ChurchManager é identificado como projeto em desenvolvimento e inclui suas limitações documentadas.

## Executar localmente

Como o projeto é estático, não é necessário instalar dependências.

1. Clone o repositório:

   \`\`\`bash
   git clone https://github.com/joots28/portifolio.git
   cd portifolio
   \`\`\`

2. Abra \`index.html\` no navegador ou inicie um servidor local:

   \`\`\`bash
   python -m http.server 5500
   \`\`\`

3. Acesse \`http://localhost:5500\`.

## Publicação no Render

Configuração prevista para um **Static Site** conectado ao repositório:

| Campo | Valor |
| --- | --- |
| Repository | \`https://github.com/joots28/portifolio\` |
| Branch | \`main\` |
| Build command | \`echo "Static site — no build step required"\` |
| Publish directory | \`.\` |

Site publicado: [jhon-otiniel-portfolio.onrender.com](https://jhon-otiniel-portfolio.onrender.com). As alterações da branch `main` são acompanhadas pelo Render para novas publicações.

## Projetos em destaque

- [ChurchMennager / ChurchManager](https://github.com/joots28/ChurchMennager) — projeto acadêmico full-stack para gestão comunitária.
- [SPIUsuarios_2DS](https://github.com/joots28/SPIUsuarios_2DS) — solução de estudos com o projeto APIUsuarios01.
- [Lanchonete](https://github.com/joots28/lanchonete) — projeto desktop em Windows Forms.
- [Estruturas condicionais](https://github.com/joots28/estruturas-condicionais) — estudos de lógica de programação.

Os projetos estão em diferentes estágios de evolução. O conteúdo do portfólio descreve o escopo conhecido sem afirmar que trabalhos em desenvolvimento estejam prontos para produção.

## Formação

- Etec — Curso de Desenvolvimento de Sistemas. A página apresenta essa experiência de estudo sem presumir data de conclusão ou título de conclusão.

## Vídeos técnicos

A seção de vídeos foi organizada em português do Brasil e reúne referências públicas do Curso em Vídeo, DevClub e Gustavo Caetano sobre fundamentos web, React com consumo de API, construção de APIs com C#/.NET/Entity Framework Core/MySQL e fundamentos relacionais. Os vídeos são materiais de terceiros, identificados com links diretos para os canais originais.


## Certificações

A fonte oficial é o [perfil de Jonathan no LinkedIn](https://www.linkedin.com/in/jonathan-otiniel-053a12290/details/certifications/). A lista individual será incorporada ao portfólio após validação dos nomes, instituições e datas, evitando publicar credenciais incorretas.

## Contato

- GitHub: [github.com/joots28](https://github.com/joots28)
- LinkedIn: [Jonathan Otiniel](https://www.linkedin.com/in/jonathan-otiniel-053a12290)
- E-mail profissional de contato: [otinieljonathan2804@gmail.com](mailto:otinieljonathan2804@gmail.com)

---

<div align="center">
Feito com intenção, curiosidade e commits reais.
</div>


## Nexus AI — assistente do portfólio

O site inclui um widget acessível com atalhos e conversa com IA para apresentar os projetos e responder dúvidas de programação.

### Arquitetura

- assistant.css e assistant.js: interface isolada do restante do site.
- server.js e package.json: API Node.js/Express para Render.
- POST /api/chat: envia o histórico recente ao modelo configurado no servidor.
- GET /health: verificação simples de disponibilidade.

### Configuração da API

No serviço Web do Render, configure as variáveis de ambiente:

- OPENAI_API_KEY: chave da API do provedor; configure apenas no painel privado do serviço, nunca no HTML, CSS, JavaScript do navegador ou GitHub.
- OPENAI_MODEL: opcional; padrão gpt-5.5.
- ALLOWED_ORIGIN: opcional; origem do site que pode chamar a API. Em produção, use https://jhon-otiniel-portfolio.onrender.com.

Sem OPENAI_API_KEY, os atalhos de conteúdo continuam disponíveis e a API informa que a conexão de IA ainda não foi configurada. O uso da API do modelo pode gerar custos conforme a conta e o modelo escolhidos.

### Segurança e privacidade

- Validação do tamanho e formato das mensagens.
- Limite simples de requisições por endereço IP.
- CORS limitado à origem do portfólio.
- A chave de API permanece no servidor.
- O histórico é mantido apenas na sessão da página; não é gravado em banco de dados pelo widget.
- Não registrar conteúdo de conversas nos logs do servidor.

### Executar localmente

1. Instale uma versão recente do Node.js.
2. Execute npm install.
3. Defina OPENAI_API_KEY no ambiente local, se quiser ativar respostas com IA.
4. Execute npm start.
5. Abra o site estático em um servidor local e configure ALLOWED_ORIGIN para essa origem.
