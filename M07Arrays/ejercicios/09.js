function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let cont = 0;
  array.forEach((element) => {
    if(element > 10){
      cont++;
    }
  });
  return cont;
}

module.exports = contarElementosMayoresA10;
