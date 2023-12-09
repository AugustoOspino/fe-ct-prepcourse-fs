function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  var str1 = 'Hola '
  var str2 = '!'
 // console.log(str1 + nombre + str2)
  return  str1 + nombre + str2;
}

module.exports = obtenerSaludo;