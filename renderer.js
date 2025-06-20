// renderer.js
const button = document.getElementById("btn");
const registro = document.getElementById("reg");
const mostraSenha = document.getElementById("olho")

// Verificar se o botão de login existe (pra não dar erro na página de registro)
if (button) {
  button.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email == "123" && senha == "123"){
      window.location.href = "menu.html"
    }
  });
}

// Quando clicar no botão "registre-se", troca pra o registro.html
if (registro) {
  registro.addEventListener("click", () => {
    window.location.href = "registro.html";
  });
}

if(olho){
  olho.addEventListener("click", ()=>{
  const input = document.getElementById('senha')
  if(input.type == "password"){
    input.type = "text"
  } else if (input.type == "text"){
    input.type = "password"
  }
  })
}