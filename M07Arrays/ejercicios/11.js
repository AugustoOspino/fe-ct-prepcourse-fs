function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrMul =[];
  for(let i= 0 ; i < array.length ; i++){
    arrMul.push(array[i]*array.indexOf(array[i]));
  }
  return arrMul;
}

module.exports = multiplicarElementosPorIndice;
