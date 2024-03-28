let funcaoExecutada = false;
let funcao2Executada = false;
let funcao3Executada = false;

function iniciarJogo() {
    let numElemento = 0;
    let tipoDeCor = '';

    if (funcaoExecutada) {
        numElemento = 3;
        tipoDeCor = rgbAleatorio();
    } else if (funcao2Executada) {
        numElemento = 6;
        tipoDeCor = rgbAleatorio();
    } else if (funcao3Executada) {
        numElemento = 6;
        tipoDeCor = hexadecimalAleatorio();
    }

    // Pega a variavel com o id="rgbinicial", e atribui a variavel rgbinicial
    codeinicial = document.getElementById("rgbinicial");
    // Coloca o codigo rgb na tag com id="rgbinicial"
    codeinicial.innerText = tipoDeCor;

    // Pega o div com o id="elemento" e atribui à variável elementos
    let elementos = document.querySelectorAll("#elemento");
    // Itera sobre cada div e troca a cor de fundo
    elementos.forEach(function (elemento) {
        // Troca a cor de fundo do elemento para a cor gerada
        if (funcaoExecutada || funcao2Executada) {
            elemento.style.backgroundColor = rgbAleatorio();
        } else if (funcao3Executada) {
            elemento.style.backgroundColor = hexadecimalAleatorio();
        }
    });

    //gera um numero de 0 a 6 para escolher o quadrado com a cor correta
    quadradoSortiado = Math.floor(Math.random() * numElemento);
    // Troca a cor de acordo com 'quadradoSortiado'
    elementos[quadradoSortiado].style.backgroundColor = codeinicial.innerText;
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
                    "Parabéns voce acertou.";
            } else {
                //Troca a cor de fundo do elemento clicado para a cor #1c1c1c
                elemento.style.backgroundColor = "#1c1c1c";
                //exibe a mensagem de erro
                document.getElementById("resultado").innerText =
                    "tente novamente.";
            }
        });
    });
}

function criarQuadradosFacil() {
    funcaoExecutada = true;
    // Obtém a informaçao id="conteiner"
    let conteiner = document.getElementById("conteiner");

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

}

function criarQuadradosDificil() {
    funcao2Executada = true;
    // Obtém a informaçao id="conteiner"
    let conteiner = document.getElementById("conteiner");

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
}

function TrocaFraseInicial() {
    let textoComeco = document.getElementById("textoComeco");
    textoComeco.innerText = "";
}

function reniciar() {
    // Recarrega a página
    location.reload();
}

function rgbAleatorio() {
    //Gera um numero RGB aleatorio
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    // Envia os numero r + g + b em uma variavel
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function hexadecimalAleatorio() {
    // Array contendo os caracteres hexadecimais permitidos
    let hexadecimal = [
        'a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ];

    // Gerando 6 números aleatórios para escolher caracteres hexadecimais
    let h1 = Math.floor(Math.random() * 15);
    let h2 = Math.floor(Math.random() * 15);
    let h3 = Math.floor(Math.random() * 15);
    let h4 = Math.floor(Math.random() * 15);
    let h5 = Math.floor(Math.random() * 15);
    let h6 = Math.floor(Math.random() * 15);

    // Obtendo os caracteres hexadecimais correspondentes aos números aleatórios gerados
    let codeHexadecimal1 = hexadecimal[h1];
    let codeHexadecimal2 = hexadecimal[h2];
    let codeHexadecimal3 = hexadecimal[h3];
    let codeHexadecimal4 = hexadecimal[h4];
    let codeHexadecimal5 = hexadecimal[h5];
    let codeHexadecimal6 = hexadecimal[h6];

    // Concatenando os caracteres hexadecimais para formar o código hexadecimal completo
    let codeHexa = '#' + codeHexadecimal1 + codeHexadecimal2 + codeHexadecimal3 + codeHexadecimal4 + codeHexadecimal5 + codeHexadecimal6;

    // Retornando o código hexadecimal gerado
    return codeHexa;
}


function quadradosImpossiveis() {
    funcao3Executada = true;
    // Obtém a informaçao id="conteiner"
    let conteiner = document.getElementById("conteiner");
    // Obtém a informaçao id="objetivo"
    let objetivo = document.getElementById('objetivo');
    objetivo.innerText = "Seu objetivo e acertar a cor de acordo com o Hexadecimal"

    TrocaFraseInicial();
    // Cria 6 quadrados quando o modo Impossivel é selecionado

    for (let i = 0; i < 6; i++) {
        // Cria um novo elemento div para representar um quadrado
        let quadrado = document.createElement("button");
        quadrado.id = 'elemento';// Define o id do quadrado

        // Adiciona um event listener de clique a cada quadrado criado
        quadrado.addEventListener("click", function () {
            vereficarCor(); // Chama a função verificarCor quando um quadrado é clicado
        });

        // Adiciona o quadrado ao contêiner
        conteiner.appendChild(quadrado)
    }
}