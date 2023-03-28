import sumarCadena from "./sumadorDeCadenas";

describe("Sumador de Cadenas", () => {
  it("Devuelve 0 para una cadena vacía", () => {
    expect(sumarCadena("")).toEqual(0);
  });
});
