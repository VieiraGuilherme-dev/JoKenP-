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
