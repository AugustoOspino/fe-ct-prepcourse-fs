function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayus = [];
  for(let i= 0 ; i<array.length ; i++){
    mayus.push(array[i].toUpperCase());
  }
  return mayus;
}

module.exports = convertirStringAMayusculas;
