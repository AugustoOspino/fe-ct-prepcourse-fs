const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
    // Recorremos el array y aplicamos el callback para verificar si se encuentra el elemento
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i]; // Si el callback devuelve true, retornamos el elemento
      }
    }
    // Si ningún elemento cumple la condición del callback, devolvemos el mensaje
    return "No se encontró el elemento";
  
  
};

module.exports = buscarElemento;
