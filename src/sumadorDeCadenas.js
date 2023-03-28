function convertirNumero(cadena)
{
  if (cadena == "")
  {
    return 0;
  }
  return parseInt(cadena);
}

function sumarCadena(cadena)
{
  let listaNumeros = cadena.split(",");
  let suma = 0;
  for (let numero of listaNumeros)
  {
    suma+=convertirNumero(numero);
  }
  return suma;
}

export default sumarCadena;