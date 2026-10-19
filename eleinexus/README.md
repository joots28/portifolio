# EleiNex

**Suas ideias. Informação transparente. Sua decisão.**

Portal cívico independente e apartidário, focado nas candidaturas à Presidência da República nas Eleições 2026.

## O que está implementado

- Interface responsiva para celular e computador, com modo claro/escuro.
- Fotos oficiais dos 13 presidenciáveis, creditadas ao TSE.
- Área do 2º turno com Lula (PT) e Flávio Bolsonaro (PL), baseada na página oficial do TSE.
- Área expansível com os planos dos outros 11 presidenciáveis do 1º turno.
- Destaques de propostas resumidos dentro do próprio site, organizados por assunto, com busca e filtros por macrotema.
- Referências para a página temática e o plano integral do TSE ficam abaixo das propostas de cada candidatura.
- Questionário de 10 perguntas que resume o perfil de prioridades e estima a correspondência temática entre as respostas e os planos do 2º turno.
- Links para o índice temático e para o PDF oficial de cada plano de governo.
- Seções para pesquisas, resultados, método de leitura e fontes eleitorais.
- Ferramenta separada para organizar prioridades pessoais de leitura cívica.
- Metadados de compartilhamento, favicon, manifesto web, `robots.txt` e sitemap.

## Fontes e precisão

As propostas destacadas em cada cartão são resumos de assuntos indicados no índice oficial de planos de governo do Tribunal Superior Eleitoral (TSE). Cada cartão inclui dois links de fonte primária: a página temática da candidatura e o PDF integral do plano.

Os destaques não são uma avaliação de mérito nem uma transcrição integral. Abra o documento oficial para confirmar o contexto, o texto completo e eventuais atualizações.

A comparação do questionário usa uma matriz editorial explícita, limitada aos dez temas e às duas candidaturas do 2º turno. O percentual é uma estimativa de correspondência temática, não índice oficial, pesquisa científica, previsão de desempenho ou recomendação de voto. As respostas são processadas localmente e não são enviadas ao servidor.

Fontes centrais:
- [Planos presidenciais do 2º turno — TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno)
- [Planos presidenciais do 1º turno — TSE](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026)
- [DivulgaCandContas](https://divulgacandcontas.tse.jus.br/)
- [PesqEle](https://pesqele-divulgacao.tse.jus.br/app/pesquisa/listar30dias.xhtml)
- [Resultados oficiais](https://resultados.tse.jus.br/)

## Tecnologia e privacidade

- HTML, CSS e JavaScript nativos, em `index.html`.
- Sem dependências externas nem etapa de compilação.
- Busca, filtros e questionário funcionam localmente no navegador.
- O questionário não envia nem salva respostas; o resultado desaparece ao recarregar ou sair.
- As notas de prioridades não são enviadas a uma API ou servidor.
- Não há login, anúncios ou base de dados própria.

## Edição e publicação

- Repositório e pasta: [`eleinexus/`](https://github.com/joots28/portifolio/tree/eleinexus-site/eleinexus)
- Arquivo principal: [`index.html`](https://github.com/joots28/portifolio/blob/eleinexus-site/eleinexus/index.html)
- Site: [https://eleinexus-civico.onrender.com](https://eleinexus-civico.onrender.com)

Configuração de publicação no Render:
- Branch: `eleinexus-site`
- Pasta publicada: `eleinexus`
- Comando de build: `echo "EleiNex static site ready"`
- Deploy automático: ativado para novos commits nessa branch; se demorar, solicite deploy manual no painel.

A hospedagem estática tem opção gratuita, mas sujeita aos limites de uso da plataforma. Não faça upgrade nem ative faturamento para manter-se no plano gratuito.
