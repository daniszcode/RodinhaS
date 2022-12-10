import { v4 } from "uuid";
import { Endereco } from "./Endereco";

export class Cadastro {
  id;
  creadoEm;
  atualizadoEm;
  endereco = Endereco;
  constructor(endereco) {
    this.id = v4();
    this.creadoEm = new Date();
    this.atualizadoEm = new Date();
    this.endereco = endereco;
  }
}
