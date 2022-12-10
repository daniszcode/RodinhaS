// eslint-disable-next-line jest/no-mocks-import
import { EnderecoMock } from "../__mocks__/EnderecoMock";

describe("when i called the Endereco...", () => {
  it("rua attribute are called and is not undefined", () => {
    expect(EnderecoMock.rua).not.toBeUndefined();
  });

  it("rua attribute are called", () => {
    expect(EnderecoMock.rua).toBe("rua");
  });

  it("complemento attribute are called and is not undefined", () => {
    expect(EnderecoMock.complemento).not.toBeUndefined();
  });

  it("complemento attribute are called", () => {
    expect(EnderecoMock.complemento).toBe("complemento");
  });

  it("cep attribute are called and is not undefined", () => {
    expect(EnderecoMock.cep).not.toBeUndefined();
  });

  it("cep attribute are called", () => {
    expect(EnderecoMock.cep).toBe("cep");
  });
});
