$(document).ready(function() {

document.getElementById('telefono').addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '');
  

  if (valor.length > 0) {
    valor = valor.substring(0, 9); 
    valor = valor.replace(/^(\d{1})(\d{4})(\d{4})$/, '$1-$2-$3');
  }
  
  e.target.value = valor;
});

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensajeEnviado").style.display = "block"
  this.reset()
});

const degradado = $(".degradado")

$(degradado).on("mouseenter", function(){
  $(this).addClass("fondo")
})

$(degradado).on("mouseleave", function(){
  $(this).removeClass("fondo")
})

})