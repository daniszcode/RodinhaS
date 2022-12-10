import { Endereco } from "../../Endereco";
// eslint-disable-next-line jest/no-mocks-import
import { CadastroMock } from "../__mocks__/CadastroMock";

describe("when i called the Cadastro...", () => {
  it("id attribute are called", () => {
    expect(CadastroMock.id).toStrictEqual("123");
  });

  it("createdAt attribute are called", () => {
    expect(CadastroMock.createdAt).toBe(new Date().toLocaleDateString("br-BR"));
  });
  it("updatedAt attribute are called", () => {
    expect(CadastroMock.updatedAt).toBe(new Date().toLocaleDateString("br-BR"));
  });

  it("endereco attribute are called", () => {
    expect(CadastroMock.endereco).toBeInstanceOf(Endereco);
  });
});
