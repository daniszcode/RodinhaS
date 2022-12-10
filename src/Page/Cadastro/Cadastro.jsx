import React from "react";
import { LogoImg } from "../../Components/Logo/Logo";
import "./Cadastro.css";
import { Cadastro } from "../../Model/Cadastro";
import { Endereco } from "../../Model/Endereco";
import { ButtonPink } from "../../Components/Button/Button";

const CadastroPage = () => {
  const [rua, setRua] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [estado, setEstado] = React.useState("");

  const instanciaCadastro = new Cadastro(
    new Endereco(rua, complemento, cep, cidade, estado)
  );

  return (
    <>
      <body className="container-CadastroPage">
        <main className="container-CadastroPage--main">
          <header className="container-CadastroPage--header">
            <LogoImg
              imageGirlmap="image-login--girlmap"
              imageGirlsit="image-login--girlsit"
            />
          </header>
          <section className="container-section--text">
            <div className="box-section--text">
              <h1 className="box-text--logo">Cadastr</h1>
              <span className="span-h1">O</span>
            </div>
            <footer className="container-box--input">
              <div className="box-input--user--pass">
                <input
                  className="input-rua"
                  type="text"
                  name="Rua"
                  id="Rua"
                  onChange={(e) => setRua(e.target.value.toLowerCase())}
                  placeholder="Rua"
                />
                <hr className="hr-input--user" />
                <input
                  className="input-complemento"
                  type="text"
                  name="complemento"
                  id="complemento"
                  onChange={(e) => setComplemento(e.target.value.toLowerCase())}
                  placeholder="complemento"
                />
                <hr className="hr-input--user" />
                <input
                  className="input-cep"
                  type="text"
                  name="cep"
                  id="cep"
                  onChange={(e) => setCep(e.target.value.toLowerCase())}
                  placeholder="cep"
                />
                <hr className="hr-input--user" />
                <input
                  className="input-cidade"
                  type="text"
                  name="cidade"
                  id="cidade"
                  onChange={(e) => setCidade(e.target.value.toLowerCase())}
                  placeholder="cidade"
                />
                <hr className="hr-input--user" />
                <input
                  className="input-estado"
                  type="text"
                  name="estado"
                  id="estado"
                  onChange={(e) => setEstado(e.target.value.toLowerCase())}
                  placeholder="estado"
                />
                <hr className="hr-input--user" />
              </div>
              <div className="box-button--small-cadastro">
                <ButtonPink onClick={console.log(instanciaCadastro.endereco)}>
                  Enviar
                </ButtonPink>
              </div>
            </footer>
          </section>
        </main>
      </body>
    </>
  );
};

export { CadastroPage };
