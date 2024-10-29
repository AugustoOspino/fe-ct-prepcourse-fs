function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let array2 = [];
  for(let i = 0 ; i < array.length ; i++){
    array2.push(cb(array[i]));
  }
  //console.log(array);
  //console.log(array2);
  return array2;
  
}

module.exports = map;
