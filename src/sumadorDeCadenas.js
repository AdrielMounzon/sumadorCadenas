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
  let validarSeparador = cadena.substring(0, 6);
  if(validarSeparador == "//[;] ")
  {
    let separador = validarSeparador[3];
    cadena = cadena.substring(6);
    cadena = cadena.replaceAll(separador, "-");
  }
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