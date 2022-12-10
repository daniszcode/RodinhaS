import { Endereco } from "../../Endereco";

export const CadastroMock = {
  id: "123",
  createdAt: new Date().toLocaleDateString("br-BR"),
  updatedAt: new Date().toLocaleDateString("br-BR"),
  endereco: new Endereco(),
};
