function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let postsA = objetoUsuario.posts ;
  let contLikes = 0;
  for(let i = 0 ; i < postsA.length ;i++){
    contLikes += postsA[i].likes;
  }
  return contLikes;

}

module.exports = sumarLikesDeUsuario;
