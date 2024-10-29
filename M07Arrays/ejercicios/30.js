function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let rep = 0;
  let num = 0;
  for(let i = 0; i < numeros.length ;i++){
    num = numeros[i];
    for(j = i+1; j< numeros.length;j++){
      if(num === numeros[j]){
        rep++;
      }
    }
    if (rep !== 0 ){
      return numeros[i];
    }
  }
}

module.exports = encontrarElementoRepetido;