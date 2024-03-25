function criarJogo() {
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
    quadradoSortiado = Math.floor(Math.random() * 6);
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
    var elementos = document.querySelectorAll("#elemento")
    // Itera sobre cada div individualmente 
    elementos.forEach(function (elemento) {
        // Cria uma função caso haja clique
        elemento.addEventListener('click', function () {
            if (elemento.style.backgroundColor === textoRgb) {
                //exibe a mensagem de vitoria
                document.getElementById("resultado").innerText =
                    "Parabéns voce acertou a cor.";
            } else {
                //Troca a cor de fundo do elemento clicado para a cor #1c1c1c
                elemento.style.backgroundColor = "#1c1c1c";
                //exibe a mensagem de erro
                document.getElementById("resultado").innerText =
                    "voce errou a cor, tente novamente.";
            }
        });
    });
}
