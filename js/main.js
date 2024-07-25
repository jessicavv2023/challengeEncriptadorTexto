document.addEventListener("DOMContentLoaded", function () {
  var btnEncriptar = document.querySelector("#btnEncriptado");
  var btnDesencriptar = document.querySelector("#btnDesencriptado");
  var btnCopiar = document.querySelector("#btnCopiar");
  var txtDesencriptado = document.getElementById("txtDesencriptado");
  var imgMuneco = document.querySelector(".imgMuneco");
  var pTextarea = document.querySelector("#pTextareaa");

  btnEncriptar.onclick = encriptar;
  btnDesencriptar.onclick = desencriptar;
  btnCopiar.onclick = copiar;
  txtDesencriptado.addEventListener("input", toggleMuneco);

  function encriptar() {
    var textoEncriptado = document
      .getElementById("txtEncriptado")
      .value.toLowerCase();
    var encriptador = textoEncriptado
      .replace(/e/gim, "enter")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/u/gim, "ufat")
      .replace(/o/gim, "ober");
    txtDesencriptado.value = encriptador;
    // document.getElementById("btnCopiar").style.display = "inherit";
    toggleMuneco();
  }

  function desencriptar() {
    var textoEncriptado = document
      .getElementById("txtEncriptado")
      .value.toLowerCase();
    var desencriptador = textoEncriptado
      .replace(/enter/gim, "e")
      .replace(/imes/gim, "i")
      .replace(/ai/gim, "a")
      .replace(/ufat/gim, "u")
      .replace(/ober/gim, "o");
    txtDesencriptado.value = desencriptador;
    toggleMuneco();
  }

  function copiar() {
    var texto = document.querySelector("#txtDesencriptado");
    texto.select();
    document.execCommand("copy");
  }

  function toggleMuneco() {
    if (txtDesencriptado.value.trim() !== "") {
      imgMuneco.style.display = "none";
      pTextarea.style.display = "none";
      btnCopiar.style.display = "block";
    } else {
      imgMuneco.style.display = "block";
      pTextarea.style.display = "block";
      btnCopiar.style.display = "none";
    }
  }

  // Inicialización para mostrar la imagen y el texto al cargar la página
  toggleMuneco();
});
