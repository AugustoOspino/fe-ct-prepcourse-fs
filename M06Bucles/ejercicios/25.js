function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  // Normalizar el texto: eliminar espacios, convertir a minúsculas y eliminar caracteres no alfabéticos
  let tex = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let invertido = '';
  for(let i = tex.length-1 ;i>=0;i--){
    invertido += tex[i];
  }
  return (tex === invertido) ? true:false;
}

module.exports = esPalindromo;
