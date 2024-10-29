function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let primerElement = array[0];
  if (array.length === 0) {
    return true;
  }
  for(let i = 0; i < array.length ; i++){
    if(array[i] !== primerElement){
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
