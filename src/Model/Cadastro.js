import { v4 } from "uuid";
import { Endereco } from "./Endereco";

export class Cadastro {
  id;
  criadoEm;
  atualizadoEm;
  endereco = Endereco;
  constructor(endereco) {
    this.id = v4();
    this.criadoEm = new Date().toLocaleString();
    this.atualizadoEm = new Date().toLocaleString();
    this.endereco = endereco;
  }
}
