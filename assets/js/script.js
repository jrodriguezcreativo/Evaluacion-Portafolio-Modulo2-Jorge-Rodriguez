document.getElementById('telefono').addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '');
  

  if (valor.length > 0) {
    valor = valor.substring(0, 9); 
    valor = valor.replace(/^(\d{1})(\d{4})(\d{4})$/, '$1-$2-$3');
  }
  
  e.target.value = valor;
});