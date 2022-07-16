const buttonOpenChat = document.querySelector("#openchat"),
  buttonClose = document.querySelector("#icon-close"),
  logoFB = document.querySelector("#logo-fb"),
  openChat = document.querySelector("#openchat"),
  titleFB = document.querySelectorAll(".title-fb");

logoFB.addEventListener("click", () => {
  document.querySelector(".contenedor-chat").style.display = "block";
  document.querySelector(".logo-fb").style.display = "none";
});

buttonClose.addEventListener("click", () => {
  document.querySelector(".contenedor-chat").style.display = "none";
  document.querySelector(".logo-fb").style.display = "block";
});

buttonOpenChat.addEventListener("mouseover", () => {
  document.querySelector(".icon-paper-plane").style.transitionDuration = "1.2s";
  document.querySelector(".icon-paper-plane").style.transform =
    "rotate(360deg)";
});

buttonOpenChat.addEventListener("mouseout", () => {
  document.querySelector(".icon-paper-plane").style.transitionDuration = "";
  document.querySelector(".icon-paper-plane").style.transform = "";
});

openChat.addEventListener("click", () => {
  window.open("URL ABRIR CHAT"); /* Boton Abrir Chat */
});

titleFB[0].addEventListener("click", () => {
  window.open("URL ICONO - BARRA SUPERIOR"); /* ICONO BARRA SUPERIOR */
});

titleFB[1].addEventListener("click", () => {
  window.open("URL TEXTO - BARRA SUPERIOR"); /* TEXTO BARRA SUPERIOR */
});
