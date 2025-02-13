# Desafio Challenge amigo secreto

## Objetivo do Desafio
O principal objetivo deste desafio é desenvolver habilidades em lógica de programação. Para isso, foi fornecido o HTML e CSS já preparados, permitindo que eu foque exclusivamente na implementação da lógica do código JavaScript. Durante este desafio, apliquei conceitos-chave como:

- Funções
- Arrays
- Condicionais
- Variáveis

Dessa forma, o foco será na resolução de problemas e no aprimoramento do raciocínio lógico, sem a necessidade de se preocupar com a estrutura visual do projeto.

## Interação do Projeto
A interface do projeto permite uma interação intuitiva para realizar o sorteio do Amigo Secreto:
1. **Adição de participantes:** O usuário insere os nomes dos participantes em um campo de entrada.
2. **Início do sorteio:** Após adicionar todos os participantes, o usuário clica em um botão para realizar o sorteio.
3. **Exibição dos resultados:** O sistema processa os nomes e exibe na tela os pares de Amigo Secreto.
4. **Opção de reiniciar:** O usuário pode optar por reiniciar o sorteio e inserir novos participantes, repetindo o processo.

A interação acontece de maneira dinâmica, sem necessidade de recarregar a página, tornando a experiência fluida e eficiente.

## Importância do README
O README é um elemento chave em qualquer projeto de desenvolvimento, pois fornece uma descrição clara e detalhada do propósito, estrutura e uso do código. Quando você participa de um processo seletivo, um README bem estruturado é essencial para comunicar como utilizar o projeto.

Este arquivo, com extensão `.md` (Markdown), é o ponto de referência inicial para qualquer pessoa que queira entender e trabalhar com seu código.

## Instalação
1. Clone este repositório em sua máquina:
   ```bash
   git clone https://github.com/leogonzaga82/amigo-secreto.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd desafio-logica
   ```
3. Nenhuma instalação adicional é necessária, pois o projeto utiliza apenas HTML, CSS e JavaScript puro.

## Dependências
Este projeto não possui dependências externas, pois foi desenvolvido utilizando apenas tecnologias nativas do navegador:
- HTML
- CSS
- JavaScript

## Como Executar o Projeto
1. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão como "Live Server" no VS Code para execução local.
2. Certifique-se de que o console do navegador está aberto para visualizar mensagens e testes do código JavaScript.

## Possíveis Problemas e Soluções
### 1. O código JavaScript não está funcionando
- **Solução:** Verifique se o arquivo `script.js` está corretamente referenciado no `index.html`.

### 2. Alterações no código não refletem no navegador
- **Solução:** Tente recarregar a página com `Ctrl + Shift + R` para limpar o cache do navegador.

### 3. O console exibe erros de sintaxe
- **Solução:** Abra o console do navegador (`F12` ou `Ctrl + Shift + I` em Chrome/Edge) e verifique a linha onde o erro ocorre. Corrija eventuais erros de escrita ou lógica no `script.js`.

### 4. O código não está manipulando os elementos corretamente
- **Solução:** Verifique se os seletores usados (`document.querySelector` ou `getElementById`) correspondem aos elementos do HTML.