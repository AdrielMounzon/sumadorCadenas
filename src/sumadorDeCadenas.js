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
  let listaNumeros = cadena;
  let suma = 0;
  if(cadena.includes(",") && !(cadena.includes("-")))
  {
    listaNumeros = cadena.split(",");
  }
  else if(cadena.includes("-"))
  {
    let cadenaModificada = cadena.replaceAll("-", ",");
    listaNumeros = cadenaModificada.split(",");
  }
  for (let numero of listaNumeros)
  {
    suma+=convertirNumero(numero);
  }
  return suma;
}

export default sumarCadena;