// Criação do array que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim(); // Captura o nome inserido pelo usuário

    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista existente

    // Cria um <li> para cada amigo e adiciona na lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há amigos na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione ao menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
