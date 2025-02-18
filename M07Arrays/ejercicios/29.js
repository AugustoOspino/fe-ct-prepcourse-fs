function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0 ){
    return null;
  }
  let sgte = 0;
  for(let i = 0 ; i< numeros.length; i++){
    sgte = numeros [i] + 1;
    if(i === numeros.length-1){
      return null;
    }
    if(numeros[i+1] !== sgte ){
      return sgte;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;