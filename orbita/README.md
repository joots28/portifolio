# ÓRBITA — Atlas Cósmico

Uma experiência educativa e responsiva para explorar os oito planetas do Sistema Solar.

## Abrir no navegador

A aplicação é estática: não precisa de servidor de aplicação, banco de dados, API key, Node.js ou compilação. Abra `index.html` em um navegador ou publique a pasta `orbita` em qualquer hospedagem de sites estáticos.

## Arquivos

- `index.html`: estrutura semântica, conteúdo e metadados.
- `styles.css`: estilos, responsividade, efeitos visuais e animações.
- `app.js`: catálogo científico dos planetas e interações do carrossel.
- `favicon.svg`: ícone vetorial.
  
## Controles

- Selecione qualquer planeta na faixa de navegação superior.
- Use os botões anterior/próximo ou as setas esquerda/direita do teclado.
- Em celular, deslize horizontalmente sobre a área principal do planeta.
- Na seção de escala, selecione qualquer planeta para abrir seu dossiê.

## Conteúdo e precisão

Os números são aproximados e apresentados para fins educativos. Diâmetros equatoriais, distâncias médias ao Sol, períodos orbitais e temperaturas são arredondados; a temperatura indicada varia conforme o tipo de planeta e a região medida.

Fontes recomendadas para consulta:
- NASA Solar System Exploration — https://science.nasa.gov/solar-system/planets/
- NASA Planetary Fact Sheet — https://nssdc.gsfc.nasa.gov/planetary/factsheet/

## Créditos das texturas

As texturas planetárias vêm do **Solar System Scope / INOVE**: https://ssi.solarsystemscope.com/textures/ e são distribuídas sob a licença **Creative Commons Attribution 4.0 International (CC BY 4.0)**: https://creativecommons.org/licenses/by/4.0/. As imagens são mapas visuais de textura baseados parcialmente em dados e imagens planetárias da NASA; cores e áreas sem mapeamento podem ser interpretadas/estimadas pelos autores. Consulte a fonte original para detalhes da licença e atribuição completa. Este projeto não é afiliado à NASA.

## Acessibilidade e desempenho

O projeto inclui navegação por teclado, estados de foco, descrição alternativa do planeta ativo, layout adaptável a telas pequenas e respeito à preferência `prefers-reduced-motion`. As texturas são carregadas pelo navegador a partir do provedor de origem; é necessária conexão com a internet para visualizá-las.