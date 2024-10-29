function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
   // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let tex= texto;
  let invertido = '';
  for(let i = tex.length-1 ;i>=0;i--){
    invertido += tex[i];
  }
  return invertido;
}

module.exports = invertirTexto;