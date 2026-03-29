# Devweb

Desenvolvam uma aplicação de catálogo de produtos em uma estrutura de arquivos tripartida (HTML, CSS e JS) que permita ao usuário gerenciar uma lista de itens em tempo real; a interface deve conter um formulário para entrada de novos dados (nome, categoria e preço), uma área de exibição que gere automaticamente 'cards' ou linhas de tabela para cada item cadastrado, e uma seção de inteligência de dados que apresente métricas calculadas automaticamente — como o valor total do inventário ou o preço médio dos produtos — atualizando-se instantaneamente a cada nova inserção ou remoção de item .

Checklist para auxiliar o desenvolvimento do exercício:

## 🏗️ Estrutura e Organização

[ x ] Modularidade: O projeto deve ser segmentado em arquivos distintos de acordo com sua responsabilidade (conteúdo, apresentação e comportamento).

[ ] Semântica: O documento base deve utilizar elementos que descrevam o significado do conteúdo, facilitando a acessibilidade e a leitura por máquinas.

[ ] Vinculação: Os recursos externos devem ser referenciados de forma que o carregamento da página seja otimizado e funcional.

[ ] Área de Injeção: Deve existir um local identificado no código para que novos conteúdos sejam inseridos via programação, sem estarem fixos no código-fonte original.

## 🎨 Interface e Experiência (UI/UX)

[ ] Adaptabilidade: A interface deve organizar os elementos de forma lógica, aproveitando o espaço disponível de acordo com a resolução da tela.

[ ] Hierarquia Visual: Utilize pesos, tamanhos e cores para que o usuário identifique rapidamente o que é um rótulo, o que é um dado inserido e o que é uma métrica de resumo.

[ ] Feedback de Estado: O usuário deve perceber visualmente quando um elemento é interativo ou quando um campo de entrada está selecionado.

[ ] Consistência de Componentes: Itens gerados dinamicamente devem manter o mesmo padrão visual e estrutural entre si.

## 🧠 Comportamento e Lógica

[ ] Captura de Fluxo: O sistema deve interceptar a ação do usuário ao enviar dados, impedindo que o comportamento padrão do navegador interrompa a execução do script.

[ ] Gerenciamento de Dados: Utilize uma estrutura que permita agrupar múltiplas informações relacionadas (ex: nome e valor) em uma única unidade lógica de armazenamento.

[ ] Renderização Dinâmica: A lista de itens na tela deve ser atualizada automaticamente sempre que a coleção de dados interna for modificada.

[ ] Processamento de Métricas: O sistema deve realizar cálculos matemáticos automáticos baseados nos dados inseridos, refletindo os resultados em tempo real na interface.

[ ] Gestão de Ciclo de Vida: Implemente uma forma de remover registros existentes, garantindo que tanto a memória do sistema quanto a interface visual permaneçam sincronizadas.

## 🛡️ Robustez e Refinamento

[ ] Integridade de Dados: O sistema deve ignorar ou alertar entradas que não cumpram os requisitos mínimos (como campos vazios ou valores inconsistentes).

[ ] Reset de Estado: Após uma operação bem-sucedida, a interface de entrada deve retornar ao seu estado inicial para facilitar uma nova interação.

[ ] Qualidade de Código: A lógica deve ser organizada de forma que nomes de variáveis e funções expliquem sua própria finalidade.
