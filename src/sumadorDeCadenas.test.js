import sumarCadena from "./sumadorDeCadenas";

describe("Sumador de Cadenas", () => {
  it("Devuelve 0 para una cadena vacía", () => {
    expect(sumarCadena("")).toEqual(0);
  });

  it("Devuelve 1 para la cadena correspondiente", () => {
    expect(sumarCadena("1")).toEqual(1);
  });

  it("Devuelve el valor numérico de una cadena para un solo número", () => {
    expect(sumarCadena("3")).toEqual(3);
  });
});
