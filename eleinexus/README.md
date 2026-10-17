# EleiNexus

**Suas ideias. Informação transparente. Sua decisão.**

Portal cívico independente e apartidário, desenvolvido para funcionar como site estático, responsivo e sem dependências pagas.

## O que já funciona

- Layout adaptável a computador e celular.
- Modo claro e escuro, com preferência de tema guardada localmente no navegador.
- Navegação por candidaturas, propostas, pesquisas, resultados, metodologia e fontes.
- Ferramenta para organizar prioridades cívicas, sem classificar partidos ou recomendar votos.
- Links para portais oficiais do TSE e da Câmara dos Deputados.
- Ícone, metadados para compartilhamento, manifesto web, `robots.txt` e sitemap.

## Limites importantes

Esta versão **não é uma integração automática** com os dados do TSE. Ela abre as fontes oficiais para que a pessoa confira cadastros, documentos, pesquisas e resultados atuais. Não apresenta percentuais de pesquisa nem listas locais de candidatura sem verificação.

As notas da ferramenta de prioridades são processadas na página e não são enviadas a uma API ou servidor. Não há login, anúncios, rastreadores ou base de dados própria.

## Tecnologia e edição

- HTML, CSS e JavaScript nativos, em `index.html`.
- Nenhuma dependência externa, instalação de pacotes ou etapa de compilação.
- Os metadados e os arquivos auxiliares ficam na pasta `eleinexus/`.

Para editar pelo GitHub, abra [`index.html`](https://github.com/joots28/portifolio/blob/eleinexus-site/eleinexus/index.html), use o botão de edição, faça a alteração e grave um commit na branch `eleinexus-site`.

## Publicação

O site é publicado em [https://eleinexus-civico.onrender.com](https://eleinexus-civico.onrender.com).

Configuração do serviço estático no Render:
- Branch: `eleinexus-site`
- Pasta publicada: `eleinexus`
- Comando de build: `echo "EleiNexus static site ready"`
- Deploy automático: ativado para novos commits nessa branch.

A hospedagem estática do Render tem opção gratuita, mas permanece sujeita às franquias mensais de banda e minutos de build da plataforma. Para evitar qualquer cobrança, não faça upgrade de plano nem adicione forma de pagamento sem necessidade.

## Fontes primárias incluídas

- [Tribunal Superior Eleitoral](https://www.tse.jus.br/)
- [DivulgaCandContas](https://divulgacandcontas.tse.jus.br/)
- [PesqEle](https://pesqele-divulgacao.tse.jus.br/app/pesquisa/listar30dias.xhtml)
- [Resultados oficiais](https://resultados.tse.jus.br/)
- [Dados abertos do TSE](https://dadosabertos.tse.jus.br/)
- [Dados abertos da Câmara](https://dadosabertos.camara.leg.br/)
