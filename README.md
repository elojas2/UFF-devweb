# Devweb

Desenvolvam uma aplicação de catálogo de produtos em uma estrutura de arquivos tripartida (HTML, CSS e JS) que permita ao usuário gerenciar uma lista de itens em tempo real; a interface deve conter um formulário para entrada de novos dados (nome, categoria e preço), uma área de exibição que gere automaticamente 'cards' ou linhas de tabela para cada item cadastrado, e uma seção de inteligência de dados que apresente métricas calculadas automaticamente — como o valor total do inventário ou o preço médio dos produtos — atualizando-se instantaneamente a cada nova inserção ou remoção de item.

## Todo list

- [x] Formulario
  - [x] Nome produto
  - [x] Categoria produto
  - [x] Valor produto

- [x] Card
  - [x] Exibir nome produto
  - [x] Exibir categoria produto
  - [x] Exibir valor produto

- [x] Inteligencia de dados (métricas)
  - [x] Valor total dos produtos
  - [x] Preço médio

Checklist para auxiliar o desenvolvimento do exercício:

## 🏗️ Estrutura e Organização

[ x ] Modularidade: O projeto deve ser segmentado em arquivos distintos de acordo com sua responsabilidade (conteúdo, apresentação e comportamento).

[ x ] Semântica: O documento base deve utilizar elementos que descrevam o significado do conteúdo, facilitando a acessibilidade e a leitura por máquinas.

[ x ] Vinculação: Os recursos externos devem ser referenciados de forma que o carregamento da página seja otimizado e funcional.

[ x ] Área de Injeção: Deve existir um local identificado no código para que novos conteúdos sejam inseridos via programação, sem estarem fixos no código-fonte original.

## 🎨 Interface e Experiência (UI/UX)

[ x ] Adaptabilidade: A interface deve organizar os elementos de forma lógica, aproveitando o espaço disponível de acordo com a resolução da tela.

[ x ] Hierarquia Visual: Utilize pesos, tamanhos e cores para que o usuário identifique rapidamente o que é um rótulo, o que é um dado inserido e o que é uma métrica de resumo.

[ x ] Feedback de Estado: O usuário deve perceber visualmente quando um elemento é interativo ou quando um campo de entrada está selecionado.

[ x ] Consistência de Componentes: Itens gerados dinamicamente devem manter o mesmo padrão visual e estrutural entre si.

## 🧠 Comportamento e Lógica

[ x ] Captura de Fluxo: O sistema deve interceptar a ação do usuário ao enviar dados, impedindo que o comportamento padrão do navegador interrompa a execução do script.

[ x ] Gerenciamento de Dados: Utilize uma estrutura que permita agrupar múltiplas informações relacionadas (ex: nome e valor) em uma única unidade lógica de armazenamento.

[ x ] Renderização Dinâmica: A lista de itens na tela deve ser atualizada automaticamente sempre que a coleção de dados interna for modificada.

[ x ] Processamento de Métricas: O sistema deve realizar cálculos matemáticos automáticos baseados nos dados inseridos, refletindo os resultados em tempo real na interface.

[ x ] Gestão de Ciclo de Vida: Implemente uma forma de remover registros existentes, garantindo que tanto a memória do sistema quanto a interface visual permaneçam sincronizadas.

## 🛡️ Robustez e Refinamento

[ x ] Integridade de Dados: O sistema deve ignorar ou alertar entradas que não cumpram os requisitos mínimos (como campos vazios ou valores inconsistentes).

[ x ] Reset de Estado: Após uma operação bem-sucedida, a interface de entrada deve retornar ao seu estado inicial para facilitar uma nova interação.

[ x ] Qualidade de Código: A lógica deve ser organizada de forma que nomes de variáveis e funções expliquem sua própria finalidade.
