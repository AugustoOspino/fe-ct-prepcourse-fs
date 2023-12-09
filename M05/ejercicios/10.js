function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  // el !isNaN() es para que no de error si la fecha es inválida
  return fecha instanceof Date && !isNaN(fecha);
  
}

module.exports = esFechaValida;