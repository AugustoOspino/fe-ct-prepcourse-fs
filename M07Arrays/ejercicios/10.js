function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = -99990;
  for(i = 0; i < array.length ; i++){
    if(array[i] > mayor ){
      mayor = array[i];
    }
  }
  return (array.length !== 0)? array.indexOf(mayor):0;
}

module.exports = encontrarIndiceMayor;
