const skinBtn = document.getElementById("skinBTN");
const configBtn = document.getElementById("configBTN");
const contaBtn = document.getElementById("contaConfigBTN");

const divChanger = document.getElementById("skinChanger");
const divConfigHack = document.getElementById("configHack");
const divConfigConta = document.getElementById("configConta");

skinBtn.addEventListener("click", () => {
  divConfigConta.style.display = "none";
  divConfigHack.style.display = "none";
  divChanger.style.display = "grid";
});

configBtn.addEventListener("click", () => {
  divConfigConta.style.display = "none";
  divConfigHack.style.display = "flex";
  divChanger.style.display = "none";
});

contaBtn.addEventListener("click", () => {
  divConfigConta.style.display = "flex";
  divConfigHack.style.display = "none";
  divChanger.style.display = "none";
});
