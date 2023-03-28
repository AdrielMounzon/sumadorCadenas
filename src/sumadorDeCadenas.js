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
  return convertirNumero(cadena);
}

export default sumarCadena;