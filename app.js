// Declaração do array que irá armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Capturar o valor do campo de texto
    let nome = document.getElementById("nome").value;
    
    // Validar se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Adicionar o nome ao array de amigos
    amigos.push(nome);

    // Limpar o campo de entrada
    document.getElementById("nome").value = "";

    // Atualizar a lista de amigos na página
    atualizarLista();
}

// Função para atualizar a lista de amigos exibida na página
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista existente

    // Adicionar cada nome da lista de amigos como um item <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibir o nome sorteado
    document.getElementById("resultado").innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;
}

// Adicionar evento ao botão de adicionar amigo
document.getElementById("adicionarBtn").addEventListener("click", adicionarAmigo);

// Adicionar evento ao botão de sortear amigo
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);
