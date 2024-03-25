let funcaoExecutada = false;
let funcao2Executada = false;

function iniciarJogo() {
    let numElemento = 0;

    if(funcaoExecutada == true){
        numElemento = 3;
    }else if(funcao2Executada == true) {
        numElemento = 6;
    }

    // Pega a variavel com o id="rgbinicial", e atribui a variavel rgbinicial
    codeinicial = document.getElementById("rgbinicial");
    // Coloca o codigo rgb na tag com id="rgbinicial"
    codeinicial.innerText = rgbAleatorio();

    // Pega o div com o id="elemento" e atribui à variável elementos
    var elementos = document.querySelectorAll("#elemento");
    // Itera sobre cada div e troca a cor de fundo
    elementos.forEach(function (elemento) {
        // Troca a cor de fundo do elemento para a cor gerada
        elemento.style.backgroundColor = rgbAleatorio();
    });

    //gera um numero de 0 a 6 para escolher o quadrado com a cor correta
    quadradoSortiado = Math.floor(Math.random() * numElemento);
    // Troca a cor de acordo com 'quadradoSortiado'
    elementos[quadradoSortiado].style.backgroundColor = codeinicial.innerText;
}

function rgbAleatorio() {
    //Gera um numero RGB aleatorio
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    // Envia os numero r + g + b em uma variavel
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function vereficarCor() {
    //Pega o texto na tag <p id="rgbinicial">
    var textoRgb = document.getElementById("rgbinicial").innerText;

    //Pega o div com o id="elemento" e atribui à variável elemento
    var elementos = document.querySelectorAll("#elemento");
    // Itera sobre cada div individualmente
    elementos.forEach(function (elemento) {
        // Cria uma função caso haja clique
        elemento.addEventListener("click", function () {
            if (elemento.style.backgroundColor === textoRgb) {
                //exibe a mensagem de vitoria
                document.getElementById("resultado").innerText =
                    "Parabéns voce acertou a cor.";
                elementos.style.backgroundColor = textoRgb;
            } else {
                //Troca a cor de fundo do elemento clicado para a cor #1c1c1c
                elemento.style.backgroundColor = "#1c1c1c";
                //exibe a mensagem de erro
                document.getElementById("resultado").innerText =
                    "Você errou a cor, tente novamente.";
            }
        });
    });
}

function criarQuadradosFacil() {
    funcaoExecutada = true;
    // Obtém a informaçao id="conteiner"
    let conteiner = document.getElementById("conteiner");

    // Obtém as referências aos botões de modo fácil
    let modoFacil = document.getElementById("Facil");

    // Adiciona um event listener de clique ao botão de modo fácil
    modoFacil.addEventListener("click", function addBottons() {
        TrocaFraseInicial()
        // Cria 3 quadrados quando o modo fácil é selecionado
        for (let i = 0; i < 3; i++) {
            // Cria um novo elemento div para representar um quadrado
            let quadrado = document.createElement("button");
            quadrado.id = "elemento"; // Define o id do quadrado

            // Adiciona um event listener de clique a cada quadrado criado
            quadrado.addEventListener("click", function () {
                vereficarCor(); // Chama a função verificarCor quando um quadrado é clicado
            });

            // Adiciona o quadrado ao contêiner
            conteiner.appendChild(quadrado);
        }
    });
    modoFacil.removeEventListener("click", criarQuadradosFacil);

}

function criarQuadradosDificil() {
    funcao2Executada = true;
    // Obtém a informaçao id="conteiner"
    let conteiner = document.getElementById("conteiner");

    // Obtém as referências aos botões de modo dificil
    let modoDificil = document.getElementById("Dificil");

    // Adiciona um event listener de clique ao botão de modo difícil
    modoDificil.addEventListener("click", function () {
        TrocaFraseInicial()
        // Cria 6 quadrados quando o modo difícil é selecionado
        for (let i = 0; i < 6; i++) {
            // Cria um novo elemento div para representar um quadrado
            let quadrado = document.createElement("button");
            quadrado.id = "elemento"; // Define o id do quadrado

            // Adiciona um event listener de clique a cada quadrado criado
            quadrado.addEventListener("click", function () {
                vereficarCor(); // Chama a função verificarCor quando um quadrado é clicado
            });

            // Adiciona o quadrado ao contêiner
            conteiner.appendChild(quadrado);
        }
    });
}

function TrocaFraseInicial() {
    let textoComeco = document.getElementById("textoComeco");
    textoComeco.innerText = "";
}

function reniciar() {
    // Recarrega a página
    location.reload();
}