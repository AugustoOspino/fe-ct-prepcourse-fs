// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: "valor1", // Propiedad simple
    propiedad2: "valor2", // Propiedad simple
    propiedad3: {
      propiedad4: "valor4", // Propiedad anidada dentro de propiedad3
      propiedad5: "valor5", // Propiedad anidada dentro de propiedad3
      propiedad6: {
        propiedad7: "valor7", // Propiedad anidada dentro de propiedad6
        propiedad9: function() {
          return this.propiedad7; // Método que retorna "valor7"
        },
      },
    },
  };
//console.log(objetoAnidado);

module.exports = objetoAnidado;
