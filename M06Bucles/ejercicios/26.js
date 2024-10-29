function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
    // Normalizar los strings: eliminar espacios y convertir a minúsculas
    let texto1 = str1.replace(/\s/g, '').toLowerCase();
    let texto2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Si las longitudes son diferentes, no pueden ser anagramas
    if (texto1.length !== texto2.length) {
      return false;
    }
  
    // Ordenar los caracteres de ambos strings
    let ordenado1 = texto1.split('').sort().join('');
    let ordenado2 = texto2.split('').sort().join('');
  
    if(ordenado1 === ordenado2){
      return true;
    }
 
  return false ;
 
}

module.exports = esAnagrama;
