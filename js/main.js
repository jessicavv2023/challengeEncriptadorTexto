function encriptar() {
  var textoEncriptado = document
    .getElementById("txtEncriptado")
    .value.toLowerCase();

  var encriptador = textoEncriptado.replace(/e/gim, "enter");
  encriptador = encriptador.replace(/i/gim, "imes");
  encriptador = encriptador.replace(/a/gim, "ai");
  encriptador = encriptador.replace(/u/gim, "ufat");
  encriptador = encriptador.replace(/o/gim, "ober");

  document.getElementById("txtDesencriptado").value = encriptador;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
}
function descencriptador() {
  var textoEncriptado = document
    .getElementById("txtEncriptado")
    .value.toLowerCase();

  var encriptador = textoEncriptado.replace(/enter/gim, "e");
  encriptador = encriptador.replace(/imes/gim, "i");
  encriptador = encriptador.replace(/ai/gim, "a");
  encriptador = encriptador.replace(/ufat/gim, "u");
  encriptador = encriptador.replace(/ober/gim, "o");

  document.getElementById("txtDesencriptado").value = encriptador;
}
function btnFCopiar() {
  var texto = document.querySelector("#txtDesencriptado");
  texto.select();
  document.execCommand("copy");
}
