const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let claves = Object.keys(objeto);
  return claves.length;
};

module.exports = contarPropiedades;
