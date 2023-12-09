//var valor = 1;
//esTipoDato(false);
function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  //console.log(typeof valor);
  var tipo = typeof valor;
 return tipo;
}

module.exports = esTipoDato;