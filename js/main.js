// Función existente de encriptar
function encriptar() {
  var textoEncriptado = document
    .getElementById("txtEncriptado")
    .value.toLowerCase();

  var encriptador = textoEncriptado.replace(/e/gim, "enter");
  encriptador = encriptador.replace(/i/gim, "imes");
  encriptador = encriptador.replace(/a/gim, "ai");
  encriptador = encriptador.replace(/u/gim, "ufat");
  encriptador = encriptador.replace(/o/gim, "ober");

  var txtDesencriptado = document.getElementById("txtDesencriptado");
  txtDesencriptado.value = encriptador;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";

  toggleMuneco(); // Llamar a la función para ocultar la imagen
}

// Función existente de desencriptar
function descencriptador() {
  var textoEncriptado = document
    .getElementById("txtEncriptado")
    .value.toLowerCase();

  var encriptador = textoEncriptado.replace(/enter/gim, "e");
  encriptador = encriptador.replace(/imes/gim, "i");
  encriptador = encriptador.replace(/ai/gim, "a");
  encriptador = encriptador.replace(/ufat/gim, "u");
  encriptador = encriptador.replace(/ober/gim, "o");

  var txtDesencriptado = document.getElementById("txtDesencriptado");
  txtDesencriptado.value = encriptador;

  toggleMuneco(); // Llamar a la función para ocultar la imagen
}

// Función existente de copiar
function btnFCopiar() {
  var texto = document.querySelector("#txtDesencriptado");
  texto.select();
  document.execCommand("copy");
}

// Nueva función para mostrar/ocultar imagen
function toggleMuneco() {
  var txtDesencriptado = document.getElementById("txtDesencriptado");
  var imgMuneco = document.querySelector(".imgMuneco");
  if (txtDesencriptado.value.trim() !== "") {
    imgMuneco.style.display = "none";
  } else {
    imgMuneco.style.display = "block";
  }
}

// Añadir evento para ocultar imagen cuando textarea tenga contenido
document
  .getElementById("txtDesencriptado")
  .addEventListener("input", toggleMuneco);
