<p align="center"> 
  <img src="https://readme-typing-svg.herokuapp.com?font=Century+Gothic&weight=800&size=48&pause=1000&color=F7F7F7&center=true&vCenter=true&width=600&lines=Jogo+de+Anima%C3%A7%C3%A3o+Jokenp%C3%B4" alt="Typing SVG" />
</p>

---

# 📖 Visão Geral

Este projeto é um jogo de **Jokenpô** (Pedra, Papel e Tesoura) desenvolvido com **HTML5**, **CSS3** e **JavaScript**. O site tem uma animação divertida onde o usuário pode selecionar uma opção (Pedra, Papel ou Tesoura), e a máquina escolhe aleatoriamente uma opção. O resultado é exibido logo após a escolha, e há uma animação visual para tornar a experiência mais interativa. 🖱️✊✋✌️

---

# 🌟 Funcionalidades e Destaques

- **Escolha do Usuário e Computador:** O jogador escolhe uma das opções (Pedra, Papel ou Tesoura) e o computador escolhe aleatoriamente, com animações de transformação para deixar o jogo mais interessante. 🎮
  
- **Animação do Jogo:** Após a escolha, uma animação de shake ocorre nas imagens, tanto da escolha do usuário quanto do computador. 📷

- **Resultado Instantâneo:** O resultado do jogo (vencedor ou empate) é exibido com uma animação de texto que informa quem ganhou. 🏆

---

# 🛠️ Tecnologias Utilizadas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="35"  />

• Estruturação do conteúdo e organização da página.

##

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="35"  />

• Estilização e animações para uma interface agradável e interativa.

##

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="35"  />

• Lógica do jogo e animações de interatividade.

---

# 📂 Estrutura do Projeto e Detalhes de Implementação

## 1. Estrutura HTML (index.html)

O arquivo `index.html` contém a estrutura básica da página, com a parte visual do jogo, como a área de resultados e a seleção de opções do usuário.

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Animação Jokenpô</title>
</head>

<body>
    <main class="container">
        <div>
            <div class="results">
                <span class="user-result">
                    <img src="./img/pedra.png" alt="escolha do usuario">
                    <p></p>
                </span>
            
                <span class="computer-result">
                    <img src="./img/pedra.png" alt="escolha da maquina">
                    <p></p>
                </span>
            </div>

            <p class="result-text">Bora Jogar?</p>

            <div class="options">
                <span class="option-image">
                    <img src="./img/pedra.png" alt="imagem Pedra">
                    <p>Pedra</p>
                </span>

                <span class="option-image">
                    <img src="./img/papel.png" alt="imagem Papel">
                    <p>Papel</p>
                </span>

                <span class="option-image">
                    <img src="./img/tesoura.png" alt="imagem Tesoura">
                    <p>Tesoura</p>
                </span>
            </div>
        </div>
    </main>
</body>
<script src="./script.js"></script>

</html>
~~~

---

## 2. Estilização CSS

Abaixo está o código CSS que define a aparência do site, incluindo as animações para os resultados e interações.

~~~css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100vw;  
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f7fb;
}

.container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem 5rem;
    border-radius: 15px;
}

.results {
    display: flex;
    gap: 7rem;
    justify-content: center;
}

.results img {
    width: 100px;
}

.user-result img {
    transform: rotate(90deg);
}

.computer-result img {
    transform: rotate(-90deg) rotateY(180deg);
}

.result-text {
    text-align: center;
    color: #7d2ae8;
    font-weight: bold;
    margin: 1.5rem 0;
    font-size: 2rem; 
}

.container .computer-result {
    transform-origin: right;
    animation: computerShakes 0.7s ease infinite;
}

@keyframes computerShakes {
    50% {
        transform: rotate(-10deg);
    }
}

.container.start .user-result {
    transform-origin: left;
    animation: userShakes 0.7s ease infinite;
}

.container .user-result {
    transform-origin: left;
    animation: userShakes 0.7s ease infinite;
}

@keyframes userShakes {
    50% {
        transform: rotate(10deg);
    }
}

.options {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 4rem;
}

.options p {
    color: #7d2ae8;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
}

.option-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.option-image:hover {
    opacity: 1;
    transform: scale(1.2); 
}

.option-image img {
    width: 80px;
}
~~~

---

## 3. Lógica JavaScript

Aqui está o código JavaScript que controla a interação do usuário, o resultado do jogo e as animações.

~~~javascript
const optionImages = document.querySelectorAll(".option-image");
const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");
const computerResult = document.querySelector(".computer-result img");
const userResult = document.querySelector(".user-result img");

const computerSrcImages = ["img/pedra.png", "img/papel.png", "img/tesoura.png"];

const winner = {
  RR: "Empate",
  RP: "Computador",
  RS: "Você",
  PP: "Empate",
  PR: "Você",
  PS: "Computador",
  SS: "Empate",
  SR: "Computador",
  SP: "Você"
};

function handleOptionClick(event) {
  const clickedImage = event.currentTarget;
  const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

  container.classList.add("start");
  resultText.innerHTML = "...";

  userResult.src = computerResult.src = computerSrcImages[0];

  setTimeout(() => {
    container.classList.remove("start");

    userResult.src = computerSrcImages[clickedIndex];

    const randomNumber = Math.floor(Math.random() * computerSrcImages.length);
    computerResult.src = computerSrcImages[randomNumber];

    const userValue = ["R", "P", "S"][clickedIndex];
    const computerValue = ["R", "P", "S"][randomNumber];
    const finalResultKey = userValue + computerValue;

    const finalResult = winner[finalResultKey];

    resultText.textContent = finalResult === "Empate" ? "Empate" : finalResult + " Ganhou";
  }, 2000);
}

optionImages.forEach((img) => {
  img.addEventListener("click", handleOptionClick);
});
~~~

---

# 🚀 Como Rodar o Projeto Localmente

Para rodar este projeto localmente, siga as instruções abaixo:

1. Faça o download dos arquivos HTML, CSS e JavaScript.
2. Abra o arquivo `index.html` em seu navegador.
3. Clique nas opções para jogar uma partida de Jokenpô!

Espero que esse markdown ajude a entender a estrutura do código e as funcionalidades do site! Se precisar de mais detalhes, só avisar! 😊
